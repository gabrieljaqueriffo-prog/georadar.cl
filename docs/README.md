# Georadar.cl — GPOS

> **Georadar no existe para mostrar lo que hacemos. Existe para convertirse
> en el lugar donde las personas aprenden a comprender el subsuelo antes de
> intervenirlo. Si logramos eso, los servicios y las mentorías serán una
> consecuencia natural de la confianza que habremos construido.**

Este documento es el punto de entrada al sistema. No define reglas ni
comportamiento: apunta hacia donde viven. Leerlo primero; después seguir el
orden de lectura indicado más abajo.

**Límite de este documento:** README estructura la navegación y el modelo mental
del sistema. No contiene reglas operativas ni lógica de ejecución del agente.

---

## Qué es el GPOS

**GPOS** (Georadar Product Operating System) es el marco de gobernanza de
Georadar.cl. Permite que cualquier colaborador —humano o IA— entienda cómo
pensar, decidir y construir el producto sin depender de instrucciones
puntuales ni de memoria de sesión.

Lema interno:
> *No construimos páginas. Construimos activos digitales que generan
> conocimiento, confianza y valor acumulativo.*

---

## El sistema en capas

```
╔══════════════════════════════════════════════════════╗
║  CAPA 1 — GOBERNANZA                                 ║
║  Por qué existe el producto y cómo se decide         ║
║                                                      ║
║  PROJECT_VISION  ·  NORTH_STAR  ·  DECISION_FRAMEWORK║
╚══════════════════════════╤═══════════════════════════╝
                           │
╔══════════════════════════╧═══════════════════════════╗
║  CAPA 2 — ESTRUCTURA                                 ║
║  Cómo se organiza, se expresa y crece                ║
║                                                      ║
║  ARCHITECTURE  ·  DESIGN_SYSTEM  ·  CONTENT_STRATEGY ║
╚══════════════════════════╤═══════════════════════════╝
                           │
╔══════════════════════════╧═══════════════════════════╗
║  CAPA 3 — EJECUCIÓN                                  ║
║  Cómo opera el agente y qué significa "terminado"    ║
║                                                      ║
║  CLAUDE  ·  DEFINITION_OF_DONE                       ║
╚══════════════════════════╤═══════════════════════════╝
                           │
╔══════════════════════════╧═══════════════════════════╗
║  CAPA 4 — PLANIFICACIÓN                              ║
║  Qué se construye, cuándo y qué ha cambiado          ║
║                                                      ║
║  ROADMAP  ·  BACKLOG  ·  DECISIONS  ·  CHANGELOG     ║
╚══════════════════════════╤═══════════════════════════╝
                           │
                           ▼
                    IMPLEMENTACIÓN
                           │
                           ▼
                  PRODUCTO PUBLICADO
                           │
                           ▼
             DATOS REALES + APRENDIZAJE
                           │
                           ▼
                    NUEVA ITERACIÓN
```

→ Reglas de precedencia entre capas y resolución de conflictos: `CLAUDE.md §1`.

> El flujo es lógico, no secuencial. Los estados pueden coexistir y
> retroalimentarse: datos reales pueden reabrir decisiones de arquitectura
> o contenido sin completar un ciclo lineal.

---

## Los documentos del GPOS

| Documento | Responsabilidad primaria |
|-----------|----------------------|
| `PROJECT_VISION.md` | Qué es Georadar, para qué existe y hacia dónde va |
| `NORTH_STAR.md` | La pregunta que resuelve el 80% de las decisiones |
| `DECISION_FRAMEWORK.md` | Los principios que aplican al construir |
| `ARCHITECTURE.md` | Cómo se organiza el sistema físicamente |
| `DESIGN_SYSTEM.md` | Cómo se ve, se siente y se comporta el producto |
| `CONTENT_STRATEGY.md` | Cómo crece la autoridad y el conocimiento |
| `CLAUDE.md` | Cómo opera el agente dentro del sistema |
| `DEFINITION_OF_DONE.md` | Cuándo algo está realmente terminado |
| `ROADMAP.md` | Qué se construye y en qué orden |
| `BACKLOG.md` | Qué está pendiente y en qué estado |
| `DECISIONS.md` | Registro de decisiones de producto |
| `CHANGELOG.md` | Qué ha cambiado y cuándo |
| `/docs/adr/` | Por qué se tomaron las decisiones arquitectónicas |

---

## Orden de lectura

### Lectura completa (colaborador nuevo)

Antes de tocar cualquier archivo del repositorio. **Nota:** el orden de lectura
refleja progresión cognitiva, no jerarquía de autoridad. La autoridad entre
documentos la define el sistema de capas, no este orden.

1. `README.md` — este documento.
2. `PROJECT_VISION.md` — el porqué. Debe internalizarse.
3. `NORTH_STAR.md` — el criterio de decisión.
4. `CLAUDE.md` — el protocolo de operación del agente.
5. `ARCHITECTURE.md` — la estructura física del producto.
6. `DECISION_FRAMEWORK.md` — los principios de construcción.
7. `DESIGN_SYSTEM.md` — el lenguaje visual y de interacción.
8. `CONTENT_STRATEGY.md` — el modelo de crecimiento editorial.
9. `DEFINITION_OF_DONE.md` — cuándo algo está terminado.

Solo después consultar `BACKLOG.md` y `ROADMAP.md`.

### Lectura mínima (si el tiempo es limitado)

1. `PROJECT_VISION.md`
2. `NORTH_STAR.md`
3. `CLAUDE.md`

Con estos tres se entiende el sistema. Los demás lo detallan.

### En ejecución (runtime)

Cuando Claude Code opera en el repositorio, el documento de referencia
primaria es `CLAUDE.md`. Contiene el protocolo de inicio de tarea, los
criterios de cuándo preguntar vs ejecutar, y las reglas absolutas del agente.

---

*La mayor ventaja de Georadar no será el código. Será la coherencia con la
que el producto evolucione durante los próximos años.*
