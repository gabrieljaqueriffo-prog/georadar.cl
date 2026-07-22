# BACKLOG.md

> Registro de activos publicados, deuda de contenido y deuda técnica.
> Ver `CLAUDE.md §5` y `DEFINITION_OF_DONE.md` para el proceso de estados.
> Ultima actualizacion: 2026-07-19. Sitio: 24 URLs publicas.

---

## Activos publicados

### Home

- **Estado:** PUBLICADO
- **Ubicacion:** `/`
- **H1:** "Conocimiento aplicado sobre georradar GPR en Chile"
- **Lead:** GeoRadar.cl como plataforma de conocimiento de Geo Radar Chile.
- **Cambio 2026-07-05:** hero reposicionado para presentar ATLAS primero; "pionea" corregido a "introduce el uso de GPR en Chile".

---

### Paginas de servicio por sector

#### Mineria
- **Estado:** PUBLICADO — `/mineria/`
- **Casos publicados con pagina propia:**
  - Espesador T5 (Codelco Chuquicamata) — `/mineria/casos/socavones-espesador-t5/`
  - Division Andina (Codelco) — `/mineria/casos/liberacion-areas-division-andina/` — PUBLICADO 2026-07-19. 8 grillas, Tranque Ovejeria, LEM + REX + GPR, tabla de grilla completa del informe GPR-178-24-IF-01-REV.1.
- **Deuda:** BHP, SQM, Centinela, Albemarle, Collahuasi tienen cards verificadas pero sin pagina de caso real completa.

#### Utilities
- **Estado:** PUBLICADO — `/utilities/`
- **Casos publicados con pagina propia:** Metro de Santiago (accesos, 2017-2018)

#### Forense
- **Estado:** PUBLICADO — `/forense/`
- **Casos publicados con pagina propia:**
  - CIP San Joaquin y Cerro Chena (`/forense/casos/cip-san-joaquin-cerro-chena/`)
  - Sitio Iran 3037 "Venda Sexy" (`/forense/casos/sitio-iran-3037-venda-sexy/`)
- **Deuda:** Cementerio Rio Chico, Puerto Montt — solo card, sin pagina de caso propia. El cliente indico que la cobertura actual de forense es suficiente por ahora.

