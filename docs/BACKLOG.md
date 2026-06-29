# BACKLOG.md

> Registro de activos en curso, deuda técnica y deuda de contenido.
> Ver `CLAUDE.md §5` y `DEFINITION_OF_DONE.md` para el proceso de estados.

---

## Activos de contenido

### Caso real — Detección de socavones en Espesador T5

- **Estado:** REVISIÓN
- **Tipo:** Caso real (`ARCHITECTURE.md §7`, patrón revisado)
- **Sector:** mineria
- **Taxonomía:** deteccion-cavidades
- **Nivel de pirámide de evidencia:** 5
- **Ubicación:** `/mineria/casos/socavones-espesador-t5/index.html`
- **Enlaces entrantes:** `mineria/index.html` (card en "Casos en minería"), `index.html` (card de Minería en "Prospección GPR por industria")
- **Enlaces salientes:** `/mineria/` (servicio correspondiente), `/glosario/#socavon`, `/glosario/#espesador`, `/glosario/#antena`, `/glosario/#hiperbola`
- **Reestructurado** según el patrón "Caso real" actualizado en `ARCHITECTURE.md §7`: agrega puente "Qué buscábamos / qué encontramos", sección "Evidencia geofísica" (radargrama destacado + 3 condiciones colapsadas bajo `<details>`), bloque de "Nivel de confianza / validación", sección "Decisión que permitió tomar el estudio", lista "¿Qué aprendimos?" y CTA específico al síntoma.
- **Interpretación reescrita** conforme al principio editorial de `CONTENT_STRATEGY.md §1.5` (tres niveles de conocimiento): se eliminó la descripción del razonamiento multi-señal ("tres señales simultáneas...") que exponía criterio de decisión propietario (Nivel 3). Ahora narra los escenarios de riesgo y la decisión, no el proceso mental que llevó a la conclusión.
- **Por qué no está en PUBLICADO:**
  1. Las 4 imágenes de radargramas (A, B, C, D) están pendientes de entrega y marcadas como `[RADARGRAMA-A]`...`[RADARGRAMA-D]` en el HTML.
  2. `DEFINITION_OF_DONE.md` exige enlace a artículos técnicos relacionados de la Biblioteca; no existe todavía ningún artículo de Nivel 3 sobre detección de cavidades con GPR al que enlazar.
- **Próximo paso para pasar a PUBLICADO:** reemplazar los placeholders de radargrama por las imágenes reales y, cuando exista, enlazar un artículo técnico de Biblioteca sobre interpretación de cavidades.

### Glosario GPR

- **Estado:** DISEÑO/REVISIÓN rumbo a Canon
- **Tipo:** Activo Canon (`CONTENT_STRATEGY.md §13`)
- **Ubicación:** `/glosario/index.html`
- **Términos publicados:** Socavón, Hipérbola, Antena (GPR), Atenuación, Velocidad de propagación, Espesador (industrial)
- **Enlaces entrantes actuales:** `index.html` (tab "Glosario" del simulador GPR), `mineria/casos/socavones-espesador-t5/index.html` (4 enlaces a términos específicos)
- **Enlaces salientes:** `/#gpr-sim` (simulador interactivo), caso real de Espesador T5
- **Por qué no es Canon MADURO todavía:** `DEFINITION_OF_DONE.md` exige mínimo 5 enlaces entrantes para activos Canon; este activo cuenta hoy con 2 páginas que enlazan hacia él (aunque el caso real aporta 4 enlaces puntuales a anclas distintas, son enlaces entrantes desde una sola página). Falta además alcanzar estado EXPANDIDO de contenido antes de poder declararlo MADURO.
- **Próximo paso:** sumar enlaces entrantes desde nuevos activos (artículos de Biblioteca, futuros casos reales) hasta llegar a 5 páginas distintas que enlacen al glosario, y expandir términos a medida que se publiquen nuevos casos.

---

## Deuda de contenido

- **Biblioteca técnica de Nivel 3 inexistente.** No hay ningún artículo técnico publicado sobre interpretación de radargramas ni sobre detección de cavidades. Esto bloquea el criterio de enlace saliente a Biblioteca exigido por `DEFINITION_OF_DONE.md` para casos reales. Afecta directamente al caso "Detección de socavones en Espesador T5" registrado arriba.
- **Cards de "Casos en minería" sin evidencia.** Las cards de Codelco División Andina, BHP Spence, SQM y Minera Centinela (`mineria/index.html`) no tienen enlace ni caso real documentado detrás — son afirmaciones sin respaldo verificable. Quedan como deuda hasta que existan casos reales para cada una o se reformulen como testimoniales sin pretensión de evidencia.

---

## Deuda técnica

- **`docs/adr/` no existe.** `ARCHITECTURE.md §5/§9` referencia 3 ADR (ADR-001-css-vanilla, ADR-002-whatsapp-primario, ADR-003-mentorias-premium-1a1) que documentarían decisiones ya tomadas (CSS vanilla, WhatsApp como canal primario, mentorías 1 a 1). Ninguno de los 3 archivos existe en el repositorio.
