# BACKLOG.md

> Registro de activos en curso, deuda técnica y deuda de contenido.
> Ver `CLAUDE.md §5` y `DEFINITION_OF_DONE.md` para el proceso de estados.

---

## Activos de contenido

### Caso real — Detección de socavones en Espesador T5

- **Estado:** REVISIÓN
- **Tipo:** Caso real (`ARCHITECTURE.md §7`)
- **Sector:** mineria
- **Taxonomía:** deteccion-cavidades
- **Nivel de pirámide de evidencia:** 5
- **Ubicación:** `/mineria/casos/socavones-espesador-t5/index.html`
- **Enlaces entrantes:** `mineria/index.html` (card en "Casos en minería"), `index.html` (card de Minería en "Prospección GPR por industria")
- **Enlace saliente:** `/mineria/` (servicio correspondiente)
- **Por qué no está en PUBLICADO:**
  1. Las 4 imágenes de radargramas (A, B, C, D) están pendientes de entrega y marcadas como `[RADARGRAMA-A]`...`[RADARGRAMA-D]` en el HTML.
  2. `DEFINITION_OF_DONE.md` exige enlace a artículos técnicos relacionados de la Biblioteca; no existe todavía ningún artículo de Nivel 3 sobre detección de cavidades con GPR al que enlazar.
- **Próximo paso para pasar a PUBLICADO:** reemplazar los placeholders de radargrama por las imágenes reales y, cuando exista, enlazar un artículo técnico de Biblioteca sobre interpretación de cavidades.

---

## Deuda de contenido

- **Biblioteca técnica de Nivel 3 inexistente.** No hay ningún artículo técnico publicado sobre interpretación de radargramas ni sobre detección de cavidades. Esto bloquea el criterio de enlace saliente a Biblioteca exigido por `DEFINITION_OF_DONE.md` para casos reales. Afecta directamente al caso "Detección de socavones en Espesador T5" registrado arriba.
- **Cards de "Casos en minería" sin evidencia.** Las cards de Codelco División Andina, BHP Spence, SQM y Minera Centinela (`mineria/index.html`) no tienen enlace ni caso real documentado detrás — son afirmaciones sin respaldo verificable. Quedan como deuda hasta que existan casos reales para cada una o se reformulen como testimoniales sin pretensión de evidencia.

---

## Deuda técnica

- **`docs/adr/` no existe.** `ARCHITECTURE.md §5/§9` referencia 3 ADR (ADR-001-css-vanilla, ADR-002-whatsapp-primario, ADR-003-mentorias-premium-1a1) que documentarían decisiones ya tomadas (CSS vanilla, WhatsApp como canal primario, mentorías 1 a 1). Ninguno de los 3 archivos existe en el repositorio.