#### Construccion
- **Estado:** PUBLICADO — `/construccion/`
- **Casos publicados con pagina propia:**
  - Aeropuerto Chacalluta (`/construccion/casos/prospeccion-aeropuerto-chacalluta/`) — localización de servicios subterraneos con GPR y LEM para Sacyr. Doble frecuencia, georreferenciacion GNSS.
  - **Enlaces entrantes:** `/construccion/`, `/index.html`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`
  - **Enlaces salientes:** `/construccion/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`
- **Deuda:** Costanera Puerto Montt, edificacion Las Condes — sin pagina de caso propia. Aeródromo Tobalaba descartado temporalmente (sin material).
- **Chacalluta:** PUBLICADO — AUDITADO 2026-07-19. Auditoria editorial, tecnica y SEO completada. Correcciones aplicadas: frecuencias de antena corregidas de 250/700 MHz a 200/600 MHz (equipo real: IDS GeoRadar RIS MF Hi-Mod); CTA WhatsApp actualizado a lenguaje de evaluacion de viabilidad. Ver `content/research/cases/case-construccion-aeropuerto-chacalluta.md`.
- **Deuda SEO:** diferenciacion aplicada 2026-07-05. Keyword "prospeccion GPR en obras civiles". Monitorear Search Console en 4 a 6 semanas.

---

### Mentoria GPR 1:1

- **Estado:** PUBLICADO — `/mentoria/`
- **Cambio 2026-07-05:** agregado enlace saliente contextual a articulo de frecuencia de antena; enlace entrante desde ese mismo articulo. Deja de ser isla estructural.

---

### Biblioteca tecnica

- **Estado modulo:** OPTIMIZACION — todas las acciones del benchmark completadas 2026-07-19. Pendiente: validacion de Gabriel para declarar MADURO. Ver `docs/QUALITY_BENCHMARK_GPR_ES.md`.
- **Ubicacion landing:** `/biblioteca/`
- **Cambio 2026-07-19:** seccion "Rutas por sector" añadida — cuatro tarjetas con rutas de lectura por perfil (obra civil, mineria, utilities, forense), cada una con secuencia de articulos y enlace a caso real.

**Articulos publicados (6):**

1. **Como tomar decisiones correctas antes de intervenir el subsuelo**
   - `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`
   - Estado: PUBLICADO
   - Entrantes: `/biblioteca/`, `/mineria/casos/socavones-espesador-t5/`, `/herramientas/necesito-gpr/`, `/glosario/`, `/index.html` (via seccion de caso real)
   - Salientes: `/glosario/`, `/herramientas/necesito-gpr/`, casos Espesador T5, Metro de Santiago, Iran 3037
   - Cambio 2026-07-05: agregado enlace al caso Iran 3037 en seccion "Vealo en un caso real"

2. **Como influye la frecuencia de una antena GPR en los resultados**
   - `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`
   - Estado: OPTIMIZACION
   - Entrantes: `/biblioteca/`, `/herramientas/calculadora-viabilidad-gpr/`, `/glosario/#antena`, `/mineria/`, `/utilities/`, `/mentoria/`
   - Salientes: `/glosario/`, `/herramientas/calculadora-viabilidad-gpr/`, `/herramientas/selector-antena/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/mentoria/`
   - Cambio 2026-07-05: agregado enlace saliente a `/mentoria/`
   - Cambio 2026-07-19: tabla comparativa por rango de frecuencia (MHz, profundidad tipica, resolucion, objetivos habituales); seccion de condiciones que reducen penetracion (arcilla, sales, rellenos, hormigon humedo); seccion de ejemplos por tipo de objetivo (enfierradura, tuberias, cavidades, espesores de pavimento). Cubre todas las acciones del benchmark para este articulo.

3. **Por que la profundidad del georradar depende del terreno**
   - `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`
   - Estado: PUBLICADO
   - Entrantes: `/biblioteca/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`
   - Salientes: `/glosario/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/herramientas/calculadora-viabilidad-gpr/`
   - Cambio 2026-07-05: agregado enlace a articulo de humedad en seccion "Para seguir aprendiendo"

4. **Que puede decirnos una senal GPR ademas de una imagen**
   - `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`
   - Estado: PUBLICADO
   - Entrantes: `/biblioteca/`, `/utilities/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`
   - Salientes: `/glosario/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/utilities/casos/accesos-metro-de-santiago/`
   - Cambio 2026-07-05: agregado enlace al caso Metro de Santiago

5. **Como afecta la humedad del suelo a un estudio con georradar**
   - `/biblioteca/como-afecta-la-humedad-al-georradar/`
   - Estado: PUBLICADO
   - Entrantes: `/biblioteca/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/herramientas/calculadora-viabilidad-gpr/`
   - Salientes: `/glosario/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`

6. **Que hace que un suelo sea dificil para el GPR**
   - `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`
   - Estado: PUBLICADO
   - Entrantes: `/biblioteca/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/construccion/casos/prospeccion-aeropuerto-chacalluta/`, `/glosario/`
   - Salientes: `/glosario/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/construccion/casos/prospeccion-aeropuerto-chacalluta/`

**Criterio pendiente para MADURO:**
Las tres acciones del benchmark completadas (frecuencia, glosario, biblioteca). Pendiente: validacion humana de Gabriel para declarar MADURO. Ver `docs/QUALITY_BENCHMARK_GPR_ES.md`.

---

### Glosario GPR

