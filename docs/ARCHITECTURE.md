# ARCHITECTURE.md

> **Estado:** v1
> **Propósito:** El plano maestro de Georadar. Define cómo se organiza físicamente
> el producto: módulos, capacidades, estructura de archivos, taxonomías, convenciones
> de nombres y patrones de construcción. Responde *cómo se organiza*, no *por qué*
> (eso es `PROJECT_VISION.md`) ni *cómo se decide* (eso es `DECISION_FRAMEWORK.md`).
>
> Toda decisión estructural que modifique este documento debe registrarse en
> `/docs/adr/` antes de implementarse (ver Principio de Irreversibilidad en
> `DECISION_FRAMEWORK.md`, Bloque 0).

---

## 1. Arquitectura del producto

Georadar no es un conjunto de páginas. Es un sistema de cinco capacidades que se
alimentan mutuamente. Cada capacidad tiene un público primario, un objetivo y
una función dentro del ecosistema.

```
                        GEORADAR.CL
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
     SERVICIOS          CONOCIMIENTO        ACADEMIA
   (leads B2B)        (autoridad SEO)    (mentorías)
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                    ┌────────┴────────┐
                    │                 │
               HERRAMIENTAS      CASOS REALES
               (utilidad)        (credibilidad)
```

### 1.1 Capacidad: Servicios
- **Objetivo:** Captura de leads de alto valor.
- **Público primario:** Decisores de negocio (gerentes de proyecto, administradores de contrato).
- **Módulos:** Servicio por tipo + Servicio por sector industrial.
- **Flujo de entrada:** Desde casos reales, biblioteca técnica y herramientas.
- **Flujo de salida:** WhatsApp / formulario de cotización.

### 1.2 Capacidad: Conocimiento
- **Objetivo:** Autoridad temática y posicionamiento SEO.
- **Público primario:** Todos los perfiles que investigan GPR en español.
- **Módulos:** Biblioteca técnica + Glosario GPR + Radargramas comentados + Blog.
- **Flujo de entrada:** Búsqueda orgánica, enlaces internos desde herramientas y casos.
- **Flujo de salida:** Hacia servicios (decisores) y academia (profesionales).

### 1.3 Capacidad: Herramientas
- **Objetivo:** Utilidad directa que genera confianza y tráfico.
- **Público primario:** Ingenieros y técnicos.
- **Módulos:** Calculadoras + Comparador de antenas + Visualizador (futuro).
- **Flujo de entrada:** Desde biblioteca técnica y glosario.
- **Flujo de salida:** Hacia servicios y biblioteca (enriquecimiento mutuo).
- **Principio:** Las herramientas son libres. No se cobra acceso con fricción.

### 1.4 Capacidad: Casos Reales
- **Objetivo:** Prueba y credibilidad para decisores escépticos.
- **Público primario:** Decisores de negocio y sectores industriales.
- **Módulos:** Casos por sector + Casos por tipo de problema.
- **Flujo de entrada:** Proyectos ejecutados, radargramas propios.
- **Flujo de salida:** Hacia servicios (conversión) y biblioteca (contexto técnico).

### 1.5 Capacidad: Academia / Mentorías
- **Objetivo:** Formación especializada y venta de mentorías premium.
- **Público primario:** Profesionales independientes y estudiantes.
- **Módulos:** Mentoría 1:1 + Recursos descargables.
- **Modelo:** Premium especializado, inicio 1:1, escalado posterior.
- **Flujo de entrada:** Desde biblioteca técnica y herramientas (confianza previa).
- **Flujo de salida:** Formulario de contacto para mentoría.

### 1.6 Subcapacidad de soporte: Evidencia Técnica
- **Objetivo:** Incorporar literatura científica externa (papers, tesis, informes) como
  fuente de conocimiento sin republicar material protegido ni revelar criterio propietario.
- **Naturaleza:** Interna. No es una capacidad pública por sí misma. Es la capa de
  investigación que alimenta la Capacidad Conocimiento (§1.2) con fundamentos técnicos
  trazables y clasificados.
- **Módulos:** intake / papers / themes / synthesis (ver `content/research/`).
- **Flujo de entrada:** Papers, DOIs, tesis, informes, PDFs internos, notas de Gabriel.
- **Flujo de salida:** Síntesis originales → artículos de biblioteca, FAQ, mejoras de
  herramientas, términos de glosario, futura sección `/evidencia-tecnica/`.
