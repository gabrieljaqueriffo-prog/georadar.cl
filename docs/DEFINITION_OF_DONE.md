# DEFINITION_OF_DONE.md

> **Propósito:** Define cuándo algo está realmente terminado en Georadar.
> "Funciona" no es suficiente. "Se ve bien" no es suficiente. Un activo está
> terminado cuando cumple todos los criterios de su tipo.
>
> Este documento separa tres conceptos que deben mantenerse distintos:
> **criterios de calidad** (qué debe cumplir), **gates de estado** (cuándo
> puede avanzar en el ciclo de vida) y **deuda** (qué queda pendiente y
> cómo se registra). Mezclarlos produce ambigüedad en la ejecución.
>
> Se construye sobre `CLAUDE.md §8`, `ARCHITECTURE.md §4` (ciclo de vida) y
> `CONTENT_STRATEGY.md §5` (modelo de maduración).

---

## La pregunta central

Antes de declarar cualquier cosa como "terminada", una pregunta:

> **¿Puede este activo cumplir su propósito sin ayuda adicional, sin generar
> deuda oculta y sin romper nada que ya funciona?**

Si la respuesta es sí en los tres frentes: está terminado.
Si no en cualquiera: falta trabajo.

---

## Criterios universales

Aplican a **todo** lo que se crea o modifica, sin excepción de tipo.

- [ ] Pasa la pregunta única de `NORTH_STAR.md`: ¿ayuda a alguien a comprender mejor el subsuelo y a confiar más en Georadar?
- [ ] Pasa la triple justificación (`DECISION_FRAMEWORK.md`): estratégica, arquitectónica y operativa.
- [ ] No viola ninguna regla absoluta de `CLAUDE.md §10`.
- [ ] No introduce anti-patrones de `DESIGN_SYSTEM.md §4`.
- [ ] No elimina ni degrada activos existentes sin aprobación.
- [ ] No genera deuda técnica o editorial sin registrarla en `BACKLOG.md`.
- [ ] No rompe la estructura SEO existente.

---

## Por tipo de activo

### Activo de contenido (artículo, caso, glosario, guía)

**Estructura y contenido**
- [ ] Tipo de activo identificado (`CONTENT_STRATEGY.md §4`).
- [ ] Patrón de módulo aplicado (`ARCHITECTURE.md §7`).
- [ ] Ubicado en el Knowledge Map (`CONTENT_STRATEGY.md §2`).
- [ ] Nivel de pirámide de evidencia asignado (`CONTENT_STRATEGY.md §3`).
- [ ] Si es un activo marcado como **Canon** en `CONTENT_STRATEGY.md` (Guía de interpretación de radargramas, Calculadora de profundidad, Glosario GPR, casos por sector, Guía de selección de antena): aplicar criterios adicionales de la sección Canon de este documento.

**Enlazado**
- [ ] Al menos dos enlaces entrantes desde activos existentes y publicados.
- [ ] Al menos un enlace saliente hacia activo estratégico existente y publicado.
- [ ] **Los enlaces deben existir físicamente en el repositorio en el momento de pasar a PUBLICADO. Los enlaces planificados o "por crear" no cuentan para este criterio.**
- [ ] Los enlaces apuntan a activos reales, no a páginas por crear.
- [ ] La matriz de relaciones (`ARCHITECTURE.md §3`) fue consultada.

**SEO y metadatos**
- [ ] H1 único, descriptivo y alineado con intención de búsqueda.
- [ ] H2–H3 en jerarquía semántica correcta (sin saltos de nivel).
- [ ] Meta title (máx. 60 caracteres) y meta description (máx. 160 caracteres).
- [ ] Open Graph: título, descripción e imagen definidos.
- [ ] URL en kebab-case, descriptiva, sin parámetros innecesarios.
- [ ] Canonical configurado correctamente.
- [ ] Términos técnicos en inglés indicados entre paréntesis en primera aparición.

**Calidad editorial**
- [ ] Registro: tú + español neutro LatAm.
- [ ] Voz coherente con personalidad de marca (`PROJECT_VISION.md §4`).
- [ ] No contiene afirmaciones sin evidencia o sin enlace de respaldo.
- [ ] Si tiene imágenes o radargramas: cumplen `DESIGN_SYSTEM.md §6`.
- [ ] Revisado para deuda de contenido: ¿qué necesitará en su próxima evolución?

