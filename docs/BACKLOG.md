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

- **Estado:** REVISIÓN rumbo a MADURO (criterio de enlaces entrantes ya cumplido)
- **Tipo:** Activo Canon (`CONTENT_STRATEGY.md §13`)
- **Ubicación:** `/glosario/index.html`
- **Términos publicados:** Georradar (GPR), Radargrama, Socavón, Hipérbola, Antena (GPR), Atenuación, Velocidad de propagación, Espesador (industrial), Grilla de prospección, Georreferenciación.
- **Enlaces entrantes actuales (6 páginas distintas):** `index.html` (cards del mini-glosario de la página de inicio, ahora consolidadas como enlaces a `/glosario/#ancla` en lugar de duplicar definiciones), `mineria/casos/socavones-espesador-t5/index.html`, `biblioteca/index.html`, `biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/index.html`, `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html`, `herramientas/calculadora-profundidad/index.html`.
- **Enlaces salientes:** `/#gpr-sim` (simulador interactivo), caso real de Espesador T5, artículo de frecuencia de antena, calculadora de viabilidad GPR.
- **Actualización (2026-06-29):** se agregaron 4 términos nuevos (Georradar, Radargrama, Grilla de prospección, Georreferenciación) para dar contexto a los enlaces entrantes recién creados. Se eliminó la duplicación de contenido: la página de inicio tenía un mini-glosario propio con definiciones repetidas; ahora esas cards enlazan al glosario canónico en lugar de duplicar el texto, siguiendo `CLAUDE.md §5` (priorizar reducir deuda de Canon sobre crear contenido nuevo).
- **Corrección de conteo:** el registro anterior de este documento subestimaba los enlaces entrantes (indicaba 2 páginas). Al revisar el repositorio se confirmaron 6 páginas distintas que enlazan a `/glosario/`, superando el mínimo de 5 exigido por `DEFINITION_OF_DONE.md` para activos Canon.
- **Por qué no es Canon MADURO todavía:** aunque el criterio de enlaces entrantes ya se cumple, falta verificar el resto del checklist Canon de `DEFINITION_OF_DONE.md` (estado de contenido EXPANDIDO, ser el mejor recurso disponible en español, plan de actualización anual anotado).
- **Próximo paso:** evaluar el checklist Canon completo y, si corresponde, declarar el activo MADURO; seguir expandiendo términos a medida que se publiquen nuevos casos reales o artículos.

### Artículo Canon — Cómo influye la frecuencia de una antena GPR en los resultados

- **Estado:** PUBLICADO
- **Tipo:** Artículo de biblioteca técnica (`ARCHITECTURE.md §7`, Canon — `CONTENT_STRATEGY.md §13` ítem 7, reenfocado)
- **Ubicación:** `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`
- **Enlaces entrantes:** `/biblioteca/` (card de artículos), `/herramientas/calculadora-profundidad/` (sección "El concepto detrás de esta estimación"), `/glosario/#antena`
- **Enlaces salientes:** `/glosario/#antena`, `/glosario/#atenuacion`, `/glosario/#velocidad-propagacion`, `/herramientas/calculadora-profundidad/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, CTA a `georadarchile.cl`
- **Reenfoque editorial (aprobado por el cliente):** el ítem Canon original era "Guía de selección de antena", pero se reescribió como explicación de física pública ("cómo influye la frecuencia") en lugar de una guía prescriptiva ("qué antena usar"), evitando regalar el criterio de selección que un especialista aplica caso por caso. Cierra explícitamente con que la selección final depende de variables del sitio y la debe hacer un especialista.

### Calculadora de viabilidad GPR (actualización)

- Ahora enlaza al nuevo artículo de frecuencia de antena desde su sección educativa, sumando un enlace saliente adicional.

### Biblioteca técnica (módulo nuevo)

- **Estado:** DISEÑO/REVISIÓN — primer activo Canon publicado
- **Tipo:** Módulo + Activo Canon (`CONTENT_STRATEGY.md §13`, ítem 1)
- **Ubicación landing:** `/biblioteca/index.html`
- **Artículos publicados:**
  1. **Cómo tomar decisiones correctas antes de intervenir el subsuelo** (`/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`) — Canon #1. Cubre Nivel A (qué es un GPR, qué puede/no puede detectar, cuándo es necesario, qué preguntas responder antes de contratar un estudio). No enseña razonamiento multi-señal (Nivel C, protegido por `CONTENT_STRATEGY.md §1.5`).
- **Enlaces entrantes:** nav y footer de todas las páginas del sitio (Minería, Utilities, Forense, Glosario, Inicio, caso Espesador T5); enlace contextual desde `glosario/index.html` ("Para seguir aprendiendo") y desde el caso real de Espesador T5 ("¿Qué aprendimos?").
- **Enlaces salientes:** `/glosario/` (términos técnicos), caso real de Espesador T5 (aplicación práctica), CTA a `georadarchile.cl` / WhatsApp.
- **Por qué no es Canon MADURO todavía:** un solo artículo publicado; `DEFINITION_OF_DONE.md` exige profundidad y volumen mínimo de Canon antes de declarar MADURO.
- **Próximo paso:** publicar el resto del Canon (`CONTENT_STRATEGY.md §13`, ítems 2–7) y artículos que respalden los demás casos reales y sectores. Considerar agregar el árbol de decisión "¿Necesito GPR?" (`DECISION_FRAMEWORK.md` Bloque 3) como siguiente activo del módulo.

---

## Deuda de contenido

- **Cards de "Casos en minería" sin evidencia.** Las cards de Codelco División Andina, BHP Spence, SQM y Minera Centinela (`mineria/index.html`) no tienen enlace ni caso real documentado detrás — son afirmaciones sin respaldo verificable. Quedan como deuda hasta que existan casos reales para cada una o se reformulen como testimoniales sin pretensión de evidencia.

---

## Deuda técnica

- **`docs/adr/` no existe.** `ARCHITECTURE.md §5/§9` referencia 3 ADR (ADR-001-css-vanilla, ADR-002-whatsapp-primario, ADR-003-mentorias-premium-1a1) que documentarían decisiones ya tomadas (CSS vanilla, WhatsApp como canal primario, mentorías 1 a 1). Ninguno de los 3 archivos existe en el repositorio.