- **Relación con Biblioteca técnica:** la Biblioteca publica; Evidencia Técnica investiga.
  Un artículo de biblioteca puede citar síntesis de Evidencia Técnica, pero Evidencia
  Técnica no genera contenido público directamente.
- **Relación con Casos Reales:** Evidencia Técnica puede contextualizar el método sin
  revelar razonamiento propietario. Un caso puede mencionar que condiciones de humedad
  afectan la señal "como también describe la literatura técnica", con cita, sin tutorial.
- **Relación con Herramientas:** síntesis de nivel 1-2 pueden alimentar advertencias,
  variables de entrada o explicaciones educativas en calculadoras.
- **Relación con BADR:** no hay integración técnica todavía. Las síntesis incluyen un
  campo de anotación de intención para cuando BADR esté operativo. Ver `ADR-005`.

---

## 2. Flujo de navegación y enlaces internos

El principio de crecimiento compuesto requiere que cada activo esté conectado.
Este es el mapa de relaciones esperadas:

```
Búsqueda orgánica
        │
        ▼
Biblioteca técnica / Glosario / Blog
        │
        ├──► Herramientas relacionadas
        │           │
        │           └──► Artículo que explica el concepto
        │
        ├──► Casos reales del sector
        │           │
        │           └──► Servicio correspondiente ──► CTA (WhatsApp / formulario)
        │
        └──► Academia / Mentorías (si el perfil es aprendizaje)
```

**Regla de enlazado interno:** Todo módulo nuevo debe cumplir dos condiciones
antes de publicarse:

1. **Al menos dos enlaces entrantes** desde activos existentes. Un módulo sin
   enlaces entrantes es una isla y viola el principio de crecimiento compuesto.
2. **Al menos un enlace saliente** hacia otro activo estratégico. Todo nodo
   entra inmediatamente a formar parte de la red, no solo la recibe.

```
Ejemplo de nodo bien conectado:
        Biblioteca ──►
                       Nuevo activo ──► Caso real ──► Servicio
        Herramienta ──►
```

Un módulo que no puede cumplir estas dos condiciones no está listo para publicarse.

---

## 3. Matriz de relaciones entre capacidades

Define qué puede enlazar hacia qué. Elimina la improvisación en el enlazado
interno y garantiza que cada nuevo activo sepa exactamente a qué red pertenece.

| Desde | Puede enlazar hacia |
|-------|-------------------|
| **Biblioteca técnica** | Herramientas, Casos reales, Servicios, Academia, Glosario |
| **Casos reales** | Biblioteca técnica, Servicios |
| **Herramientas** | Biblioteca técnica, Casos reales, Servicios |
| **Glosario** | Biblioteca técnica, Herramientas |
| **Academia / Mentorías** | Biblioteca técnica, Herramientas |
| **Servicios** | Casos reales, Biblioteca técnica *(solo como respaldo técnico)* |
| **Evidencia Técnica** | Biblioteca técnica, Herramientas, Glosario *(solo como input, nunca público directo)* |

**Lectura de la matriz:** los Servicios son destino principal de conversión, no
origen de exploración técnica. Un artículo de biblioteca puede enlazar a un
servicio; un servicio no debe enlazar a otro servicio como si fuera contenido.
El flujo de autoridad va siempre hacia la conversión, nunca al revés.

**Regla de cierre:** ninguna capacidad enlaza hacia sí misma como módulo
principal. Un artículo de biblioteca puede enlazar a *otro* artículo de biblioteca,
pero solo cuando aporta profundidad, no para rellenar.

---

## 4. Ciclo de vida de un activo

Todo activo en Georadar transita por estados definidos. El estado actual vive en
`BACKLOG.md` y convierte el backlog en un flujo de trabajo, no en una lista plana.

```
IDEA
  │  ← Capturada en BACKLOG con objetivo, capacidad asignada y enlazado posible
  ▼
INVESTIGACIÓN
  │  ← Contexto técnico, palabras clave, casos similares, enlaces definidos
  ▼
DISEÑO
  │  ← Estructura según patrón de módulo (sección 6), borrador de enlaces
  ▼
DESARROLLO
  │  ← Implementación según DESIGN_SYSTEM.md y CLAUDE.md
  ▼
REVISIÓN
  │  ← Checklist DEFINITION_OF_DONE: regla de activo mínimo, enlaces, calidad
  ▼
PUBLICADO
  │  ← En producción, enlazado, indexado
  ▼
OPTIMIZACIÓN
  │  ← Mejoras basadas en datos reales (tráfico, uso, feedback)
  ▼
MADURO
  │  ← Activo estable, alta autoridad, mantenimiento bajo
  ▼
ARCHIVADO
     ← Retirado sin eliminarse; puede resucitarse con historial intacto
```

