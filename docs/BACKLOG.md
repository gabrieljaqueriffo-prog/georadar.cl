# BACKLOG.md

> Registro de activos en curso, deuda técnica y deuda de contenido.
> Ver `CLAUDE.md §5` y `DEFINITION_OF_DONE.md` para el proceso de estados.

---

## Activos de contenido

### Calculadora de viabilidad GPR

- **Estado:** PUBLICADO
- **Tipo:** Herramienta / Calculadora (`ARCHITECTURE.md §7`, Canon — `CONTENT_STRATEGY.md §13` ítem 2)
- **Ubicación:** `/herramientas/calculadora-profundidad/`
- **Enlaces entrantes:** nav y footer de las 8 páginas del sitio (`index.html`, `mineria/`, `utilities/`, `forense/`, `biblioteca/` x2, `glosario/`, `mineria/casos/socavones-espesador-t5/`); además el caso Espesador T5 la referencia desde "Casos de uso típicos"
- **Enlaces salientes:** `/glosario/#antena`, `/glosario/#atenuacion`, `/glosario/#velocidad-propagacion`, `/mineria/casos/socavones-espesador-t5/`, `georadarchile.cl` (CTA)
- **Diseño:** evolución del ítem canonizado "Calculadora de profundidad GPR" hacia un "Asistente de viabilidad" (propuesta del cliente, aprobada): 5 inputs (objetivo, profundidad, terreno, agua, precisión requerida) → resultado narrativo de viabilidad (Alta/Media/Baja) con explicación de factores, sin recomendar antena ni revelar criterio de interpretación. Lógica de cálculo determinística basada en física pública (atenuación por terreno, compromiso profundidad/resolución) — Nivel A/B de `CONTENT_STRATEGY.md §1.5`, nunca Nivel C.
- **Cumple test de `NORTH_STAR.md`:** no pide correo ni registro para usarse.
- **Sitemap:** agregada con prioridad 0.9 (mismo nivel que las landings de servicio).
- **Nuevo ítem de navegación:** "Herramientas" agregado al nav principal y footer de todo el sitio — decisión de estructura aprobada explícitamente por el cliente antes de implementar (`DECISION_FRAMEWORK.md` Bloque 0).

### ¿Necesito un estudio GPR? (árbol de decisión + checklist)

- **Estado:** PUBLICADO
- **Tipo:** Herramienta (`ARCHITECTURE.md §7`, patrón "Herramienta / Calculadora"); último eslabón del arco de crecimiento compuesto de herramientas (`DECISION_FRAMEWORK.md` Bloque 3)
- **Ubicación:** `/herramientas/necesito-gpr/`
- **Enlaces entrantes:** `/herramientas/calculadora-profundidad/` (sección "Herramientas relacionadas"), `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` (sección "Cuándo un estudio GPR es realmente necesario"), `/glosario/#georradar`
- **Enlaces salientes:** `/herramientas/calculadora-profundidad/`, `/glosario/#georradar`, `/glosario/#georreferenciacion`, `/mineria/casos/socavones-espesador-t5/`, `georadarchile.cl` (CTA)
- **Diseño:** 4 preguntas (qué necesita resolver, acceso a la superficie, material del objetivo, para qué usará el resultado) → árbol de decisión categórico (no score numérico) con 3 resultados posibles, más un checklist siempre visible de qué preparar antes de contactar a un especialista. Reutiliza íntegramente los componentes CSS `.tool-layout`/`.tool-form`/`.tool-result`/`.tool-result-tier` ya existentes — no se creó CSS nuevo.
- **Por qué se construyó ahora:** cierra el arco de herramientas descrito en `DECISION_FRAMEWORK.md` Bloque 3 ("Árbol de decisión '¿Necesito GPR?' / Checklist antes de perforar"), que ya tenía la calculadora de viabilidad como paso previo construido. Sin esta pieza, un visitante que no sabe si necesita GPR caía directo en una calculadora de viabilidad que asume que ya lo sabe.
- **Cumple test de `NORTH_STAR.md`:** orienta la decisión sin sustituir la planificación de un especialista; termina en checklist, no en automatización del criterio profesional (Nivel C, `CONTENT_STRATEGY.md §1.5`).
### Índice de Herramientas

