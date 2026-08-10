# ADR-007 — Introducir Eleventy como generador de sitio estático

**Estado:** Propuesto — pendiente de aprobación
**Fecha de propuesta:** 2026-07-16

## Contexto

El sitio tiene 29 páginas HTML estáticas. Cada una contiene una copia
completa del header, la navegación y el footer, que en la práctica son
idénticos en todas las páginas. Este diseño tiene un costo operativo
concreto: cualquier cambio global (por ejemplo, renombrar "Servicios"
a "Contenido" en el footer) requiere editar manualmente los 29 archivos.

El sitio está en crecimiento activo. El ROADMAP contempla nuevos casos,
nuevos artículos de biblioteca, nuevas herramientas y eventualmente nuevas
secciones. Con el modelo actual, cada página nueva añade una copia más
del boilerplate compartido, aumentando la deuda de mantenimiento de forma
lineal con el tamaño del sitio.

El problema no es operativo solamente: es un riesgo de coherencia. Un
cambio parcial (como el que generó el incidente del footer con 27 archivos)
puede introducir inconsistencias que afecten la señal editorial del sitio
frente a Google.

## Decisión

Introducir **Eleventy (11ty)** como generador de sitio estático. Eleventy
toma plantillas con partials reutilizables (header, footer, nav) y archivos
de contenido, y genera HTML estático idéntico al actual. El output que
llega a GitHub Pages no cambia: siguen siendo archivos `.html` servidos
directamente.

**Qué cambia en el repositorio:**

- Se añade `package.json` con Eleventy como dependencia de desarrollo.
- Los partials compartidos (header, footer, nav) viven en `_includes/`.
- Las páginas pasan a ser plantillas Nunjucks (`.njk`) en la misma
  estructura de directorios que tienen hoy.
- El output generado vive en `_site/` y es lo que GitHub Pages sirve.
- El workflow de GitHub Actions corre `npm run build` antes de subir el
  artifact, apuntando a `_site/` en lugar de `.`.
- `scripts/audit.js` se actualiza para validar contra `_site/`.

**Qué no cambia:**

- Todas las URLs (trailing slash, estructura de directorios: idéntica).
- El HTML que ve Google (output estático, funcionalmente igual al actual).
- El CSS en `assets/css/shared.css` (se copia a `_site/assets/` tal cual).
- El JavaScript inline de herramientas (calculadora, selector de antena).
- Los schemas JSON-LD de cada página (pasan a ser variables por plantilla).
- El sitemap.xml y el CNAME.
- El proceso de edición de contenido: se edita el `.njk`, se corre el
  build, se hace commit del output generado junto con la fuente.

## Justificación estratégica

**Pregunta NORTH_STAR:** ¿Esto ayuda a alguien a comprender mejor el
subsuelo antes de intervenirlo, y por tanto a confiar mas en nosotros?

Directamente, no. Indirectamente, sí: al eliminar la fricción de mantener
29 archivos en sincronía, se reduce el tiempo que tarda en publicarse un
caso nuevo o un artículo nuevo. El conocimiento útil llega antes. La
cadena "conocimiento → confianza → autoridad → negocio" se acelera.

**Pregunta del quinto año:** Dentro de cinco anos, con 80 o 120 páginas,
el modelo actual de HTML duplicado hace inviable el mantenimiento. Eleventy
escala de 29 a 200 páginas sin cambiar el modelo de trabajo.

**Criterio NORTH_STAR §3 (desempate):** "Reutilizacion y mantenibilidad.
¿Cuál deja el producto mejor, componente reutilizable, menos deuda?" Esta
decisión responde directamente ese criterio.

## Protocolo de migración (sin riesgo SEO)

La migración se ejecuta en fases, con verificación antes de cada paso:

**Fase 1 — Setup sin tocar producción**
Instalar Eleventy localmente. Configurar `_includes/` con los partials.
Migrar las 29 páginas a plantillas `.njk`. Correr el build. Comparar el
output `_site/` contra los archivos actuales: canonicals, schemas, meta
descriptions, estructura HTML. Sin commit de producción hasta que el
output sea funcionalmente idéntico.

**Fase 2 — Verificación**
Correr `scripts/audit.js` contra `_site/`. Validar al menos tres páginas
en Google Rich Results Test contra el output local. Confirmar que los
schemas JSON-LD de cada página mantienen sus valores únicos (no heredan
del layout base).

**Fase 3 — Actualizar el workflow**
Modificar `.github/workflows/deploy.yml` para añadir el paso `npm run
build` y apuntar el artifact a `_site/`. Este commit se hace en branch
separado y se verifica el deploy en staging antes de mergear a main.

**Fase 4 — Primer deploy y monitoreo**
Push a main. Verificar en Google Search Console que el sitemap sigue
siendo leído correctamente. Monitorear cobertura de índice durante 48
horas. Si aparece cualquier anomalía (URLs desindexadas, errores de
canonical), se revierte el workflow al estado anterior con un solo commit.

## Riesgos identificados y mitigaciones

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|------------|
| Canonicals incorrectos en el output | Media | Verificación página por página en Fase 1 antes de tocar produccion |
| Schema JSON-LD heredado del layout en lugar de por página | Media | Cada página declara sus propias variables de schema |
| Workflow apuntando a `.` en lugar de `_site/` | Baja | Checklist explícito en Fase 3; se verifica antes de mergear |
| audit.js validando rutas incorrectas | Baja | Se actualiza en el mismo commit que el build |
| 404.html no generado en `_site/` | Baja | Configuración explícita en `.eleventy.js` para copiar el archivo |

## Alternativas consideradas

**Build script propio en Node.js:** Mas simple de instalar, cero
dependencias externas. Descartado porque escala mal: cuando el sitio
necesite condicionales, bucles sobre listas de casos o datos externos,
el script se convierte en deuda. Se estaría re-inventando un SSG.

**Web Components con JavaScript en el cliente:** Cero build step.
Descartado porque el footer y el header no existen en el HTML inicial
que entrega el servidor, lo que introduce riesgo en el renderizado de
crawlers y complica el debugging.

**Mantener el modelo actual con script de sed:** Sin complejidad nueva.
Descartado porque el problema escala linealmente con el tamano del sitio
y un error en el sed puede romper 29 páginas en un solo comando.

**Hugo o Jekyll:** Validos tecnicamente. Descartados porque Eleventy
adopta HTML y CSS existentes sin imponer estructura de componentes ni
sistema de temas. La migración desde HTML puro es mas directa.

## Consecuencias

- Toda nueva página se crea como archivo `.njk`, no como HTML completo.
- Cualquier cambio global (footer, nav, head) se hace en un partial y
  regenera todo el sitio en el siguiente build.
- El repositorio pasa a tener una dependencia de desarrollo (Eleventy via
  npm). Esto es consistente con `scripts/audit.js`, que ya requiere Node.
- Los archivos fuente (`.njk`) y el output (`_site/`) conviven en el repo.
  Se recomienda añadir `_site/` a `.gitignore` y subir solo el output
  generado en CI, no como archivos versionados manualmente.
- ADR-001 (CSS vanilla) no se ve afectado: el CSS sigue siendo vanilla,
  Eleventy solo lo copia a `_site/assets/` sin procesarlo.
