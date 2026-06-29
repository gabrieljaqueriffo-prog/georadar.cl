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
- **Deuda técnica generada:** `radargrama-a.jpg` y `radargrama-c.jpg` quedaron sin referencia en la página tras esta revisión (no se eliminaron del repo, por la Regla absoluta #1 de `CLAUDE.md`: nunca eliminar contenido sin confirmación explícita). Pendiente decidir si se eliminan, se reusan en otro caso futuro, o se mantienen como archivo histórico.

### Glosario GPR

- **Estado:** DISEÑO/REVISIÓN rumbo a Canon
- **Tipo:** Activo Canon (`CONTENT_STRATEGY.md §13`)
- **Ubicación:** `/glosario/index.html`
- **Términos publicados:** Socavón, Hipérbola, Antena (GPR), Atenuación, Velocidad de propagación, Espesador (industrial)
- **Enlaces entrantes actuales:** `index.html` (tab "Glosario" del simulador GPR), `mineria/casos/socavones-espesador-t5/index.html` (4 enlaces a términos específicos)
- **Enlaces salientes:** `/#gpr-sim` (simulador interactivo), caso real de Espesador T5
- **Por qué no es Canon MADURO todavía:** `DEFINITION_OF_DONE.md` exige mínimo 5 enlaces entrantes para activos Canon; este activo cuenta hoy con 2 páginas que enlazan hacia él (aunque el caso real aporta 4 enlaces puntuales a anclas distintas, son enlaces entrantes desde una sola página). Falta además alcanzar estado EXPANDIDO de contenido antes de poder declararlo MADURO.
- **Próximo paso:** sumar enlaces entrantes desde nuevos activos (artículos de Biblioteca, futuros casos reales) hasta llegar a 5 páginas distintas que enlacen al glosario, y expandir términos a medida que se publiquen nuevos casos.

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