- **Estado:** PUBLICADO
- **Tipo:** Página índice (`ARCHITECTURE.md §7`, mismo patrón que `/biblioteca/`)
- **Ubicación:** `/herramientas/`
- **Decisión (2026-06-29, aprobada por el cliente):** el nav "Herramientas" dejó de apuntar directo a `/herramientas/calculadora-profundidad/` y ahora apunta a este índice, que lista ambas herramientas (calculadora de viabilidad y árbol de decisión "¿Necesito un estudio GPR?"). Cambio de navegación aprobado explícitamente antes de ejecutar (`CLAUDE.md §3`).
- **Enlaces entrantes:** nav y footer de todas las páginas del sitio.
- **Enlaces salientes:** `/herramientas/calculadora-profundidad/`, `/herramientas/necesito-gpr/`, `/glosario/`, `/biblioteca/`, caso real de Espesador T5.
- Se agregó a `sitemap.xml`.

### Caso real — Detección de socavones en Espesador T5

- **Estado:** PUBLICADO
- **Tipo:** Caso real (`ARCHITECTURE.md §7`, patrón revisado)
- **Sector:** mineria
- **Taxonomía:** deteccion-cavidades
- **Nivel de pirámide de evidencia:** 5
- **Ubicación:** `/mineria/casos/socavones-espesador-t5/index.html`
- **Enlaces entrantes:** `mineria/index.html` (card en "Casos en minería"), `index.html` (card de Minería en "Prospección GPR por industria")
- **Enlaces salientes:** `/mineria/` (servicio correspondiente), `/glosario/#socavon`, `/glosario/#espesador`, `/glosario/#antena`, `/glosario/#hiperbola`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` (artículo Canon)
- **Reestructurado** según el patrón "Caso real" actualizado en `ARCHITECTURE.md §7`: agrega puente "Qué buscábamos / qué encontramos", sección "Evidencia geofísica" (radargrama destacado + 3 condiciones colapsadas bajo `<details>`), bloque de "Nivel de confianza / validación", sección "Decisión que permitió tomar el estudio", lista "¿Qué aprendimos?" y CTA específico al síntoma.
- **Interpretación reescrita** conforme al principio editorial de `CONTENT_STRATEGY.md §1.5` (tres niveles de conocimiento): se eliminó la descripción del razonamiento multi-señal ("tres señales simultáneas...") que exponía criterio de decisión propietario (Nivel 3). Ahora narra los escenarios de riesgo y la decisión, no el proceso mental que llevó a la conclusión.
- **Imágenes de radargrama (resuelto):** las 4 imágenes reales (A, B, C, D) fueron entregadas y wireadas en `assets/img/casos/socavones-espesador-t5/radargrama-{a,b,c,d}.jpg`, reemplazando los placeholders `[RADARGRAMA-A]`...`[RADARGRAMA-D]`. Verificado con Playwright: las 4 cargan sin errores y respetan el patrón destacado + 3 colapsadas bajo `<details>`.
- **Enlace a Biblioteca (resuelto):** se creó la sección Biblioteca técnica (`/biblioteca/`) y su primer artículo Canon, y el caso enlaza a él desde "¿Qué aprendimos?". Ambos blockers de `DEFINITION_OF_DONE.md` quedaron resueltos; el caso pasa a PUBLICADO.
- **Fusionado a `main`** el 2026-06-29 (fast-forward, sin conflictos).
- **Revisión "decisión como protagonista" (2026-06-29):** a partir de feedback estratégico del cliente, se actualizó `ARCHITECTURE.md §7` con un nuevo principio rector ("¿qué está aprendiendo el cliente después de ver esta página?") y se reescribió la sección de evidencia: pasó de "Evidencia geofísica" (1 destacado + 3 colapsadas bajo `<details>`, con descripciones de perfil/grilla/continuidad/amplitud) a **"Evidencia del estudio"**, con solo 2 registros representativos (D "Socavón confirmado", B "Deterioro incipiente"), sin `<details>`, sin vocabulario de razonamiento técnico, y con frase de protección de criterio repetida en cada imagen ("la interpretación final no depende de un único radargrama..."). La sección "Interpretación" también se reescribió para reforzar el mismo principio en el bloque de nivel de confianza.
- **Deuda técnica generada:** `radargrama-a.jpg` y `radargrama-c.jpg` quedaron sin referencia en la página tras esta revisión (no se eliminaron del repo, por la Regla absoluta #1 de `CLAUDE.md`: nunca eliminar contenido sin confirmación explícita).
- **Decisión sobre imágenes huérfanas (2026-06-29, confirmado por el cliente):** se mantienen archivadas en el repo, sin enlazar, por si sirven como evidencia para un futuro caso o como referencia histórica. No se eliminan.
- **Sprint 3 — formato "Caso real" maduro (2026-06-29):** se agregó el componente `.case-tags`/`.case-tag` (chips) a `shared.css` y se aplicó en el header de este caso, reemplazando el texto plano de sector/tipo de problema que vivía dentro del eyebrow. `ARCHITECTURE.md §7` se actualizó para documentar el componente como parte del patrón estándar de "Caso real", dejando la base lista para una futura página índice de casos filtrable por sector/tipo de problema (esa página índice no se construye ahora — requeriría ADR de estructura/navegación).

### Glosario GPR

- **Estado:** OPTIMIZACIÓN (no MADURO — ver veredicto del checklist Canon, 2026-06-30)
- **Tipo:** Activo Canon (`CONTENT_STRATEGY.md §13`)
- **Ubicación:** `/glosario/index.html`
- **Términos publicados (10):** Georradar (GPR), Radargrama, Socavón, Hipérbola, Antena (GPR), Atenuación, Velocidad de propagación, Espesador (industrial), Grilla de prospección, Georreferenciación.
- **Enlaces entrantes actuales (10 páginas distintas, verificado 2026-06-30):** `index.html`, `mineria/casos/socavones-espesador-t5/index.html`, `biblioteca/index.html`, `biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/index.html`, `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html`, `herramientas/calculadora-profundidad/index.html`, `herramientas/index.html`, `herramientas/necesito-gpr/index.html`, `mentoria/index.html`, `utilities/casos/accesos-metro-de-santiago/index.html`.
- **Enlaces salientes:** `/#gpr-sim` (simulador interactivo), caso real de Espesador T5, artículo de frecuencia de antena, calculadora de viabilidad GPR.
- **Plan de actualización anual (anotado 2026-06-30, cierra criterio Canon faltante):** revisión cada marzo, a cargo de Gabriel Jaque (criterio técnico) + Claude (auditoría de enlaces y vigencia). Criterios de desactualización: término técnico nuevo usado en un caso real o artículo publicado sin entrada propia; enlace entrante o saliente roto; más de 12 meses sin revisión (señal ya definida en `DEFINITION_OF_DONE.md`, tabla de deuda de contenido).
- **Veredicto checklist Canon MADURO (`DEFINITION_OF_DONE.md`, evaluado 2026-06-30):**
  - [x] ≥5 enlaces entrantes (10, supera el mínimo).
  - [x] Plan de actualización anual anotado (ver arriba).
  - [ ] Estado OPTIMIZACIÓN confirmado, pero **no MADURO**: con 10 términos, el glosario cubre lo necesario para los activos enlazados hoy, pero no se ha hecho la comparación formal con el mejor recurso GPR disponible en español (criterio de profundidad técnica) — requiere revisión humana externa, no solo auditoría de repositorio.
  - [ ] No se declara MADURO mientras ese criterio quede sin verificar; declarar MADURO sin esto sería deuda intencionada (`DEFINITION_OF_DONE.md`, sección de gates).
