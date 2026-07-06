# CONTENT_REGISTRY — ATLAS

> Documento interno. No es contenido público de ATLAS.
> Última actualización: 2026-07-06.

---

## Propósito

Este documento es la fuente única de verdad para saber qué contenido existe en
ATLAS, qué está publicado, qué está en backlog, qué requiere auditoría y qué
estado editorial tiene.

Ningún agente debe asumir que una página está pendiente, publicada, madura o
inexistente sin revisar este registro y el árbol real de archivos del proyecto.

**Regla de precedencia:** si existe contradicción entre un documento de backlog
y una página publicada en el árbol de archivos, prevalece la existencia de la
página publicada. Este registro debe actualizarse inmediatamente cuando se
detecte esa contradicción.

---

## Estados editoriales permitidos

| Estado | Descripción |
|--------|-------------|
| **PUBLICADO** | Contenido público, vigente y sin bloqueo editorial conocido. |
| **PUBLICADO - REQUIERE AUDITORÍA** | Contenido público, pendiente de revisión editorial, técnica, SEO o de claims. |
| **PUBLICADO - REQUIERE DECISIÓN** | Contenido público, pero existe una decisión pendiente (ADR, rename, redirect) que afecta su estado. |
| **BORRADOR** | Archivo creado en el proyecto, pero no publicado ni enlazado públicamente. |
| **BACKLOG** | Contenido planificado y suficientemente definido, pero aún no desarrollado. |
| **PENDIENTE MATERIAL DOCUMENTADO** | Contenido potencial que no debe desarrollarse hasta recibir evidencia suficiente de Gabriel. |
| **OPTIMIZACIÓN** | Contenido publicado que requiere mejoras relevantes antes de considerarse maduro. |
| **OPTIMIZACIÓN AVANZADA** | Contenido fuerte, pendiente de mejoras puntuales o validación final. |
| **PRELIMINAR VALIDADO PARCIALMENTE** | Evaluación con revisión inicial suficiente para orientar decisiones, pero no suficiente para cerrar madurez. |
| **MADURO** | Contenido validado, trazable, técnicamente correcto y certificado por Gabriel. |
| **RETIRADO** | Contenido eliminado, despublicado o reemplazado. |
| **DESCARTADO TEMPORALMENTE** | Contenido que no debe desarrollarse por falta de material, sin fecha de retiro definitiva. |

---

## Inventario de páginas publicadas

*Verificado contra el árbol real de archivos del proyecto — 2026-07-06.*
*Total: 23 URLs públicas.*

### Home

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Global | Landing | Conocimiento aplicado sobre georradar GPR en Chile | `/` | `index.html` | PUBLICADO | Ninguna bloqueante |

---

### Minería

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Minería | Servicio | Georradar para faenas mineras en Chile | `/mineria/` | `mineria/index.html` | PUBLICADO | Ninguna bloqueante |
| Minería | Caso real | Cómo se detectaron socavones bajo el Espesador T5 | `/mineria/casos/socavones-espesador-t5/` | `mineria/casos/socavones-espesador-t5/index.html` | PUBLICADO | Ninguna bloqueante |

---

### Utilities

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Utilities | Servicio | Detección de líneas soterradas con georradar | `/utilities/` | `utilities/index.html` | PUBLICADO | Ninguna bloqueante |
| Utilities | Caso real | Localización de servicios subterráneos en accesos de Metro de Santiago | `/utilities/casos/accesos-metro-de-santiago/` | `utilities/casos/accesos-metro-de-santiago/index.html` | PUBLICADO | Ninguna bloqueante |

---

### Construcción

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Construcción | Servicio | Prospección GPR en obras civiles | `/construccion/` | `construccion/index.html` | PUBLICADO - REQUIERE AUDITORÍA | Verificar coherencia con keyword nueva "prospección GPR en obras civiles"; monitorear Search Console 4-6 semanas |
| Construcción | Caso real | Prospección GPR en Aeropuerto Chacalluta, Arica | `/construccion/casos/prospeccion-aeropuerto-chacalluta/` | `construccion/casos/prospeccion-aeropuerto-chacalluta/index.html` | PUBLICADO - REQUIERE AUDITORÍA | Auditoría aplicada 2026-07-06: footer, enlace a frecuencia, claims, title/H1 con "GPR". Sin deuda pendiente conocida. Certificación final de Gabriel requerida para cerrar estado. |

