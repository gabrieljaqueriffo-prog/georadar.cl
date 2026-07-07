# INTERNAL_LINKING_AUDIT.md

> Auditoria de enlazado interno realizada el 2026-07-05.
> Metodologia: extraccion automatizada de todos los `href` internos de las 23
> paginas publicas incluidas en `sitemap.xml`, clasificados en dos categorias:
>
> - **Estructurales**: aparecen en nav o footer de todas las paginas (no aportan
>   senal SEO contextual; solo confirman accesibilidad).
> - **Contextuales**: aparecen en el cuerpo del contenido de una pagina especifica
>   (aportan senal tematica real; estos son los que importan para la regla de
>   arquitectura).
>
> Regla aplicada (`ARCHITECTURE.md`, `DEFINITION_OF_DONE.md`):
> cada activo publico debe tener **al menos 2 enlaces entrantes** y
> **al menos 1 enlace saliente estrategico** (no es suficiente con enlaces
> estructurales de nav/footer).
>
> Estados:
> - **Cumple**: cumple la regla con margen.
> - **Revisar**: cumple el minimo tecnico pero con debilidad contextual concreta.
> - **No cumple**: no llega al minimo de 2 entrantes.

---

## Tabla de auditoria

| URL | Capacidad | Entrantes totales | Contextuales entrantes | Salientes contextuales | Estado | Recomendacion |
|-----|-----------|-------------------|------------------------|------------------------|--------|---------------|
| `/` | Home | 22 | 0 (es la pagina destino universal) | 12 (cards de servicios, casos, herramientas) | ✅ Cumple | Sin accion. |
| `/mineria/` | Servicio | 22 | 0 estructurales + 1 contextual (`/mineria/casos/socavones-espesador-t5/`) | 2 contextuales (`/mineria/casos/socavones-espesador-t5/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`) | ✅ Cumple | Sin accion. |
| `/utilities/` | Servicio | 22 | 1 contextual (`/utilities/casos/accesos-metro-de-santiago/`) | 2 contextuales (`/utilities/casos/accesos-metro-de-santiago/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`) | ✅ Cumple | Sin accion. |
| `/construccion/` | Servicio | 17 | 1 contextual (`/construccion/casos/prospeccion-aeropuerto-chacalluta/`) | 2 contextuales (`/construccion/casos/prospeccion-aeropuerto-chacalluta/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`) | ✅ Cumple | Sin accion. |
| `/forense/` | Servicio | 22 | 2 contextuales (`/forense/casos/cip-san-joaquin-cerro-chena/`, `/forense/casos/sitio-iran-3037-venda-sexy/`) | 2 contextuales (ambos casos) | ✅ Cumple | Sin accion. |
| `/mineria/casos/socavones-espesador-t5/` | Caso | 8 | 6 contextuales (`/biblioteca/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/glosario/`, `/herramientas/`, `/herramientas/calculadora-profundidad/`, `/herramientas/necesito-gpr/`) | 2 contextuales (`/mineria/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) | ✅ Cumple | El caso mejor enlazado del sitio. Sin accion. |
| `/utilities/casos/accesos-metro-de-santiago/` | Caso | 4 | 2 contextuales (`/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`) | 2 contextuales (`/utilities/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) | ✅ Cumple | Corregido 2026-07-05: enlace entrante agregado desde el articulo de senal cuantitativa. |
| `/forense/casos/cip-san-joaquin-cerro-chena/` | Caso | 4 | 3 contextuales (`/forense/`, `/forense/casos/sitio-iran-3037-venda-sexy/`, `/glosario/`) | 2 contextuales (`/forense/`, `/forense/casos/sitio-iran-3037-venda-sexy/`) | ✅ Cumple | Aceptable. Si se publica articulo de GPR no invasivo en sitios DDHH, enlazar desde el. |
| `/forense/casos/sitio-iran-3037-venda-sexy/` | Caso | 4 | 4 contextuales (`/forense/`, `/forense/casos/cip-san-joaquin-cerro-chena/`, `/glosario/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) | 2 contextuales (`/forense/`, `/forense/casos/cip-san-joaquin-cerro-chena/`) | ✅ Cumple | Corregido 2026-07-05: enlace entrante agregado desde el articulo de toma de decisiones (GPR no invasivo como requisito institucional). |
| `/construccion/casos/prospeccion-aeropuerto-chacalluta/` | Caso | 3 | 2 contextuales (`/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`) | 2 contextuales (`/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`) | ✅ Cumple | Cumple el minimo. Si se publica un segundo articulo relacionado con suelos aridos o infraestructura vial, enlazar desde el. |
| `/biblioteca/` | Biblioteca | 22 | 6 contextuales (todos los articulos enlazan a su indice) | 6 contextuales (cards de los 6 articulos) | ✅ Cumple | Sin accion. |
| `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` | Biblioteca | 8 | 7 contextuales (`/mineria/`, `/utilities/`, `/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/glosario/`, `/herramientas/calculadora-profundidad/`) | 3 contextuales (`/herramientas/calculadora-profundidad/`, `/herramientas/selector-antena/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`) | ✅ Cumple | El articulo mejor enlazado de la biblioteca. Sin accion. |
| `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/` | Biblioteca | 6 | 5 contextuales (`/construccion/casos/prospeccion-aeropuerto-chacalluta/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 4 contextuales (`/herramientas/calculadora-profundidad/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/construccion/casos/prospeccion-aeropuerto-chacalluta/`) | ✅ Cumple | Nodo bien conectado. Sin accion. |
| `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` | Biblioteca | 6 | 5 contextuales (`/mineria/casos/socavones-espesador-t5/`, `/utilities/casos/accesos-metro-de-santiago/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/glosario/`) | 3 contextuales (`/herramientas/necesito-gpr/`, `/mineria/casos/socavones-espesador-t5/`, `/utilities/casos/accesos-metro-de-santiago/`) | ✅ Cumple | Articulo Canon central. Sin accion. |
| `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` | Biblioteca | 5 | 4 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 4 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/herramientas/calculadora-profundidad/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`) | ✅ Cumple | Sin accion. |
| `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | Biblioteca | 5 | 4 contextuales (`/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`, `/utilities/`) | 3 contextuales (`/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/utilities/casos/accesos-metro-de-santiago/`) | ✅ Cumple | Corregido 2026-07-05: enlace entrante desde /utilities/ (FAQ de entregables); enlace saliente agregado hacia el caso Metro. |
| `/biblioteca/como-afecta-la-humedad-al-georradar/` | Biblioteca | 4 | 4 contextuales (`/biblioteca/` [card], `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/herramientas/calculadora-profundidad/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`) | 4 contextuales (`/herramientas/calculadora-profundidad/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`) | ✅ Cumple | Corregido 2026-07-05: enlace entrante agregado desde el articulo de profundidad (seccion "Para seguir aprendiendo"). |
| `/glosario/` | Glosario | 22 | 6+ contextuales (articulos de biblioteca y herramientas lo enlazan en contexto) | 10 contextuales (articulos, herramientas, casos) | ✅ Cumple | Nodo central del grafo de conocimiento. Sin accion. |
| `/herramientas/` | Herramientas | 22 | 2 contextuales (`/herramientas/calculadora-profundidad/`, `/herramientas/necesito-gpr/`, `/herramientas/selector-antena/` via cross-links entre herramientas) | 3 contextuales (las tres herramientas hijas) | ✅ Cumple | Sin accion. |
| `/herramientas/calculadora-profundidad/` | Herramienta | 8 | 5 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 4 contextuales (`/herramientas/necesito-gpr/`, `/herramientas/selector-antena/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`) | ✅ Cumple | Herramienta central bien enlazada. Sin accion. |
| `/herramientas/necesito-gpr/` | Herramienta | 5 | 3 contextuales (`/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/glosario/`, `/herramientas/calculadora-profundidad/`) | 2 contextuales (`/herramientas/calculadora-profundidad/`, `/mineria/casos/socavones-espesador-t5/`) | ✅ Cumple | Sin accion. |
| `/herramientas/selector-antena/` | Herramienta | 4 | 3 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/glosario/`, `/herramientas/calculadora-profundidad/`) | 2 contextuales (`/herramientas/necesito-gpr/`, `/herramientas/calculadora-profundidad/`) | ✅ Cumple | Sin accion en cuanto a minimo. Para reforzar: agregar referencia desde `/construccion/` o `/mineria/` cuando se mencione seleccion de antena en el proceso tecnico. |
| `/mentoria/` | Mentoria | 22 | 1 contextual (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`) | 1 contextual (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`) | ✅ Cumple | Corregido 2026-07-05: saliente contextual agregado en seccion "Que se trabaja" (seleccion de antena); entrante contextual agregado desde el articulo de frecuencia de antena en su seccion "Aplique este concepto". |

---

## Resumen ejecutivo

**Auditoria inicial (2026-07-05):** 18 cumple (78%), 5 revisar (22%), 0 no cumple.
**Despues de correcciones (2026-07-05):** 23 cumple (100%), 0 revisar, 0 no cumple.

| Estado | Paginas (inicial) | Paginas (actual) |
|--------|-------------------|------------------|
| ✅ Cumple | 18 (78%) | 23 (100%) |
| ⚠️ Revisar | 5 (22%) | 0 (0%) |
| ❌ No cumple | 0 (0%) | 0 (0%) |

**Ninguna pagina esta huerfana.** Todas cumplen el minimo tecnico de 2 enlaces entrantes
y al menos 1 enlace saliente contextual.

---

## Paginas que requerian accion (resueltas)

Las 5 paginas con estado "Revisar" han sido corregidas. Ver seccion
"Correcciones aplicadas" para el detalle de cada cambio.

No quedan paginas con debilidades de enlazado contextual pendientes en esta
revision. La proxima auditoria corresponde cuando se publique un activo nuevo
o se detecte un cambio significativo en la estructura del sitio.

---

## Correcciones aplicadas (2026-07-05)

Verificacion: cada enlace fue confirmado por busqueda de texto en el archivo fuente antes de marcar como corregido.

| Pagina corregida | Tipo de correccion | Origen | Destino | Motivo editorial |
|------------------|--------------------|--------|---------|-----------------|
| `/mentoria/` | Saliente contextual agregado | `/mentoria/` (seccion "Que se trabaja", bullet seleccion de antena) | `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` | La mentoria trabaja seleccion de antena con mayor profundidad que el articulo; el enlace distingue el nivel del articulo (fundamentos) del nivel de la mentoria (criterio aplicado). |
| `/mentoria/` | Entrante contextual agregado | `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` (seccion "Aplique este concepto") | `/mentoria/` | El articulo de frecuencia es el umbral natural hacia la mentoria: quienes entienden el fundamento y quieren desarrollar criterio propio tienen un camino claro. |
| `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | Entrante contextual agregado | `/utilities/` (FAQ "Que entregables recibe el coordinador de obra") | `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | Proyectos de utilities con alta densidad de infraestructura soterrada son el contexto mas directo donde el analisis cuantitativo de senal aporta valor adicional. |
| `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | Saliente contextual agregado | `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` (seccion "Para seguir aprendiendo") | `/utilities/casos/accesos-metro-de-santiago/` | El caso Metro ilustra un entorno donde la densidad de infraestructura exige ir mas alla de la lectura visual basica. |
| `/biblioteca/como-afecta-la-humedad-al-georradar/` | Entrante contextual agregado | `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` (seccion "Para seguir aprendiendo") | `/biblioteca/como-afecta-la-humedad-al-georradar/` | La humedad es el factor mas limitante de la profundidad efectiva; el articulo de profundidad lo menciona pero no enlazaba al articulo que lo desarrolla en detalle. |
| `/utilities/casos/accesos-metro-de-santiago/` | Entrante contextual agregado (via cambio en articulo de senal) | `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | `/utilities/casos/accesos-metro-de-santiago/` | Ver fila anterior. El caso gana un segundo entrante contextual desde contenido de cuerpo. |
| `/forense/casos/sitio-iran-3037-venda-sexy/` | Entrante contextual agregado | `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` (seccion "Vealo en un caso real") | `/forense/casos/sitio-iran-3037-venda-sexy/` | El caso ilustra el criterio del articulo donde la no invasividad es un requisito institucional (mandante judicial), no una preferencia operativa. Caso ya identificado en `CONTENT_STRATEGY.md §13` Canon 6. |

---

## Notas metodologicas

- Los enlaces de nav (`<nav>`) y footer aparecen en las 22 paginas restantes, generando entrantes artificialmente altos para las 9 paginas del menu principal. Estos no se cuentan como "contextuales" a efectos de la evaluacion de calidad del enlazado.
- El script de extraccion no distingue si un enlace esta en `<main>` o en una seccion lateral. Algunos conteos de "contextual" pueden incluir elementos de seccion FAQ o sidebar que no son cuerpo editorial puro. La verificacion manual de los 5 casos "Revisar" confirmaria el conteo exacto.
- Los fragmentos de ancla (`#termino`) se normalizaron a la URL base de la pagina, por lo que los enlaces a `/glosario/#termino` cuentan como entrante a `/glosario/`.
