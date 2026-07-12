# BACKLOG.md

> Registro de activos publicados, deuda de contenido y deuda técnica.
> Ver `CLAUDE.md §5` y `DEFINITION_OF_DONE.md` para el proceso de estados.
> Ultima actualizacion: 2026-07-05. Sitio: 23 URLs publicas.

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
- **Casos publicados con pagina propia:** Espesador T5 (Codelco Chuquicamata)
- **Deuda:** Codelco Division Andina, BHP, SQM, Centinela, Albemarle, Collahuasi tienen cards verificadas pero sin pagina de caso real completa.

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
- **Chacalluta:** PUBLICADO — REQUIERE AUDITORÍA. Caso real publicado en `/construccion/casos/prospeccion-aeropuerto-chacalluta/`. La tarea pendiente es auditoría editorial, técnica y SEO, no intake. Ver `content/research/cases/case-construccion-aeropuerto-chacalluta.md`.
- **Deuda SEO:** diferenciacion aplicada 2026-07-05. Keyword "prospeccion GPR en obras civiles". Monitorear Search Console en 4 a 6 semanas.

---

### Mentoria GPR 1:1

- **Estado:** PUBLICADO — `/mentoria/`
- **Cambio 2026-07-05:** agregado enlace saliente contextual a articulo de frecuencia de antena; enlace entrante desde ese mismo articulo. Deja de ser isla estructural.

---

### Biblioteca tecnica

- **Estado modulo:** OPTIMIZACION (Canon completo segun `CONTENT_STRATEGY.md §13`, no MADURO — ver criterio pendiente)
- **Ubicacion landing:** `/biblioteca/`

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

**Criterio pendiente para Canon MADURO (compartido por articulos 2 y 3, y Glosario):**
Comparacion externa con el mejor recurso GPR disponible en espanol. Requiere revision humana de Gabriel. Hasta que ocurra, el modulo queda en OPTIMIZACION — estado correcto, no bloqueante.

---

### Glosario GPR

- **Estado:** OPTIMIZACION (no MADURO — criterio pendiente compartido con Biblioteca)
- **Ubicacion:** `/glosario/`
- **Terminos publicados (13):** Georradar, Radargrama, Socavon, Hiperbola, Antena, Atenuacion, Velocidad de propagacion, Espesador, Grilla de prospeccion, Georreferenciacion, Conductividad, Permitividad dielectrica, Frecuencia dominante, Resolucion vertical.
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

**Prioridad 1 — Completar benchmark GPR en español**
`docs/QUALITY_BENCHMARK_GPR_ES.md` — estructura creada, comparacion pendiente. Gabriel debe identificar los recursos GPR en espanol a comparar y completar la matriz de 9 criterios. Hasta que este documento este completo y aprobado, ninguno de los activos afectados (Glosario, articulo de frecuencia, modulo Biblioteca) puede declararse MADURO. No urgente para el sitio, pero es deuda declarada.

**Prioridad 2 — Aeródromo Tobalaba: descartado temporalmente**
Gabriel no dispone de informacion suficiente para desarrollarlo como caso o referencia. No usar en articulos ni en paginas de caso hasta tener material documentado. Registrado en `content/research/themes/theme-gpr-pavimentos.md`.

**Prioridad 3 — Aeródromo Chacalluta: auditoría editorial, técnica y SEO**
Estado: PUBLICADO — REQUIERE AUDITORÍA. Tipo: caso real de construcción. La página existe en `/construccion/casos/prospeccion-aeropuerto-chacalluta/`. La tarea pendiente ya no es intake sino auditoría del caso publicado. Ver `content/research/cases/case-construccion-aeropuerto-chacalluta.md`. Ajustes aplicados 2026-07-06: footer actualizado a "Prospección GPR en obras civiles", enlace al artículo de frecuencia de antena añadido en sección de método. Pendiente: evaluar si el H1 y el title incorporan "GPR" de forma explícita para alineación con keyword del vertical.

**Prioridad 4 — Ejecutar ADR-006 (rename calculadora)**
URL activa: `/herramientas/calculadora-viabilidad-gpr/`. Redirect meta-refresh desde URL anterior. Pendiente: confirmar transferencia de señal SEO en Search Console ~agosto 2026.

**Prioridad 5 — Semi-caso Codelco Division Andina**
Primer caso de mineria a desarrollar como pagina tipo semi-caso. Patron minimo: contexto, objetivo tecnico, condicion de terreno, metodo aplicado, tipo de resultado obtenido, limites de interpretacion, valor para la operacion. No agregar radargramas, cifras ni hallazgos especificos sin documentacion de Gabriel.

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

4. **`docs/adr/`** — ADR-001 (CSS vanilla), ADR-002 (WhatsApp primario), ADR-003 (mentorias 1:1), ADR-004 (arquitectura dos dominios), ADR-005 (evidencia tecnica) completos. ADR-006 (rename calculadora) ejecutado en rama, pendiente de merge.

5. **Referencias históricas a calculadora-profundidad en docs internos** — RESUELTO 2026-07-09. `BACKLOG.md`, `ARCHITECTURE.md` y `SEO_BASELINE.md` actualizados para reflejar la URL activa `/herramientas/calculadora-viabilidad-gpr/`.

---

## Documentos internos actualizados (2026-07-05)

- `docs/SEO_BASELINE.md` — linea base SEO de las 23 URLs publicas.
- `docs/INTERNAL_LINKING_AUDIT.md` — 23/23 paginas en cumplimiento (100%).
- `docs/CHANGELOG.md` — normalizado con formato estructurado.
- `docs/BACKLOG.md` — este archivo, auditado y actualizado.
- `docs/QUALITY_BENCHMARK_GPR_ES.md` — benchmark creado. Recursos y puntajes pendientes de revision de Gabriel.
- `docs/adr/ADR-006-rename-calculadora-profundidad.md` — propuesto, pendiente de aprobacion.
- `content/research/themes/theme-gpr-pavimentos.md` — estado actualizado a LISTO PARA ARTICULO BASE.
- `construccion/index.html` — diferenciacion SEO aplicada (keyword, H1, lead, seo-text).
- `herramientas/selector-antena/index.html` — titulo, disclaimer y enlace cruzado al articulo de frecuencia actualizados.