**Estado en BACKLOG**
- [ ] Estado asignado: PUBLICADO.
- [ ] Próxima acción de maduración anotada (qué lo llevaría a ENLAZADO o EXPANDIDO).

---

### Radargrama comentado

Además de los criterios de activo de contenido:

- [ ] Escala de profundidad visible e indicada.
- [ ] Frecuencia de antena y medio de propagación indicados.
- [ ] Anotaciones distinguibles del dato original (color, grosor, tipografía consistente).
- [ ] Estilo de anotación idéntico al de todos los radargramas publicados.
- [ ] Versión sin anotación disponible o indicada si existe.
- [ ] Leyenda o enlace al glosario para términos técnicos visibles.
- [ ] Interpretación escrita adjunta (no solo la imagen).

---

### Caso real

Además de los criterios de activo de contenido:

- [ ] Estructura completa del patrón: contexto → método → radargrama → interpretación → resultado.
- [ ] Sector y tipo de problema etiquetados (taxonomías de `ARCHITECTURE.md §8`).
- [ ] Resultado expresa qué decisión permitió tomar (no solo qué se encontró).
- [ ] Enlaza al servicio correspondiente.
- [ ] Enlaza a artículos técnicos relacionados.
- [ ] CTA presente al final: "¿Tienes un proyecto similar?"
- [ ] Nivel de pirámide: Nivel 4 o 5 (si no llega a Nivel 4, no es un caso real).

---

### Herramienta / Calculadora

Además de los criterios universales:

**Funcionalidad**
- [ ] Entrega resultado correcto en todos los rangos válidos de input.
- [ ] Maneja inputs inválidos con mensaje claro (no con `alert()`).
- [ ] El resultado incluye unidades y se formatea con separador de miles.
- [ ] El resultado aparece con transición suave (fade-in 200ms).
- [ ] Sin acceso restringido: la herramienta es libre de usar.

**Comprensión**
- [ ] Explicación del concepto detrás de la herramienta (enlaza a artículo completo).
- [ ] Interpretación del resultado: qué significa el número obtenido.
- [ ] Limitaciones y supuestos indicados explícitamente.
- [ ] Herramientas relacionadas enlazadas (crecimiento compuesto).

**Diseño y experiencia**
- [ ] Inputs con `type` correcto (`number`, `tel`, `email` según corresponda).
- [ ] Labels siempre visibles (no solo placeholder).
- [ ] Funciona completamente en móvil con una mano.
- [ ] Toque mínimo de 44×44px en todos los controles.
- [ ] Cumple `DESIGN_SYSTEM.md §8` (lenguaje de interacción de calculadoras).

**Integración**
- [ ] Al menos dos enlaces entrantes desde artículos de biblioteca.
- [ ] Al menos un enlace saliente hacia caso real o artículo relacionado.
- [ ] Cumple regla del segundo uso: componente reutilizable para calculadoras futuras.
- [ ] Cumple regla del tercer activo: ¿qué dos activos futuros habilita?

---

### Componente de interfaz

- [ ] Al menos dos usos previstos identificados (regla del segundo uso).
- [ ] Nivel en la taxonomía asignado: Foundation / Token / Primitive / Component / Pattern / Template.
- [ ] Nomenclatura: `[categoria]-[nombre]` en kebab-case (`ARCHITECTURE.md §6`).
- [ ] Documentado: propósito, props/parámetros y usos en comentario o archivo adjunto.
- [ ] Responsive: verificado en 320px, 768px y 1280px mínimo.
- [ ] Accesibilidad: contraste ≥ 4.5:1, focus visible, ARIA cuando corresponde.
- [ ] Rendimiento: sin CSS o JS que no sea necesario para este componente.
- [ ] Estados completos: rest, hover, focus, active, disabled, loading, error, success (los que apliquen).
- [ ] Duraciones de animación dentro de los rangos de `DESIGN_SYSTEM.md §8.2`.
- [ ] `prefers-reduced-motion` respetado si tiene animaciones.
- [ ] No viola ningún anti-patrón de `DESIGN_SYSTEM.md §4`.

---

### Página de servicio por sector

Además de los criterios de activo de contenido:

- [ ] Estructura del patrón aplicada (`ARCHITECTURE.md §7`): problema → GPR como respuesta → qué decide el cliente → casos → FAQ → CTA.
- [ ] Empieza con el problema del sector, no con "lo que hacemos".
- [ ] Al menos un caso real del sector enlazado.
- [ ] CTA claro: WhatsApp o formulario de cotización.
- [ ] FAQ responde objeciones reales del sector.
- [ ] Metadatos optimizados para intención comercial del sector.