- **Estado:** OPTIMIZACION (no MADURO — pendiente validacion de Gabriel, compartido con Biblioteca)
- **Ubicacion:** `/glosario/`
- **Terminos publicados (13):** Georradar, Radargrama, Socavon, Hiperbola, Antena, Atenuacion, Velocidad de propagacion, Espesador, Grilla de prospeccion, Georreferenciacion, Conductividad, Permitividad dielectrica, Frecuencia dominante, Resolucion vertical.
- **Cambio 2026-07-19:** añadidos parrafos "Error frecuente" y contexto de terreno en cuatro terminos: Georradar (contraste electromagnetico, ausencia de señal no implica ausencia de objeto), Grilla de prospeccion (ejemplo Division Andina, error de perfiles en una sola direccion), Hiperbola (error de identificar cualquier arco como ducto), Radargrama (error de interpretar imagen aislada como diagnostico). Enlace de Grilla a caso real Division Andina añadido.
- **Entrantes:** 10+ paginas distintas (nav/footer + contextuales).
- **Plan de actualizacion anual:** marzo, Gabriel + Claude. Criterio de desactualizacion: termino nuevo usado en caso o articulo sin entrada propia; enlace roto; mas de 12 meses sin revision.

---

### Herramientas

#### Indice de herramientas
- **Estado:** PUBLICADO — `/herramientas/`

#### Calculadora de viabilidad GPR
- **Estado:** PUBLICADO — `/herramientas/calculadora-viabilidad-gpr/` (URL anterior `/herramientas/calculadora-viabilidad-gpr/` redirige con meta-refresh)
- **ADR-006:** ejecutado en rama `atlas/adr-006-calculadora-viabilidad-gpr` el 2026-07-06. Pendiente merge a main por Gabriel. Monitorear Search Console 4-6 semanas después del merge.

#### Necesito un estudio GPR (arbol de decision)
- **Estado:** PUBLICADO — `/herramientas/necesito-gpr/`

#### Selector de antena GPR
- **Estado:** PUBLICADO — `/herramientas/selector-antena/`
- **Auditoría 2026-07-09:** lenguaje condicional correcto en todos los resultados; disclaimer prominente en lead y en resultado; sin claims absolutos; sin criterio Nivel C expuesto (los rangos de frecuencia son física pública). Cross-links completos: necesito-gpr, calculadora-viabilidad-gpr, georadar, glosario.
- **Riesgo SEO:** canibalizacion media con `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`. Ver `SEO_BASELINE.md`. Diferenciación actual suficiente (herramienta vs. artículo explicativo). Monitorear.

---

## Deuda de contenido

Orden de prioridad (2026-07-05):

**Prioridad 1 — Validacion del benchmark por Gabriel**
`docs/QUALITY_BENCHMARK_GPR_ES.md` — PRELIMINAR VALIDADO. Estado: ATLAS Biblioteca 24/27, ATLAS Glosario 20/27. Las tres acciones editoriales derivadas del benchmark estan completas (articulo de frecuencia, glosario, rutas de lectura en biblioteca). Pendiente: revision humana de Gabriel para declarar los activos afectados en estado MADURO. No urgente para el sitio, pero es deuda declarada.

**Prioridad 2 — Aeródromo Tobalaba: descartado temporalmente**
Gabriel no dispone de informacion suficiente para desarrollarlo como caso o referencia. No usar en articulos ni en paginas de caso hasta tener material documentado. Registrado en `content/research/themes/theme-gpr-pavimentos.md`.

**Prioridad 3 — Aeródromo Chacalluta: AUDITADO**
Estado: PUBLICADO — AUDITADO 2026-07-19. Frecuencias corregidas a 200/600 MHz; CTA WhatsApp actualizado; auditoria editorial y tecnica completa. Sin deuda activa en este caso.

**Prioridad 4 — Ejecutar ADR-006 (rename calculadora)**
URL activa: `/herramientas/calculadora-viabilidad-gpr/`. Redirect meta-refresh desde URL anterior. Pendiente: confirmar transferencia de señal SEO en Search Console ~agosto 2026.