- **Deuda de contenido registrada:** verificación externa de "mejor recurso en español" pendiente (requiere criterio humano/comparación con fuentes reales, no asumible por el agente). Volumen de términos (10) es funcional pero modesto; expandir a medida que se publiquen nuevos casos o artículos, no de forma artificial.
- **Próximo paso:** mantener en OPTIMIZACIÓN; pedir al cliente la validación de "mejor recurso en español" cuando tenga tiempo de comparar con alternativas reales, antes de declarar MADURO.

### Artículo Canon — Cómo influye la frecuencia de una antena GPR en los resultados

- **Estado:** OPTIMIZACIÓN (no MADURO — ver veredicto checklist Canon, 2026-06-30)
- **Tipo:** Artículo de biblioteca técnica (`ARCHITECTURE.md §7`, Canon — `CONTENT_STRATEGY.md §13` ítem 7, reenfocado)
- **Ubicación:** `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`
- **Enlaces entrantes (5, verificado 2026-06-30, antes 3 — deuda cerrada):** `/biblioteca/` (card de artículos), `/herramientas/calculadora-profundidad/` (sección "El concepto detrás de esta estimación"), `/glosario/#antena`, `/mineria/` (paso 3 del proceso técnico), `/utilities/` (FAQ de profundidad de detección).
- **Enlaces salientes:** `/glosario/#antena`, `/glosario/#atenuacion`, `/glosario/#velocidad-propagacion`, `/herramientas/calculadora-profundidad/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, CTA a `georadarchile.cl`
- **Reenfoque editorial (aprobado por el cliente):** el ítem Canon original era "Guía de selección de antena", pero se reescribió como explicación de física pública ("cómo influye la frecuencia") en lugar de una guía prescriptiva ("qué antena usar"), evitando regalar el criterio de selección que un especialista aplica caso por caso. Cierra explícitamente con que la selección final depende de variables del sitio y la debe hacer un especialista.
- **Plan de actualización anual:** mismo ciclo que el Glosario (marzo, Gabriel Jaque + Claude); criterio de desactualización propio: cambios en equipos/antenas usadas en terreno que vuelvan obsoleta la explicación de física.
- **Veredicto checklist Canon MADURO:** enlaces entrantes ya cumple (5/5 mínimo); falta el mismo criterio que el Glosario (comparación externa con mejor recurso en español) — no se declara MADURO todavía.

### Calculadora de viabilidad GPR (actualización)

- Ahora enlaza al nuevo artículo de frecuencia de antena desde su sección educativa, sumando un enlace saliente adicional.

### Biblioteca técnica (módulo nuevo)

- **Estado:** DISEÑO/REVISIÓN — Canon completo según `CONTENT_STRATEGY.md §13`, actualizado 2026-06-30
- **Tipo:** Módulo + Activo Canon (`CONTENT_STRATEGY.md §13`)
- **Ubicación landing:** `/biblioteca/index.html`
- **Artículos publicados:**
  1. **Cómo tomar decisiones correctas antes de intervenir el subsuelo** (`/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) — Canon #1. Cubre Nivel A (qué es un GPR, qué puede/no puede detectar, cuándo es necesario, qué preguntas responder antes de contratar un estudio). No enseña razonamiento multi-señal (Nivel C, protegido por `CONTENT_STRATEGY.md §1.5`).