---

## Gates de estado

Un activo en Georadar avanza por estados definidos (`ARCHITECTURE.md §4`).
Este documento gobierna el gate entre REVISIÓN y PUBLICADO, que es el único
gate que requiere verificación formal de calidad.

```
DISEÑO ──► REVISIÓN ──► PUBLICADO
                │
                └── Gate: completar el checklist
                    de criterios universales +
                    criterios del tipo de activo.
                    Sin excepción.
```

**Estado vs. criterio — distinción crítica:**
- Un activo puede cumplir todos los criterios de calidad y aun así estar en
  estado REVISIÓN (aún no ha sido publicado).
- Un activo no puede estar en estado PUBLICADO si no ha pasado el gate.
- El estado es una posición en el ciclo de vida; el criterio es una condición
  de calidad. Son independientes y deben evaluarse por separado.

**Pasar el gate sin completar el checklist es introducir deuda intencionada.**
Registrar en `BACKLOG.md` como deuda de alta prioridad y revertir el estado
a REVISIÓN.

---

## Jerarquía de desempate

Cuando dos criterios entran en conflicto y no pueden cumplirse simultáneamente
(por recursos, tiempo o dependencias externas), se prioriza en este orden:

1. **Integridad del sistema** — no romper el GPOS, no generar deuda oculta.
2. **Evidencia** — sobre estructura. Un activo con evidencia débil pero bien
   estructurado es peor que uno con evidencia fuerte pero estructura mejorable.
3. **Estructura** — sobre SEO. Los enlaces y patrones correctos son más
   duraderos que una optimización de metadatos.
4. **SEO** — sobre estética. Un título preciso pero menos elegante gana sobre
   uno bonito pero menos preciso.

**Aplicación práctica:**
- Radargrama con evidencia sólida pero sin dos enlaces entrantes aún → no
  se publica. Los enlaces son Criterio 3 (estructura); la ausencia bloquea.
- Artículo con buena estructura pero evidencia débil (Nivel 1–2 en pirámide) →
  se puede publicar si el nivel declarado es correcto y la deuda está registrada.
- Componente accesible pero con animación que no respeta `prefers-reduced-motion`
  → no se publica. Integridad del sistema (criterio 1) bloquea estética.

---

## Canon: criterios adicionales

Los activos marcados como **Canon** en `CONTENT_STRATEGY.md` son los nodos
irremplazables del sistema. Sus nombres son: Guía de interpretación de
radargramas, Calculadora de profundidad GPR, Glosario GPR, casos reales por
sector (minería, utilities, arqueología) y Guía de selección de antena.

Además de todos los criterios de su tipo, deben cumplir:

- [ ] Revisión adicional de profundidad técnica: ¿es el mejor recurso disponible en español sobre este tema?
- [ ] Al menos cinco enlaces entrantes desde activos existentes (no dos).
- [ ] Contenido en estado OPTIMIZACIÓN antes de ser declarado MADURO (corregido 2026-06-30: alineado con los estados reales de `ARCHITECTURE.md §4`, que no define un estado "EXPANDIDO").
- [ ] Plan de actualización anual anotado: quién revisa, cuándo y qué criterios de desactualización.
- [ ] Nunca se archiva sin un reemplazo planificado y aprobado.

---

## Deuda de contenido: señales de alerta

Al revisar cualquier activo, detectar y registrar si existe alguna de estas condiciones:

| Condición | Tipo de deuda | Acción |
|-----------|--------------|--------|
| Sin caso relacionado | Editorial | Añadir a BACKLOG |
| Sin herramienta relacionada | Editorial | Añadir a BACKLOG |
| Sin enlaces entrantes | Estructura | Añadir a BACKLOG (alta prioridad) |
| Sin interpretación (radargrama) | Editorial | Bloquea publicación |
| Más de 12 meses sin revisión | Temporal | Añadir a BACKLOG |
| Servicio sin evidencia | Editorial | Añadir a BACKLOG (alta prioridad) |
| Glosario sin enlaces salientes | Estructura | Añadir a BACKLOG |

---

## En una línea

> Terminado no significa que funciona. Significa que cumple su propósito,
> está conectado al sistema y no deja deuda sin registrar.