**Regla de transición:** ningún activo salta de DISEÑO a PUBLICADO sin pasar
por REVISIÓN. Sin excepción.

**Prioridad de optimización:** los activos en estado OPTIMIZACIÓN tienen prioridad
sobre crear activos nuevos en IDEA. Mejorar un activo existente casi siempre
tiene mejor retorno (ver Bloque 4 de `DECISION_FRAMEWORK.md`).

---

## 5. Estructura de archivos

```
georadar.cl/
│
├── CLAUDE.md                        ← Instrucciones operativas para Claude Code
│
├── docs/
│   ├── PROJECT_VISION.md
│   ├── NORTH_STAR.md
│   ├── DECISION_FRAMEWORK.md
│   ├── ARCHITECTURE.md              ← Este archivo
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_STRATEGY.md
│   ├── ROADMAP.md
│   ├── BACKLOG.md
│   ├── DECISIONS.md                 ← Registro de decisiones de producto
│   ├── CHANGELOG.md
│   └── adr/                         ← Architecture Decision Records
│       ├── ADR-001-css-vanilla.md
│       ├── ADR-002-whatsapp-primario.md
│       └── ADR-003-mentorias-premium.md
│
├── components/
│   ├── layout/                      ← Estructura global (header, footer, nav)
│   ├── ui/                          ← Elementos base (botones, cards, badges)
│   ├── content/                     ← Bloques de contenido (artículo, caso, término)
│   ├── tools/                       ← Calculadoras, comparadores, visualizadores
│   └── conversion/                  ← CTAs, formularios, WhatsApp widget
│
├── content/
│   ├── services/                    ← Capacidad: Servicios
│   │   ├── by-type/                 ← Escaneo, interpretación, consultoría
│   │   └── by-sector/               ← Minería, utilities, construcción, arqueología
│   ├── library/                     ← Capacidad: Conocimiento
│   │   ├── articles/
│   │   ├── glossary/
│   │   └── radargramas/
│   ├── cases/                       ← Capacidad: Casos Reales
│   │   ├── by-sector/
│   │   └── by-problem/
│   ├── tools/                       ← Capacidad: Herramientas
│   │   └── calculators/
│   ├── mentorship/                  ← Capacidad: Academia
│   │   └── resources/
│   └── research/                    ← Subcapacidad: Evidencia Técnica (§1.6)
│       ├── intake/                  ← Entradas crudas: links, DOIs, abstracts, PDFs
│       │   └── templates/
│       ├── papers/                  ← Fichas editoriales limpias por fuente
│       │   └── templates/
│       ├── themes/                  ← Agrupaciones temáticas (humedad, cavidades…)
│       │   └── templates/
│       └── synthesis/               ← Síntesis originales listas para publicación
│           └── templates/
│
├── assets/
│   ├── images/
│   ├── radargramas/                 ← Activo estratégico: imágenes propias
│   └── icons/
│
└── pages/ (o equivalente según el stack)
    ├── index
    ├── services/
    ├── library/
    ├── cases/
    ├── tools/
    └── mentorship/
```

**Nota importante:** el árbol anterior es la arquitectura objetivo y el patrón conceptual del sistema. No representa la estructura física actual del repositorio. Las carpetas `components/`, `content/services/`, `content/library/`, `content/cases/`, `content/tools/`, `content/mentorship/` y `pages/` no existen en disco. Crear esas carpetas sin una tarea explícita aprobada es un error de ejecución.

### 5.1 Estructura actual del repositorio

Esta es la estructura física real a 2026-07-04:

```
georadar.cl/
│
├── CLAUDE.md
├── index.html                          ← Inicio
├── robots.txt
├── sitemap.xml
├── favicon.svg
├── favicon.png
│
├── docs/                               ← Documentos de gobernanza del GPOS
│   ├── PROJECT_VISION.md
│   ├── NORTH_STAR.md
│   ├── DECISION_FRAMEWORK.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_STRATEGY.md
│   ├── ROADMAP.md
│   ├── BACKLOG.md
│   ├── DECISIONS.md
│   ├── CHANGELOG.md
│   ├── KNOWLEDGE_MAP.json              ← Mapa de rutas para audit.js
│   └── adr/
│
├── content/
│   └── research/                       ← Evidencia Técnica (sistema ATLAS interno)
│       ├── intake/
│       ├── papers/
│       ├── themes/
│       └── synthesis/
│
├── assets/
│   ├── css/
│   │   └── shared.css
│   └── js/
│       └── main.js
│
├── scripts/
│   └── audit.js                        ← Pre-commit: valida links, glosario, KNOWLEDGE_MAP
│
├── mineria/
│   └── casos/socavones-espesador-t5/
├── utilities/
│   └── casos/accesos-metro-de-santiago/
├── construccion/
│   └── casos/prospeccion-aeropuerto-chacalluta/
├── forense/
│   ├── casos/cip-san-joaquin-cerro-chena/
│   └── casos/sitio-iran-3037-venda-sexy/
├── biblioteca/
│   ├── como-tomar-decisiones-antes-de-intervenir-el-subsuelo/
│   ├── como-influye-la-frecuencia-de-antena-gpr/
│   ├── que-hace-que-un-suelo-sea-dificil-para-el-gpr/
│   ├── por-que-la-profundidad-del-georradar-depende-del-terreno/
│   ├── que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/
│   └── como-afecta-la-humedad-al-georradar/
├── glosario/
├── herramientas/
│   ├── calculadora-profundidad/
│   ├── necesito-gpr/
│   └── selector-antena/
└── mentoria/
```

Cada ruta pública sirve un `index.html` estático. No hay build step ni generador de páginas. Todos los activos comparten `/assets/css/shared.css` y `/assets/js/main.js`.

---

## 6. Convenciones de nombres

**Principio:** Los nombres deben ser descriptivos, en español, en kebab-case para
archivos y carpetas. Nunca usar nombres genéricos que no digan nada
(`page1`, `section-new`, `componente-v2`).

### Archivos de contenido
```
[capacidad]-[descriptor]-[subtipo].md

casos-mineria-deteccion-cavidades.md
library-gpr-velocidad-propagacion.md
services-construccion-escaneo-losas.md
```

### Componentes
```
[categoria]-[nombre].html / .js / .css

ui-card-case.html
ui-card-tool.html
tools-calculator-depth.js
conversion-cta-whatsapp.html
content-radargram-annotated.html
```

### ADR (Architecture Decision Records)
```
ADR-[número]-[decisión-en-kebab].md

ADR-001-css-vanilla.md
ADR-002-whatsapp-primario.md
ADR-003-mentorias-premium-1a1.md
```

---

## 7. Patrones de módulos

Cada tipo de activo tiene un patrón estándar. Seguirlo garantiza consistencia,
reutilización y facilita el enlazado interno automático.

### Patrón: Artículo de biblioteca técnica
```
─ Título (H1) — término o concepto específico
─ Resumen en 2–3 líneas (qué aprenderás)
─ Contenido técnico estructurado (H2, H3)
─ Diagrama o imagen cuando aporte comprensión
─ Términos relacionados (→ Glosario)
─ Herramientas relacionadas (→ Calculadoras)
─ Casos reales que ilustran el concepto (→ Casos)
─ CTA contextual (no intrusivo): "¿Necesitas interpretación experta?"
```

### Patrón: Caso real
```
─ Título: orientado al problema y su resolución, no a la técnica
   (ej. "Cómo se detectó X sin Y", no solo "Detección de X en Y")
─ Contexto: se abre con el problema/riesgo desde la perspectiva del cliente,
   antes de nombrar al equipo o al método (el lector se reconoce en el riesgo
   antes de conocer la solución)
─ Método: cómo se aplicó GPR, qué antena, qué configuración
─ Qué buscábamos / qué encontramos (puente narrativo antes de la evidencia)
─ Evidencia del estudio (nunca "Radargramas" ni "Evidencia geofísica" como
   título de sección — ver más abajo por qué): como máximo uno o dos
   registros representativos, nunca una galería de cada escenario posible.
   Acompañados siempre de la frase de protección de criterio (ver abajo).
   Nunca el dataset completo, nunca agrupados como si fueran una lección de
   interpretación
─ Decisión que permitió tomar el estudio: qué se encontró, qué riesgo evitó,
   qué hizo posible decidir — no el razonamiento técnico que llevó ahí
─ Resultado
─ ¿Qué aprendimos? (3–4 bullets — convierte el caso en contenido educativo,
   nunca con lenguaje de interpretación: "la amplitud disminuye porque...",
   "descartamos X porque..." no se publican bajo ninguna circunstancia)
─ Sector y tipo de problema: componente `.case-tags` (chips `.case-tag`) en el
   header, justo bajo el eyebrow — no como texto plano dentro del eyebrow.
   Habilita una futura página índice de casos filtrable sin reescribir markup.
─ Enlaces a términos de glosario y artículos técnicos relacionados (→ Biblioteca)
─ CTA específico al síntoma del caso (no genérico)
```

