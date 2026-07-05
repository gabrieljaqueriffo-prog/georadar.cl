# ADR-006: Renombrar calculadora-profundidad a calculadora-viabilidad-gpr

**Estado:** Aprobado conceptualmente. Ejecución pendiente.
**Fecha:** 2026-07-05
**Aprobado:** 2026-07-05
**Propuesto por:** ATLAS
**Aprobado por:** Gabriel Jaque

---

## Contexto

La herramienta publicada en `/herramientas/calculadora-profundidad/` evalúa la
viabilidad de un estudio GPR considerando múltiples variables: profundidad
esperada, tipo de material, humedad, tamaño del objetivo y condiciones generales
del sitio. No es solo una calculadora de profundidad: entrega un criterio
orientativo sobre si el GPR es una alternativa razonable para el problema
planteado.

El slug actual (`calculadora-profundidad`) fue adecuado cuando la herramienta
tenía un alcance más acotado. Hoy no refleja lo que hace y puede generar
expectativas incorrectas en el usuario: alguien que busca "calculadora de
profundidad de georradar" puede esperar ingresar parámetros y obtener metros
exactos, no una evaluación de viabilidad.

Este desajuste entre slug, título y función real tiene consecuencias:

1. La keyword del slug atrae usuarios con una expectativa diferente a la
   herramienta real.
2. El título actual "Calculadora de viabilidad GPR" (visible en la página)
   ya contradice el slug.
3. Los enlaces internos que apuntan a la herramienta usan la URL incorrecta.

---

## Alternativas consideradas

**A. No cambiar la URL — adaptar solo el contenido.**
El slug queda incorrecto para siempre. La URL `/calculadora-profundidad/` sigue
atrayendo usuarios con expectativas incorrectas. La herramienta no puede
posicionarse para "calculadora de viabilidad GPR" con un slug que dice
"profundidad". Esta opción acumula deuda SEO permanente.

**B. Cambiar la URL sin redirect.**
Genera páginas 404 para todos los enlaces entrantes existentes. Pierde el
historial de indexación. Inaceptable.

**C. Cambiar la URL con redirect 301 de la URL anterior a la nueva.**
El historial SEO se transfiere. Los enlaces internos deben actualizarse.
Los enlaces externos (si existen) siguen funcionando. Es la opción correcta
si el cambio se justifica, pero requiere ejecución cuidadosa y seguimiento
en Search Console.

---

## Decisión

Se aprueba la opción C.

Se aprueba el rename estratégico desde calculadora de profundidad hacia
calculadora de viabilidad GPR porque la herramienta ya no evalúa solo
profundidad, sino condiciones preliminares de factibilidad técnica.

**URL actual:** `/herramientas/calculadora-profundidad/`
**URL aprobada:** `/herramientas/calculadora-viabilidad-gpr/`

**Título propuesto:** "Calculadora de viabilidad GPR"

**Bajada propuesta:**
"Evalúa de forma preliminar si un objetivo puede ser abordado con georradar
según profundidad esperada, tipo de material, humedad, tamaño del elemento y
condiciones generales del terreno. El resultado no garantiza detección, pero
ayuda a estimar si el GPR es una alternativa razonable antes de una evaluación
técnica."

**Implementación del redirect:**
GitHub Pages (site estático sin servidor de aplicación) no soporta redirects
301 nativos por configuración de servidor. Las opciones disponibles son:

1. Página HTML con `<meta http-equiv="refresh" content="0; url=/herramientas/calculadora-viabilidad-gpr/">` en la URL antigua. Es un redirect de cliente, no de servidor (301), pero funciona para usuarios y es parcialmente efectivo para SEO.
2. Si se adopta un CDN con soporte de redirects (Cloudflare en modo Proxy), se puede configurar un Page Rule para redirect 301 real. Requiere activar proxy en Cloudflare para este dominio.

La implementación preferida es la opción 2 si el proxy de Cloudflare se activa
en el futuro. Si no, usar la opción 1 como medida intermedia.

---

## Consecuencias

- El slug correcto permite posicionarse para "calculadora de viabilidad GPR"
  y keywords relacionadas.
- Se deben actualizar todos los enlaces internos que apuntan a
  `/herramientas/calculadora-profundidad/`. Archivos a revisar:
  - `herramientas/index.html`
  - `herramientas/necesito-gpr/index.html`
  - `herramientas/selector-antena/index.html` (en JS: `nota` de resultado condicionado y critico)
  - `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html`
  - `biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/index.html`
  - `biblioteca/como-afecta-la-humedad-al-georradar/index.html`
- Se debe mantener la URL antigua con redirect durante al menos 12 meses.
- Se debe monitorear Search Console tras el cambio: verificar que las
  impresiones e indexación se transfieran a la nueva URL en un plazo de 4
  a 8 semanas.
- El `BACKLOG.md` debe actualizarse para reflejar el nuevo slug como URL activa
  y registrar la URL antigua como redirect.

---

## Impacto SEO

- **Positivo:** slug alineado con la función real y con keywords de intención
  correcta ("viabilidad GPR" vs "profundidad GPR").
- **Neutro a positivo:** el redirect 301 transfiere el historial de indexación
  si se implementa correctamente.
- **Riesgo:** pérdida temporal de posiciones durante la transición (habitual en
  cambios de URL). Se mitiga con redirect y actualización de enlaces internos.
- **Acción post-cambio requerida:** revisar Search Console 4 semanas después
  del cambio para confirmar reindexación.

---

## Condiciones de ejecución

El ADR está aprobado conceptualmente. El cambio de URL no se ejecuta en `main`
hasta que Gabriel lo confirme explícitamente en una tarea posterior. Antes de
ejecutar, se deben cumplir todas las condiciones siguientes en orden:

1. Crear rama separada para el cambio.
2. Implementar redirect 301 desde `/herramientas/calculadora-profundidad/` hacia
   `/herramientas/calculadora-viabilidad-gpr/`.
3. Actualizar todos los enlaces internos listados en la sección "Consecuencias".
4. Actualizar title, H1, meta description y textos internos de la herramienta.
5. Verificar que no queden referencias ambiguas a "profundidad garantizada".
6. Preparar monitoreo en Search Console durante 4 a 6 semanas después de publicar.

**Regla:** no ejecutar el cambio de slug hasta confirmación explícita de Gabriel.

---

## Nota sobre numeración

El brief original sugería "ADR-004" para esta decisión. ADR-004 ya existe
(`ADR-004-arquitectura-dos-dominios.md`). Este ADR se numera como ADR-006,
en secuencia correcta después de ADR-005.
