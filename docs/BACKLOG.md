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
- **Deuda:** Costanera Puerto Montt, Aeródromo Tobalaba, edificacion Las Condes — sin pagina de caso propia.
- **Deuda SEO:** keyword de `/construccion/` compite con `/mineria/` y `/utilities/` por terminos genericos. Prioridad 1 de `SEO_BASELINE.md`: diferenciar hacia "prospeccion GPR en obras civiles" o similar.

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
   - Entrantes: `/biblioteca/`, `/herramientas/calculadora-profundidad/`, `/glosario/#antena`, `/mineria/`, `/utilities/`, `/mentoria/`
   - Salientes: `/glosario/`, `/herramientas/calculadora-profundidad/`, `/herramientas/selector-antena/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/mentoria/`
   - Cambio 2026-07-05: agregado enlace saliente a `/mentoria/`

3. **Por que la profundidad del georradar depende del terreno**
   - `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`
   - Estado: PUBLICADO
   - Entrantes: `/biblioteca/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/glosario/`
   - Salientes: `/glosario/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/herramientas/calculadora-profundidad/`
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
   - Entrantes: `/biblioteca/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/herramientas/calculadora-profundidad/`
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
- **Estado:** PUBLICADO — `/herramientas/calculadora-profundidad/`
- **Deuda SEO:** el slug "calculadora-profundidad" no refleja lo que hace hoy (es una calculadora de viabilidad, no solo de profundidad). Cambiar la URL requiere ADR. Ver `SEO_BASELINE.md`.

#### Necesito un estudio GPR (arbol de decision)
- **Estado:** PUBLICADO — `/herramientas/necesito-gpr/`

#### Selector de antena GPR
- **Estado:** PUBLICADO — `/herramientas/selector-antena/`
- **Riesgo SEO:** canibalizacion media con `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`. Ver `SEO_BASELINE.md`.
- **Riesgo editorial:** evaluar si expone criterio Nivel C (`CONTENT_STRATEGY.md §1.5`). Requiere decision de Gabriel antes de optimizar.

---

## Deuda de contenido

1. **Articulo GPR en pavimentos** — `content/research/themes/theme-gpr-pavimentos.md` existe. Pendiente de material de caso de Gabriel para iniciar sintesis.

2. **Validacion Canon MADURO** — Glosario, articulo de frecuencia de antena y modulo Biblioteca en OPTIMIZACION. Requiere que Gabriel compare con el mejor recurso GPR en espanol disponible. No es bloqueante para el sitio, pero es deuda declarada.

3. **Cards de mineria sin pagina de caso propia** — Codelco Division Andina, BHP, SQM, Centinela, Albemarle, Collahuasi. Solo Espesador T5 tiene pagina de caso real completa.

4. **Cementerio Rio Chico** — solo card en `/forense/`, sin pagina propia. El cliente indico que la cobertura actual de forense es suficiente.

5. **Casos de construccion adicionales** — Costanera Puerto Montt, Aeródromo Tobalaba sin pagina de caso propia.

---

## Deuda tecnica

1. **Slug de calculadora** — `/herramientas/calculadora-profundidad/` no refleja la herramienta actual. Cambio de URL requiere ADR por impacto SEO.

2. **Workflow de deploy** — migrado a GitHub Actions el 2026-07-05 (`/.github/workflows/deploy.yml`). El sistema anterior (`pages-build-deployment`) dejaba de funcionar de forma intermitente por un error de infraestructura de GitHub Pages. El nuevo workflow es mas estable y controlable. Sin deuda activa.

3. **`docs/adr/`** — ADR-001 (CSS vanilla), ADR-002 (WhatsApp primario), ADR-003 (mentorias 1:1), ADR-004 (arquitectura dos dominios), ADR-005 (evidencia tecnica) estan completos. Sin deuda activa.

---

## Documentos internos actualizados (2026-07-05)

- `docs/SEO_BASELINE.md` — linea base SEO de las 23 URLs publicas.
- `docs/INTERNAL_LINKING_AUDIT.md` — 23/23 paginas en cumplimiento (100%).
- `docs/CHANGELOG.md` — normalizado con formato estructurado.
- `docs/BACKLOG.md` — este archivo, auditado y actualizado.