**Prioridad 5 — RESUELTO: Codelco Division Andina publicado**
Caso real publicado en `/mineria/casos/liberacion-areas-division-andina/` el 2026-07-19. 8 grillas, Tranque Ovejeria, LEM + REX + GPR, tabla de grilla del informe GPR-178-24-IF-01-REV.1. Sin deuda activa. Siguiente caso minero prioritario: SQM o BHP (ver Prioridad 8).

**Prioridad 6 — Caso forense Cementerio Rio Chico**
URL propuesta: `/forense/casos/cementerio-rio-chico/`. Titulo: "Caso forense con georradar en Cementerio Rio Chico". Tono: sobrio, tecnico y pericial, sin sensacionalismo. No crear hasta tener: contexto del encargo, objetivo de prospeccion, condiciones del sitio, metodologia y hallazgos o anomalias documentadas.

**Prioridad 7 — Caso Costanera Puerto Montt**
URL propuesta: `/construccion/casos/costanera-puerto-montt/`. 700 metros de paseo costero, deteccion de oquedades antes de intervenir (2018). Segunda opcion de construccion si Chacalluta no tiene material adicional suficiente.

**Prioridad 8 — Segundo caso minero: SQM o BHP**
Definir cual tiene mejor documentacion disponible antes de elegir. Mantener como cards verificadas hasta tener evidencia suficiente para semi-caso. Centinela, Albemarle y Collahuasi quedan en espera detras de SQM/BHP.

- **Candidato a artículo Canon — Detección de fugas/tuberías con GPR: qué puede y qué no puede hacer.** Surge de un lead real registrado en BEDROCK (Andrius Marcano / Todo en orden SpA, 2026-07-02, ver `Documents/bedrock/DOMAIN/checklist-deteccion-fugas.md`): el punto central es que el agua atenúa fuertemente la señal electromagnética (`/glosario/#atenuacion`), por lo que un sitio saturado por la fuga puede impedir detectar el ducto mismo, no solo confirmar la fuga. No se crea todavía — con 1 solo lead no cumple la "regla del tercer activo" de `CLAUDE.md §6` (debe representar un patrón repetido, no un caso único). Posiblemente no requiera artículo aparte: podría evolucionar el artículo existente `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` en vez de crear uno nuevo (`CLAUDE.md §5`: priorizar reducir deuda de Canon sobre crear contenido nuevo). Revisar cuando se acumulen más de los 30 leads que Gabriel está registrando en BEDROCK y este patrón (tuberías/fugas) se repita.

---

## Deuda tecnica

1. **Slug de calculadora** — ADR-006 ejecutado en rama `atlas/adr-006-calculadora-viabilidad-gpr` el 2026-07-06. Nueva URL activa en rama: `/herramientas/calculadora-viabilidad-gpr/`. Redirect meta-refresh desde URL anterior. Pendiente merge a main por Gabriel y monitoreo Search Console 4-6 semanas.

2. **Diferenciacion SEO `/construccion/`** — aplicada el 2026-07-05. Keyword principal cambiada a "prospeccion GPR en obras civiles". H1, lead, seo-text, title y meta description actualizados. Monitorear Search Console en 4-6 semanas.

3. **Workflow de deploy** — migrado a GitHub Actions el 2026-07-05 (`/.github/workflows/deploy.yml`). El sistema anterior (`pages-build-deployment`) fallaba de forma intermitente. El nuevo workflow es mas estable. Sin deuda activa.

4. **`docs/adr/`** — ADR-001 (CSS vanilla), ADR-002 (WhatsApp primario), ADR-003 (mentorias 1:1), ADR-004 (arquitectura dos dominios), ADR-005 (evidencia tecnica), ADR-007 (Eleventy) completos. ADR-006 (rename calculadora) ejecutado en rama, pendiente de merge.

5. **Referencias históricas a calculadora-profundidad en docs internos** — RESUELTO 2026-07-09. `BACKLOG.md`, `ARCHITECTURE.md` y `SEO_BASELINE.md` actualizados para reflejar la URL activa `/herramientas/calculadora-viabilidad-gpr/`.