**Principio rector:** la pregunta que valida cada sección no es "¿estoy
mostrando demasiado?" sino "¿qué está aprendiendo el cliente después de ver
esta página?". Si la respuesta es "a reconocer un patrón en un radargrama",
la sección está mal escrita — eso es exactamente lo que protege
`CONTENT_STRATEGY.md §1.5`. Si la respuesta es "qué decisión tomar y por qué
confiar en el equipo que la tomó", está alineada. El protagonista de un caso
real es la decisión, nunca el radargrama. Georadar.cl no escribe como
analista GPR que explica un hallazgo; escribe como arquitecto de decisiones
que demuestra que un problema real se resolvió bien.

**Sobre la evidencia visual:** el radargrama es evidencia de que el caso
ocurrió, no material didáctico. Se publica como máximo uno o dos registros
representativos (nunca una galería completa de "tipos de anomalía"), sin
referencias a perfil/grilla específicos ni descripciones de continuidad,
amplitud o reflexión — ese vocabulario es el razonamiento mismo, no la
evidencia. Cada imagen va acompañada de una variación de esta frase de
protección de criterio: *"La imagen corresponde a uno de los registros
obtenidos durante la campaña. La interpretación final no depende de un único
radargrama, sino del análisis conjunto de cientos de perfiles, las
condiciones del terreno y la experiencia del equipo."* Esa frase no es
decorativa: explica por qué el lector no puede ni debe intentar replicar la
lectura a partir de la imagen, y por eso protege el criterio profesional
mejor que cualquier omisión silenciosa.

### Patrón: Herramienta / Calculadora
```
─ Título: qué calcula y para qué sirve
─ Explicación breve del concepto detrás (→ Artículo completo)
─ Interfaz de la herramienta (inputs + resultado)
─ Interpretación del resultado (qué significa el número)
─ Casos de uso típicos
─ Limitaciones y supuestos
─ Herramientas relacionadas (crecimiento compuesto)
─ CTA opcional: recurso descargable con guía extendida
```

### Patrón: Término de glosario
```
─ Término (H1)
─ Definición concisa (1–2 oraciones)
─ Explicación técnica (cuándo importa, por qué)
─ Relación con otros términos del glosario
─ Artículos de biblioteca donde aparece
─ Herramientas donde es relevante
```

### Patrón: Página de servicio por sector
```
─ Sector (H1): el problema antes de mencionar el servicio
─ Por qué el GPR es la respuesta a ese problema en este sector
─ Qué información entrega (no "qué hacemos": qué pueden decidir)
─ Casos reales del sector (→ Casos)
─ Preguntas frecuentes del sector
─ CTA: WhatsApp / formulario de cotización
```

---

## 8. Taxonomías

Las taxonomías son decisiones de alta irreversibilidad. Cambiarlas afecta URLs,
enlaces internos y estructura SEO. Solo se modifican con ADR aprobado.

### Sectores industriales
- `mineria`
- `utilities`
- `construccion`
- `arqueologia`
- `carreteras` *(futuro)*
- `geotecnia` *(futuro)*

### Tipos de servicio
- `escaneo-gpr`
- `interpretacion-radargramas`
- `consultoria-tecnica`

### Tipos de problema (para casos reales)
- `deteccion-estructuras`
- `mapeo-servicios`
- `evaluacion-pavimentos`
- `deteccion-cavidades`
- `arqueologia-no-invasiva`

### Niveles de contenido técnico
- `introductorio` — para decisores y nuevos usuarios
- `tecnico` — para ingenieros y consultores
- `avanzado` — para especialistas y mentoría

---

## 9. Architecture Decision Records (ADR)

Cada decisión estructural importante se documenta en `/docs/adr/` con este formato:

```markdown
# ADR-[número]: [Título de la decisión]

**Estado:** Aprobada / En revisión / Supersedida
**Fecha:** YYYY-MM
**Contexto:** Por qué se necesitaba tomar esta decisión.
**Alternativas consideradas:**
  - Opción A: ...
  - Opción B: ...
**Decisión:** Qué se eligió y por qué.
**Consecuencias:** Qué implica esta decisión a futuro.
```

Los primeros ADR que deben crearse documentan decisiones ya tomadas:
- `ADR-001-css-vanilla.md` — no migrar a Tailwind, optimizar CSS existente.
- `ADR-002-whatsapp-primario.md` — WhatsApp como canal principal de contacto.
- `ADR-003-mentorias-premium-1a1.md` — modelo premium especializado, inicio 1:1.

---

## 10. Niveles de módulos y dependencias

No todos los módulos tienen el mismo nivel de criticidad. Esta clasificación define
qué puede depender de qué, y evita que un experimento termine condicionando la
arquitectura central.

```
NIVEL 1 — CORE (no pueden depender de niveles inferiores)
┌─────────────────────────────────────────────────────┐
│  Servicios  │  Biblioteca  │  Casos  │  Glosario    │
└─────────────────────────────────────────────────────┘
                        ↑
NIVEL 2 — MÓDULOS FUNCIONALES
┌─────────────────────────────────────────────────────┐
│  Calculadoras  │  Comparadores  │  Radargramas      │
│  comentados    │  Simuladores   │                   │
└─────────────────────────────────────────────────────┘
                        ↑
NIVEL 3 — EXPERIMENTOS Y ENRIQUECIMIENTOS
┌─────────────────────────────────────────────────────┐
│  Animaciones  │  Widgets  │  Prototipos  │  Ideas   │
└─────────────────────────────────────────────────────┘
```

**Regla de dependencias:** Un módulo de nivel inferior nunca debe convertirse
en dependencia crítica de uno superior. Si una calculadora (Nivel 2) falla o se
elimina, ningún artículo de la biblioteca (Nivel 1) debe quedar roto o incompleto.
Los módulos de nivel superior enlazan hacia los inferiores; nunca los requieren.

**Implicación práctica:** Los módulos de Nivel 1 deben funcionar y aportar valor
completo aunque todos los de Nivel 2 y 3 no existan. El Nivel 3 siempre es
opcional y experimental; puede retirarse sin impacto en el producto central.

---

## 11. Principios de arquitectura

Cinco reglas que gobiernan todas las decisiones de estructura:

1. **Separación de contenido y presentación.** El contenido vive en `/content/`;
   los componentes de presentación en `/components/`. Nunca mezclarlos.

2. **Un componente, una responsabilidad.** Los componentes son pequeños y hacen
   una sola cosa bien. Se componen para crear estructuras complejas.

3. **La taxonomía es la arquitectura.** Los sectores, tipos de servicio y tipos
   de problema no son etiquetas: son la estructura que permite que el producto
   crezca con coherencia. Se definen con cuidado y se cambian con ADR.

4. **Todo activo nuevo necesita dos enlaces entrantes.** Si no puede enlazarse
   desde dos activos existentes, no está listo para publicarse.

5. **Los patrones son la fuente de verdad.** Antes de construir un nuevo tipo
   de activo, revisar si existe un patrón en la sección 7. Si no existe, crear
   el patrón antes de crear el activo.

6. **Regla del activo mínimo.** Un activo solo puede publicarse si cumple
   las cuatro condiciones simultáneamente:
   - Aporta conocimiento, utilidad o credibilidad real.
   - Está enlazado (dos entrantes, uno saliente).
   - Tiene mantenimiento previsto (quién lo actualiza y cuándo).
   - Tiene un objetivo claro (qué acción o comprensión promueve).
   Si falla una sola condición, no se publica.

7. **Regla del segundo uso.** Antes de construir cualquier componente,
   pregunta: ¿dónde más se usará? Si la respuesta es "solo aquí", el componente
   no está bien diseñado todavía. Rediseñarlo hasta que tenga al menos un segundo
   uso previsto. Esta regla obliga a pensar como plataforma, no como proyecto.

---

> **GPOS** — Este documento es la capa de estructura del Georadar Product
> Operating System. Define el plano; `DESIGN_SYSTEM.md` define la identidad visual;
> `CLAUDE.md` traduce todo al comportamiento del agente.