- **Estado de los 7 ítems del Canon (`CONTENT_STRATEGY.md §13`), verificado 2026-06-30:**
  1. Artículo "Cómo tomar decisiones..." — PUBLICADO.
  2. Calculadora de viabilidad GPR — PUBLICADO (`/herramientas/calculadora-profundidad/`).
  3. Glosario GPR — PUBLICADO, en revisión rumbo a MADURO (ver entrada propia).
  4. Caso real minería — PUBLICADO (`/mineria/casos/socavones-espesador-t5/`).
  5. Caso real utilities — **PUBLICADO 2026-06-30** (`/utilities/casos/accesos-metro-de-santiago/`, ver entrada propia).
  6. Caso real arqueología no invasiva — **reformulado 2026-06-30** a "estudio no invasivo en sitio patrimonial/de memoria"; se satisface con el caso ya publicado `/forense/casos/sitio-iran-3037-venda-sexy/` en vez de crear un sector nuevo sin evidencia. Decisión registrada en `CONTENT_STRATEGY.md §13` y `DECISIONS.md`.
  7. Guía de selección de antena — PUBLICADO, reenfocado como "Cómo influye la frecuencia de antena GPR en los resultados" (física pública, no criterio de selección propietario).
- **Canon completo:** con el ítem 5 publicado y el ítem 6 resuelto por reformulación, los 7 ítems del Canon quedan cubiertos por primera vez.
- **Enlaces entrantes:** nav y footer de todas las páginas del sitio (Minería, Utilities, Forense, Glosario, Inicio, casos reales); enlace contextual desde `glosario/index.html` ("Para seguir aprendiendo") y desde los casos reales de Espesador T5 y Metro de Santiago.
- **Enlaces salientes:** `/glosario/` (términos técnicos), casos reales de Espesador T5 y Metro de Santiago (aplicación práctica), CTA a `georadarchile.cl` / WhatsApp.
- **Veredicto checklist Canon MADURO del módulo (evaluado 2026-06-30, ver entradas individuales de Glosario y artículo de frecuencia de antena para el detalle por activo):**
  - [x] Cobertura de los 7 ítems del Canon: completa.
  - [x] Enlaces entrantes ≥5 por activo individual con ese requisito (Glosario: 10; artículo "Cómo tomar decisiones...": 5; artículo de frecuencia: 5, cerrado hoy con 2 enlaces nuevos desde `mineria/index.html` y `utilities/index.html`).
  - [x] Plan de actualización anual anotado para Glosario y artículo de frecuencia.
  - [ ] **No MADURO:** queda pendiente la verificación externa de "mejor recurso disponible en español" para los activos de referencia (Glosario, ambos artículos). Es un criterio que requiere comparación humana con fuentes reales — no se puede auto-certificar desde el repositorio, y declarar MADURO sin esto sería deuda intencionada (`DEFINITION_OF_DONE.md`).