6. **Eleventy build step** — IMPLEMENTADO 2026-07-19. ADR-007 aprobado y ejecutado. Nav y footer son ahora partials en `_includes/`. El sitio se construye con `npm run build` (Eleventy v3) hacia `_site/`. Cambios globales de nav/footer ahora requieren editar un solo archivo. Pre-commit hook actualizado para ejecutar el build antes de la auditoria. Ver `docs/adr/ADR-007-eleventy-build.md`.

7. **Footer heading corregido** — RESUELTO 2026-07-19. `<h4>Servicios</h4>` reemplazado por `<h4>Contenido</h4>` en el footer compartido (`_includes/footer.html`). Aplicado a las 29 paginas publicas via el partial de Eleventy.

8. **Schema.org mainEntityOfPage** — APLICADO 2026-07-19. Nodo Organization en home ahora incluye `"mainEntityOfPage": "https://www.georadarchile.cl"` para señalar la presencia web principal de la empresa. Sin deuda activa.

9. **Sección SEO relleno en home** — PENDIENTE. Cinco parrafos de keywords al final del home identificados como anti-patron. Eliminacion pendiente de aprobacion de Gabriel.

10. **Timeline pioneer claim** — PENDIENTE. Frase "introduce el uso de GPR en Chile" en pagina Quienes Somos / home pendiente de reemplazo por formulacion factual basada solo en certificacion GSSI 1997. Pendiente aprobacion de Gabriel.

---

## Documentos internos actualizados

### 2026-07-05
- `docs/SEO_BASELINE.md` — linea base SEO de las 23 URLs publicas.
- `docs/INTERNAL_LINKING_AUDIT.md` — 23/23 paginas en cumplimiento (100%).
- `docs/CHANGELOG.md` — normalizado con formato estructurado.
- `docs/BACKLOG.md` — auditado y actualizado.
- `docs/QUALITY_BENCHMARK_GPR_ES.md` — benchmark creado. Recursos y puntajes pendientes de revision de Gabriel.
- `docs/adr/ADR-006-rename-calculadora-profundidad.md` — propuesto, pendiente de aprobacion.
- `content/research/themes/theme-gpr-pavimentos.md` — estado actualizado a LISTO PARA ARTICULO BASE.
- `construccion/index.html` — diferenciacion SEO aplicada (keyword, H1, lead, seo-text).
- `herramientas/selector-antena/index.html` — titulo, disclaimer y enlace cruzado al articulo de frecuencia actualizados.

### 2026-07-19
- `docs/BACKLOG.md` — este archivo, actualizado con todo el trabajo de la sesion.
- `docs/adr/ADR-007-eleventy-build.md` — ADR aprobado y ejecutado.
- `_includes/nav.html` — partial de navegacion compartido (nuevo).
- `_includes/footer.html` — partial de footer compartido con `{{ footerTagline }}` (nuevo).
- `.eleventy.js` — configuracion del build step (nuevo).
- `package.json` / `package-lock.json` — dependencia Eleventy v3 añadida.
- `.github/workflows/deploy.yml` — workflow actualizado para ejecutar `npm run build` antes del deploy.
- `scripts/audit.js` — auditoria apuntada a `_site/` (output de Eleventy).
- `.git/hooks/pre-commit` — hook actualizado para ejecutar build antes de auditoria.
- `mineria/casos/liberacion-areas-division-andina/index.html` — caso Division Andina publicado (nuevo).
- `construccion/casos/prospeccion-aeropuerto-chacalluta/index.html` — frecuencias corregidas, CTA actualizado.
- `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html` — tabla, advertencias de terreno, ejemplos por objetivo.
- `glosario/index.html` — errores frecuentes y contexto de terreno en cuatro terminos.
- `biblioteca/index.html` — seccion de rutas de lectura por sector añadida.
- `index.html` — stat actualizado, twitter:description actualizado, mainEntityOfPage en schema.
