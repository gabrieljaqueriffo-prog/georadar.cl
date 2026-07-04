# ADR-005: Capacidad Evidencia Técnica — estructura `content/research/`

**Estado:** Aprobada  
**Fecha:** 2026-07  
**Aprobado por:** Gabriel Jaque (cliente)

---

## Contexto

ATLAS necesita un sistema interno para incorporar literatura científica (papers, tesis, informes institucionales, manuales técnicos) como fuente de conocimiento sin:

- publicar contenido protegido por derechos de autor,
- regalar criterio profesional de Geo Radar Chile,
- convertir ATLAS en un repositorio académico frío desconectado del propósito editorial.

El sitio no tenía ninguna estructura para gestionar este tipo de fuentes. Toda la producción de contenido era directa (artículo → HTML → publicación), sin capa de investigación documentada. Esto genera riesgo editorial: un artículo basado en literatura técnica no citada, o que expone inadvertidamente conocimiento de Nivel 3, no tiene trazabilidad de origen ni revisión de riesgo.

---

## Alternativas consideradas

**A. No crear estructura formal — gestión ad hoc.**  
Gabriel anota ideas en texto libre o mensajes. Sin capa de triage, sin clasificación de riesgo, sin ruta clara desde fuente → síntesis → publicación. Riesgo: pérdida de fuentes, inconsistencia editorial, errores de copyright.

**B. Usar el sistema de BACKLOG para registrar fuentes.**  
BACKLOG.md ya es largo y sirve para activos de producto, no para gestión de investigación. Mezclarlos degrada ambos.

**C. Crear `content/research/` con cuatro subcapas: intake / papers / themes / synthesis.**  
Permite flujo editorial trazable, clasificación de riesgo explícita por fuente, y separación clara entre material interno y contenido público. La estructura materializa por primera vez el directorio `content/` que `ARCHITECTURE.md §5` documenta de forma aspiracional.

---

## Decisión

Se elige la opción C.

Se crea `content/research/` con cuatro subcapas y sus respectivos README + templates. Esta estructura es interna: ningún archivo bajo `content/research/` es contenido público de ATLAS. Los archivos son accesibles técnicamente vía URL directa (GitHub Pages sirve markdown como texto plano), pero no están enlazados desde ninguna página pública y no contienen información sensible de proyectos.

La página pública `/evidencia-tecnica/` no se crea en esta decisión. Requiere una decisión separada cuando exista al menos una síntesis lista para publicar.

---

## Consecuencias

- `content/` queda creado en el filesystem como primera materialización concreta de la estructura aspiracional de `ARCHITECTURE.md §5`.
- La capacidad "Evidencia Técnica" se documenta en `ARCHITECTURE.md §1` como subcapacidad de soporte dentro de Conocimiento.
- `CONTENT_STRATEGY.md` recibe una nueva sección con el flujo editorial, reglas de copyright y clasificación de niveles.
- Todo activo público futuro basado en literatura técnica debe poder trazarse hasta al menos una síntesis en `content/research/synthesis/`.
- Las fichas de papers y notas internas de Gabriel no deben incluir datos de proyectos identificables, ya que los archivos son técnicamente accesibles.