- **Por qué no es Canon MADURO todavía:** un solo criterio pendiente y compartido por los tres activos de referencia: comparación externa con el mejor recurso GPR en español. El resto del checklist Canon (enlaces, plan de actualización, cobertura) ya está cerrado.
- **Próximo paso:** pedir al cliente que valide la comparación con el mejor recurso disponible en español cuando tenga tiempo; mientras tanto, los activos quedan en OPTIMIZACIÓN (estado correcto y honesto, no un bloqueo). Considerar agregar el árbol de decisión "¿Necesito GPR?" como activo adicional del módulo si en esa revisión se detecta deuda de profundidad.

---

### Caso real — CIP San Joaquín y Cerro Chena

- **Estado:** PUBLICADO
- **Tipo:** Caso real (`ARCHITECTURE.md §7`, patrón "Caso real", adaptado a sensibilidad judicial/DDHH)
- **Sector:** forense
- **Ubicación:** `/forense/casos/cip-san-joaquin-cerro-chena/index.html`
- **Enlaces entrantes:** `forense/index.html` (card "CIP San Joaquín y Cerro Chena, 2025")
- **Enlaces salientes:** `/forense/` (servicio correspondiente)
- **Contexto:** Subsecretaría de Derechos Humanos, causas ROL N°23-2018 y ROL N°549-2023. Autorización de mención pública confirmada por el cliente el 2026-06-30 (ver `docs/REGISTRO_EXPERIENCIA.md`).
- **Tratamiento editorial:** dado lo sensible del caso, la página describe únicamente contexto institucional y método (prospección no invasiva, georreferenciada, trazable), sin publicar hallazgos, interpretación ni resultados de la investigación — esos corresponden al Ministerio Público y a la causa judicial, no a este sitio. La sección de evidencia usa un diagrama SVG esquemático genérico (no identificable, sin coordenadas reales) en lugar de cualquier radargrama o fotografía real, decidido junto con el cliente antes de implementar.
- **Cumple el Principio editorial (`CONTENT_STRATEGY.md`):** enseña criterio institucional sobre cuándo recurrir a un método no invasivo, no interpretación técnica (Nivel C, `CONTENT_STRATEGY.md §1.5`).
- **Deuda de contenido relacionada:** Cementerio Río Chico, Puerto Montt sigue documentado solo como card sin página propia. Sitio Irán 3037 "Venda Sexy" ya tiene página de caso propia (ver entrada siguiente). El cliente indicó que la cobertura actual de forense es suficiente por ahora ("Ya tenemos en forense", 2026-06-30) — no se construyen más páginas de caso forense hasta nueva indicación.

### Caso real — Sitio de Memoria Irán 3037 "Venda Sexy"

- **Estado:** PUBLICADO
- **Tipo:** Caso real (`ARCHITECTURE.md §7`, patrón "Caso real", adaptado a sensibilidad de sitio de memoria)
- **Sector:** forense
- **Ubicación:** `/forense/casos/sitio-iran-3037-venda-sexy/index.html`
- **Enlaces entrantes:** `forense/index.html` (card "Sitio Irán 3037 'Venda Sexy', 2024")
- **Enlaces salientes:** `/forense/` (servicio correspondiente)
- **Contexto:** Asociación de Memoria y Derechos Humanos Venda Sexy, financiado por la Secretaría de Derechos Humanos (2024). Autorización de mención pública confirmada por el cliente el 2026-06-30.
- **Tratamiento editorial:** mismo criterio aplicado a CIP San Joaquín y Cerro Chena — solo contexto institucional y método, sin hallazgos ni evidencia visual real, diagrama esquemático genérico en vez de radargrama.
- **Reutilización adicional (2026-06-30):** este caso satisface también el ítem 6 del Canon ("estudio no invasivo en sitio patrimonial/de memoria", reformulado desde "arqueología no invasiva" en `CONTENT_STRATEGY.md §13`).

### Caso real — Localización de servicios en accesos de Metro de Santiago

