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
| `/utilities/casos/accesos-metro-de-santiago/` | Caso | 3 | 1 contextual (`/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) | 2 contextuales (`/utilities/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) | ⚠️ Revisar | Solo 1 enlace contextual entrante. Agregar referencia desde `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` (la localizacion de ductos del Metro genera senal cuantificable) y desde `/mentoria/` como ejemplo de proyecto complejo urbano. |
| `/forense/casos/cip-san-joaquin-cerro-chena/` | Caso | 4 | 3 contextuales (`/forense/`, `/forense/casos/sitio-iran-3037-venda-sexy/`, `/glosario/`) | 2 contextuales (`/forense/`, `/forense/casos/sitio-iran-3037-venda-sexy/`) | ✅ Cumple | Aceptable. Si se publica articulo de GPR no invasivo en sitios DDHH, enlazar desde el. |
| `/forense/casos/sitio-iran-3037-venda-sexy/` | Caso | 3 | 3 contextuales (`/forense/`, `/forense/casos/cip-san-joaquin-cerro-chena/`, `/glosario/`) | 2 contextuales (`/forense/`, `/forense/casos/cip-san-joaquin-cerro-chena/`) | ⚠️ Revisar | No aparece en home (`/`), a diferencia del caso CIP que si aparece. Agregar enlace desde `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` (es el ejemplo mas claro de GPR no invasivo en contexto sensible). |
| `/construccion/casos/prospeccion-aeropuerto-chacalluta/` | Caso | 3 | 2 contextuales (`/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`) | 2 contextuales (`/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`) | ✅ Cumple | Cumple el minimo. Si se publica un segundo articulo relacionado con suelos aridos o infraestructura vial, enlazar desde el. |
| `/biblioteca/` | Biblioteca | 22 | 6 contextuales (todos los articulos enlazan a su indice) | 6 contextuales (cards de los 6 articulos) | ✅ Cumple | Sin accion. |
| `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` | Biblioteca | 8 | 7 contextuales (`/mineria/`, `/utilities/`, `/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/glosario/`, `/herramientas/calculadora-profundidad/`) | 3 contextuales (`/herramientas/calculadora-profundidad/`, `/herramientas/selector-antena/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`) | ✅ Cumple | El articulo mejor enlazado de la biblioteca. Sin accion. |
| `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/` | Biblioteca | 6 | 5 contextuales (`/construccion/casos/prospeccion-aeropuerto-chacalluta/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 4 contextuales (`/herramientas/calculadora-profundidad/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/construccion/casos/prospeccion-aeropuerto-chacalluta/`) | ✅ Cumple | Nodo bien conectado. Sin accion. |
| `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` | Biblioteca | 6 | 5 contextuales (`/mineria/casos/socavones-espesador-t5/`, `/utilities/casos/accesos-metro-de-santiago/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/glosario/`) | 3 contextuales (`/herramientas/necesito-gpr/`, `/mineria/casos/socavones-espesador-t5/`, `/utilities/casos/accesos-metro-de-santiago/`) | ✅ Cumple | Articulo Canon central. Sin accion. |
| `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` | Biblioteca | 5 | 4 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 4 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/herramientas/calculadora-profundidad/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`) | ✅ Cumple | Sin accion. |
| `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | Biblioteca | 4 | 3 contextuales (`/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 2 contextuales (`/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`) | ⚠️ Revisar | Ningun servicio (/mineria/, /utilities/, /construccion/) lo referencia en su cuerpo de texto, siendo el articulo que mas directamente justifica contratar un estudio (analisis cuantitativo de senal). Agregar referencia desde al menos una pagina de servicio y desde `/utilities/casos/accesos-metro-de-santiago/` (localizacion de ductos como ejemplo de analisis de senal). |
| `/biblioteca/como-afecta-la-humedad-al-georradar/` | Biblioteca | 3 | 3 contextuales (`/biblioteca/` [card], `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/herramientas/calculadora-profundidad/`) | 4 contextuales (`/herramientas/calculadora-profundidad/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`) | ⚠️ Revisar | Es el articulo mas reciente y el de menor entrantes. Falta enlace contextual desde `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` (la humedad es el factor que mas reduce la profundidad efectiva) y desde algun caso real donde la condicion del suelo haya sido un factor relevante. |
| `/glosario/` | Glosario | 22 | 6+ contextuales (articulos de biblioteca y herramientas lo enlazan en contexto) | 10 contextuales (articulos, herramientas, casos) | ✅ Cumple | Nodo central del grafo de conocimiento. Sin accion. |
| `/herramientas/` | Herramientas | 22 | 2 contextuales (`/herramientas/calculadora-profundidad/`, `/herramientas/necesito-gpr/`, `/herramientas/selector-antena/` via cross-links entre herramientas) | 3 contextuales (las tres herramientas hijas) | ✅ Cumple | Sin accion. |
| `/herramientas/calculadora-profundidad/` | Herramienta | 8 | 5 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`) | 4 contextuales (`/herramientas/necesito-gpr/`, `/herramientas/selector-antena/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`) | ✅ Cumple | Herramienta central bien enlazada. Sin accion. |
| `/herramientas/necesito-gpr/` | Herramienta | 5 | 3 contextuales (`/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/glosario/`, `/herramientas/calculadora-profundidad/`) | 2 contextuales (`/herramientas/calculadora-profundidad/`, `/mineria/casos/socavones-espesador-t5/`) | ✅ Cumple | Sin accion. |
| `/herramientas/selector-antena/` | Herramienta | 4 | 3 contextuales (`/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/glosario/`, `/herramientas/calculadora-profundidad/`) | 2 contextuales (`/herramientas/necesito-gpr/`, `/herramientas/calculadora-profundidad/`) | ✅ Cumple | Sin accion en cuanto a minimo. Para reforzar: agregar referencia desde `/construccion/` o `/mineria/` cuando se mencione seleccion de antena en el proceso tecnico. |
| `/mentoria/` | Mentoria | 22 | 0 contextuales (solo aparece en nav/footer) | 0 contextuales (todos los salientes son nav/footer) | ⚠️ Revisar | Unica pagina donde tanto los entrantes como los salientes son 100% estructurales. No tiene ningun enlace de cuerpo hacia contenido tecnico (articulos, casos, herramientas). Agregar al menos 1 enlace contextual saliente a un articulo de biblioteca que ejemplifique el conocimiento que se transmite en la mentoria (candidato: `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` o `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`). Para entrantes: ningun articulo ni caso referencia la mentoria como recurso complementario, lo que limita su descubrimiento organico. |

---

## Resumen ejecutivo

| Estado | Paginas | Proporcion |
|--------|---------|------------|
| ✅ Cumple | 18 | 78% |
| ⚠️ Revisar | 5 | 22% |
| ❌ No cumple | 0 | 0% |

**Ninguna pagina esta huerfana.** Todas cumplen el minimo tecnico de 2 enlaces entrantes.

---

## Paginas que requieren accion (por orden de impacto)

### 1. `/mentoria/` (prioridad alta)

Es la unica pagina del sitio sin ningun enlace de cuerpo, ni entrante ni saliente.
Funciona como isla estructural conectada solo por el nav. No hay descubrimiento organico posible desde el contenido.

Acciones recomendadas:
- Agregar en el cuerpo de `/mentoria/` un enlace contextual a `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` o `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` como ejemplo del nivel de conocimiento que se trabaja en la mentoria.
- Agregar en al menos uno de los articulos de biblioteca una referencia a `/mentoria/` como recurso para quienes quieran profundizar con acompanamiento (candidato: al final de `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, despues de la seccion de autoestudio).