---

### Forense

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Forense | Servicio | Peritaje con georradar para Fiscalía y PDI | `/forense/` | `forense/index.html` | PUBLICADO | Ninguna bloqueante |
| Forense | Caso real | Prospección geofísica no invasiva en CIP San Joaquín y Cerro Chena | `/forense/casos/cip-san-joaquin-cerro-chena/` | `forense/casos/cip-san-joaquin-cerro-chena/index.html` | PUBLICADO | Ninguna bloqueante |
| Forense | Caso real | Estudio de subsuelo en el Sitio de Memoria Irán 3037 | `/forense/casos/sitio-iran-3037-venda-sexy/` | `forense/casos/sitio-iran-3037-venda-sexy/index.html` | PUBLICADO | Ninguna bloqueante |

---

### Biblioteca técnica

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Biblioteca | Landing | Entienda el subsuelo antes de intervenirlo | `/biblioteca/` | `biblioteca/index.html` | OPTIMIZACIÓN | Mejorar rutas de lectura por perfil; integrar herramientas y casos. Ver acciones derivadas de benchmark |
| Biblioteca | Artículo | Cómo tomar decisiones correctas antes de intervenir el subsuelo | `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` | `biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/index.html` | PUBLICADO | Ninguna bloqueante |
| Biblioteca | Artículo | Cómo influye la frecuencia de una antena GPR en los resultados | `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` | `biblioteca/como-influye-la-frecuencia-de-antena-gpr/index.html` | OPTIMIZACIÓN AVANZADA | Agregar tabla por rango de antena, advertencias por conductividad, ejemplos por objetivo. R4 (ImpulseRadar) es competidor directo. Ver benchmark |
| Biblioteca | Artículo | Por qué la profundidad del georradar depende del terreno | `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` | `biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/index.html` | PUBLICADO | Ninguna bloqueante |
| Biblioteca | Artículo | Qué puede decirnos una señal GPR además de una imagen | `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | `biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/index.html` | PUBLICADO | Ninguna bloqueante |
| Biblioteca | Artículo | Cómo afecta la humedad del suelo a un estudio con georradar | `/biblioteca/como-afecta-la-humedad-al-georradar/` | `biblioteca/como-afecta-la-humedad-al-georradar/index.html` | PUBLICADO | Ninguna bloqueante |
| Biblioteca | Artículo | Qué hace que un suelo sea difícil para el GPR | `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/` | `biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/index.html` | PUBLICADO | Ninguna bloqueante |

---

### Glosario

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Glosario | Glosario | Glosario GPR (13 términos) | `/glosario/` | `glosario/index.html` | OPTIMIZACIÓN | Agregar ejemplos de uso en terreno, errores comunes de interpretación y relación con decisiones reales de obra. Ver acciones derivadas de benchmark |

---

### Herramientas

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Herramientas | Índice | Herramientas GPR gratuitas | `/herramientas/` | `herramientas/index.html` | PUBLICADO | Ninguna bloqueante |
| Herramientas | Herramienta | Calculadora de viabilidad GPR | `/herramientas/calculadora-profundidad/` | `herramientas/calculadora-profundidad/index.html` | PUBLICADO - REQUIERE DECISIÓN | ADR-006 aprobado conceptualmente. Rename a `/herramientas/calculadora-viabilidad-gpr/` con redirect 301. No ejecutar hasta confirmación explícita de Gabriel en tarea separada |
| Herramientas | Herramienta | ¿Necesito un estudio GPR? (árbol de decisión) | `/herramientas/necesito-gpr/` | `herramientas/necesito-gpr/index.html` | PUBLICADO | Ninguna bloqueante |
| Herramientas | Herramienta | Selector de antena georradar | `/herramientas/selector-antena/` | `herramientas/selector-antena/index.html` | PUBLICADO - REQUIERE AUDITORÍA | Verificar lenguaje no absoluto; confirmar que disclaimer es suficiente; verificar enlaces cruzados con artículo de frecuencia |

---

### Mentoría

| Vertical | Tipo | Nombre | URL | Archivo | Estado | Acción pendiente |
|----------|------|--------|-----|---------|--------|-----------------|
| Mentoría | Servicio | Mentoría GPR 1:1 | `/mentoria/` | `mentoria/index.html` | PUBLICADO | Ninguna bloqueante |

---

## Inventario de contenido en backlog

*Sin página propia publicada. Verificado contra árbol real.*

### Minería — casos sin página propia

| Nombre | Estado | Notas |
|--------|--------|-------|
| Codelco División Andina | BACKLOG | Primer semi-caso de minería a desarrollar. Patrón mínimo definido en BACKLOG.md. No crear sin material documentado de Gabriel. |
| BHP | PENDIENTE MATERIAL DOCUMENTADO | Definir si tiene mejor documentación disponible que SQM antes de elegir. Mantener como card verificada. |
| SQM | PENDIENTE MATERIAL DOCUMENTADO | Alternativa a BHP. Definir cuál tiene mejor documentación. Mantener como card verificada. |
| Centinela | PENDIENTE MATERIAL DOCUMENTADO | Espera detrás de SQM/BHP. |
| Albemarle | PENDIENTE MATERIAL DOCUMENTADO | Espera detrás de SQM/BHP. |
| Collahuasi | PENDIENTE MATERIAL DOCUMENTADO | Espera detrás de SQM/BHP. |

---

### Construcción — contenido en backlog o descartado

| Nombre | Estado | Notas |
|--------|--------|-------|
| Costanera Puerto Montt | BACKLOG | 700 metros de paseo costero, detección de oquedades antes de intervenir (2018). Segunda opción de construcción. URL propuesta: `/construccion/casos/costanera-puerto-montt/`. No crear sin material documentado. |
| Aeródromo Tobalaba | DESCARTADO TEMPORALMENTE | Gabriel no dispone de información suficiente. No usar como referencia ni en artículos hasta tener material documentado. |
| Artículo GPR en pavimentos | BACKLOG | `content/research/themes/theme-gpr-pavimentos.md` en estado LISTO PARA ARTÍCULO BASE. Candidato: "Qué puede detectar el georradar en una estructura de pavimento". No publicar sin dos enlaces entrantes garantizados. |

---

### Forense — contenido en backlog

| Nombre | Estado | Notas |
|--------|--------|-------|
| Cementerio Río Chico, Puerto Montt | BACKLOG | Solo card. URL propuesta: `/forense/casos/cementerio-rio-chico/`. Tono: sobrio, técnico, pericial. No crear hasta tener contexto del encargo, objetivo, condiciones del sitio, metodología y hallazgos documentados. |

---

## Documentos internos con estado editorial

| Tipo | Nombre | Ruta | Estado | Acción pendiente |
|------|--------|------|--------|-----------------|
| Benchmark | Benchmark GPR en español | `docs/QUALITY_BENCHMARK_GPR_ES.md` | PRELIMINAR VALIDADO PARCIALMENTE | Ejecutar acciones derivadas; certificación de Gabriel para pasar activos a MADURO. No habilita claim "mejor recurso GPR en español". |
| ADR | ADR-006 rename calculadora-profundidad | `docs/adr/ADR-006-rename-calculadora-profundidad.md` | APROBADO CONCEPTUALMENTE / EJECUCIÓN PENDIENTE | Requiere confirmación explícita de Gabriel. Ejecutar en rama separada con redirect 301. No modificar URL en main. |
| Registro de caso | Aeródromo Chacalluta | `content/research/cases/case-construccion-aeropuerto-chacalluta.md` | AUDITORÍA APLICADA PARCIALMENTE | Ver deuda pendiente en el archivo: evaluar title con "GPR" explícito. |
| Research theme | GPR en pavimentos | `content/research/themes/theme-gpr-pavimentos.md` | LISTO PARA ARTÍCULO BASE | Redactar artículo base. Chacalluta como referencia principal. |

---

## Contradicciones detectadas y resueltas

| Tema | Contradicción | Cuándo se detectó | Resolución |
|------|---------------|-------------------|------------|
| Chacalluta | Aparecía registrado como "PENDIENTE MATERIAL DOCUMENTADO" y "semi-caso candidato" en BACKLOG.md y en `content/research/cases/`, cuando la página lleva publicada con caso real completo. | 2026-07-06 | Corregido en BACKLOG.md y en el archivo de caso. Estado actualizado a PUBLICADO - REQUIERE AUDITORÍA. Auditoría parcial aplicada: footer, enlace a artículo de frecuencia, revisión de claims técnicos y comerciales. |
| Aeródromo Tobalaba | Aparecía en BACKLOG.md como "caso sin página propia" junto a Costanera Puerto Montt, sin indicar que está descartado temporalmente. | 2026-07-05 | Registrado como DESCARTADO TEMPORALMENTE. No usar hasta que haya material documentado. |

---

## Reglas de operación para agentes

1. Antes de crear una página, revisar este registro y el árbol real de archivos del proyecto. No asumir que algo no existe solo porque no aparece en backlog.

2. Antes de cambiar el estado de un contenido, verificar si existe página publicada, card, borrador o solo backlog.

3. Si existe contradicción entre un documento de backlog y un archivo publicado, prevalece el archivo publicado. Actualizar este registro y el documento en contradicción.

4. No declarar contenido como MADURO sin evidencia, auditoría aplicada y certificación explícita de Gabriel.

5. No crear casos reales completos sin material documentado suficiente. El patrón mínimo es: contexto, objetivo técnico, condición de terreno, método aplicado, tipo de resultado, límites de interpretación y valor para la operación.

6. No usar claims absolutos en ningún texto publicado: "el mejor", "garantizado", "detección segura", "precisión total", "certeza", "ubicación exacta sin margen".

7. No tratar páginas publicadas como intake pendiente.

8. Los ADR que afecten URL o SEO deben ejecutarse en rama separada y con redirect documentado. No modificar URLs en main sin ADR aprobado y ejecutado en rama separada.

9. Este registro debe actualizarse cada vez que se publique una página, se cambie el estado de un activo o se resuelva una contradicción.

---

## Próximas auditorías recomendadas

Orden de prioridad definido al 2026-07-06:

1. **Caso Chacalluta** — auditoría editorial en curso. Pendiente: decisión sobre si el title incorpora "GPR". Baja urgencia.

2. **`/construccion/`** — keyword cambiada a "prospección GPR en obras civiles" el 2026-07-05. Monitorear Search Console en 4-6 semanas para verificar impacto SEO.

3. **Selector de antena georradar** — publicado con disclaimer actualizado. Verificar que el lenguaje no sugiera que el usuario puede decidir la antena final sin criterio técnico.

4. **ADR-006** — aprobado conceptualmente. Ejecutar en rama separada cuando Gabriel lo confirme. No tocar URL en main hasta entonces.

5. **Artículo de frecuencia de antena** — estado OPTIMIZACIÓN AVANZADA. Reforzar tabla por rango, advertencias por conductividad y ejemplos por objetivo antes de evaluar MADURO.

6. **Glosario GPR** — estado OPTIMIZACIÓN. Agregar ejemplos de terreno y relación con decisiones reales de obra.

7. **Biblioteca landing** — mejorar rutas de lectura por perfil de usuario y coherencia sistémica.

8. **Casos de minería** — definir cuáles tienen material para semi-caso (Codelco División Andina primero; luego SQM o BHP según documentación disponible).

9. **Cementerio Río Chico** — no crear hasta tener evidencia suficiente. Registrado en backlog.