- **Estado:** PUBLICADO
- **Tipo:** Caso real (`ARCHITECTURE.md §7`, patrón "Caso real" estándar)
- **Sector:** utilities
- **Ubicación:** `/utilities/casos/accesos-metro-de-santiago/index.html`
- **Enlaces entrantes:** `utilities/index.html` (card "Metro de Santiago"); `biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/index.html` (sección "Véalo en un caso real")
- **Enlaces salientes:** `/utilities/` (servicio correspondiente), `/glosario/#antena`, `/glosario/#georreferenciacion`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`
- **Contexto:** proyectos sucesivos 2017-2018, accesos de más de 13 estaciones de Metro de Santiago, prospección con antena GPR + LEM. Evidencia tomada de `docs/REGISTRO_EXPERIENCIA.md`.
- **Cumple Canon ítem 5** (`CONTENT_STRATEGY.md §13`): primer caso real de utilities con página propia.

---

### Página de servicio por sector — Construcción

- **Estado:** PUBLICADO
- **Tipo:** Página de servicio por sector (`ARCHITECTURE.md §7`, patrón "Página de servicio por sector")
- **Sector:** construcción / obras civiles
- **Ubicación:** `/construccion/index.html`
- **Motivo:** la card "Construcción" del home (`index.html`, sección `#servicios`) era la única de las 4 cards de servicio que enlazaba a un dominio externo (`georadarchile.cl`) en lugar de una página propia del sitio — inconsistencia detectada por el cliente (2026-06-30) y confirmada por auditoría del repositorio. Se resolvió construyendo la página de sector correspondiente, igual que Minería/Utilities/Forense, en vez de mantener el enlace externo.
- **Enlaces entrantes:** card "Construcción" en `index.html`, más el ítem "Construcción" agregado al `<nav>` y al footer "Servicios" de las 8 páginas índice del sitio (`index.html`, `mineria/`, `utilities/`, `forense/`, `biblioteca/`, `mentoria/`, `herramientas/`, `glosario/`) y de las 4 páginas de caso real existentes — 13 enlaces entrantes en total.
- **Enlaces salientes:** `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` (artículo Canon, paso 3 del proceso técnico).
- **Contexto:** evidencia tomada de `docs/REGISTRO_EXPERIENCIA.md`, sección "Infraestructura civil y aeroportuaria" — Aeropuerto Arturo Merino Benítez (4 proyectos 2011-2025), Aeródromo Chacalluta, Aeródromo Tobalaba, Vespucio Oriente, Costanera Puerto Montt, Planta Desaladora Aguas Pacífico, edificación en Las Condes (Clínica Bupa, Edificio El Golf 280).

---

## Deuda de contenido

- **Cards de "Casos en minería" — estado actualizado (2026-06-30).** Las cards de Codelco División Andina, BHP, SQM, Minera Centinela, Albemarle y Minera Collahuasi en `mineria/index.html` ya incluyen detalle verificado del registro de experiencia del cliente (`docs/REGISTRO_EXPERIENCIA.md`), pero siguen sin enlace a una página de caso real propia (patrón completo de `ARCHITECTURE.md §7`) — solo el caso Espesador T5 tiene página dedicada. Queda como deuda hasta que se prioricen nuevas páginas de caso para alguno de estos clientes.
- **Casos forenses sin página propia.** Sitio Irán 3037 "Venda Sexy" (2024) y Cementerio Río Chico, Puerto Montt — documentados solo como card en `forense/index.html`, sin página de caso dedicada como la de CIP San Joaquín y Cerro Chena.
- **Construcción sin página de caso real propia.** `/construccion/index.html` es una página de servicio por sector con cards de obras atendidas, pero ninguna tiene el patrón completo de "Caso real" (`ARCHITECTURE.md §7`: contexto → método → evidencia → decisión → resultado). Queda como deuda hasta que se priorice una página de caso para alguna obra civil (candidatas: Costanera Puerto Montt, Aeródromo Chacalluta).

---

## Deuda técnica

- **`docs/adr/` — resuelto (2026-06-30).** `ARCHITECTURE.md §5/§9` referenciaba 3 ADR (ADR-001-css-vanilla, ADR-002-whatsapp-primario, ADR-003-mentorias-premium-1a1) que documentarían decisiones ya tomadas. Los tres ADR ya existen: ADR-003 (2026-06-30, mentoría 1:1), y ADR-001 (CSS vanilla) y ADR-002 (WhatsApp como canal primario), creados en esta tarea, documentando retroactivamente decisiones de tecnología y canal de contacto ya implementadas en todo el sitio.