### 2. `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` (prioridad media)

El articulo que mas directamente justifica la contratacion de un estudio GPR (analisis cuantitativo vs. imagen simple) no aparece referenciado en ninguna pagina de servicio. Su descubrimiento organico depende solo del grafo de biblioteca.

Acciones recomendadas:
- Agregar referencia desde `/utilities/` o `/mineria/` en la descripcion del proceso tecnico (paso de interpretacion de resultados).
- Agregar referencia desde `/utilities/casos/accesos-metro-de-santiago/` como ejemplo de caso donde el analisis de senal tuvo valor practico.

### 3. `/biblioteca/como-afecta-la-humedad-al-georradar/` (prioridad media)

Articulo mas reciente y con menos entrantes. La humedad es el factor mas determinante en la profundidad efectiva del GPR, pero el articulo sobre profundidad (`/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`) no enlaza a el.

Accion recomendada:
- Agregar enlace contextual desde `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` en la seccion que trata el efecto del tipo de suelo.

### 4. `/utilities/casos/accesos-metro-de-santiago/` (prioridad baja)

Tiene 3 entrantes en total, pero solo 1 es contextual desde contenido de cuerpo (el articulo de decisiones). Es el caso menos referenciado entre los de su categoria.

Accion recomendada:
- Agregar referencia desde `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` como ejemplo de localizacion de ductos con lectura cuantitativa de senal.

### 5. `/forense/casos/sitio-iran-3037-venda-sexy/` (prioridad baja)

No aparece en la home, a diferencia de `/forense/casos/cip-san-joaquin-cerro-chena/`. Tiene 3 entrantes contextuales, pero ninguno desde contenido fuera del sector forense.

Accion recomendada:
- Agregar referencia desde `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` como ejemplo de GPR no invasivo en sitio de memoria (ya esta contemplado en `CONTENT_STRATEGY.md §13` como uso del Canon 6).

---

## Notas metodologicas

- Los enlaces de nav (`<nav>`) y footer aparecen en las 22 paginas restantes, generando entrantes artificialmente altos para las 9 paginas del menu principal. Estos no se cuentan como "contextuales" a efectos de la evaluacion de calidad del enlazado.
- El script de extraccion no distingue si un enlace esta en `<main>` o en una seccion lateral. Algunos conteos de "contextual" pueden incluir elementos de seccion FAQ o sidebar que no son cuerpo editorial puro. La verificacion manual de los 5 casos "Revisar" confirmaria el conteo exacto.
- Los fragmentos de ancla (`#termino`) se normalizaron a la URL base de la pagina, por lo que los enlaces a `/glosario/#termino` cuentan como entrante a `/glosario/`.
