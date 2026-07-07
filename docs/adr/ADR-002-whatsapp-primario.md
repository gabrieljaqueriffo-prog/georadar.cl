# ADR-002 — WhatsApp como canal primario de conversión

**Estado:** Aprobado (documentado retroactivamente; la decisión ya está implementada en todo el sitio)
**Fecha de decisión original:** indeterminada (referenciada en `ARCHITECTURE.md §9` y en `ADR-003-mentorias-premium-1a1.md` antes de este ADR)
**Fecha de este documento:** 2026-06-30

## Contexto

Todos los CTA principales del sitio (hero, CTA final de cada página, footer,
páginas de caso) usan `https://wa.me/56975909836` como primer canal de
contacto, con `mailto:` y el sitio externo `georadarchile.cl` (formulario de
cotización) como alternativas secundarias. Ningún flujo del sitio exige
registro, correo o formulario para iniciar contacto. `ADR-003-mentorias-1a1`
ya referenciaba esta decisión como pendiente de su propio ADR. Este documento
cierra esa brecha.

## Decisión

**WhatsApp es el canal primario de conversión** en todo el sitio. Tres
razones:

1. **Coincide con el comportamiento real del público objetivo.** Decisores
   técnicos y de proyecto (gerentes de obra, fiscales, peritos, jefes de
   mantenimiento) priorizan respuesta rápida y conversación directa sobre
   completar un formulario y esperar un correo. WhatsApp reduce la fricción
   entre "tengo una pregunta" y "estoy hablando con un especialista" a un
   solo clic.
2. **Cumple el test de `NORTH_STAR.md`.** Ningún contenido ni herramienta del
   sitio exige correo o registro para usarse (ver `BACKLOG.md`, Calculadora
   de viabilidad GPR: "no pide correo ni registro para usarse"). Un
   formulario obligatorio como única vía de contacto habría introducido
   fricción comercial que el `NORTH_STAR.md` busca evitar.
3. **Consistencia con el modelo de mentoría 1:1** (`ADR-003`): la
   conversión vía WhatsApp o correo directo, sin formulario estructurado,
   ya es el patrón aprobado para `/mentoria/`; este ADR formaliza que el
   mismo patrón rige para todo el sitio, no solo para esa sección.

**Implementación concreta:**

- CTA primario en cada hero y cada CTA final: enlace `wa.me` con número fijo
  (+56 9 7590 9836) y mensaje pre-rellenado contextual al contenido de la
  página (`text=` query param), para que la conversación inicie con
  contexto sin que el usuario tenga que escribirlo.
- CTA secundario: enlace a `georadarchile.cl` (sitio oficial, formulario de
  cotización) para quien prefiera ese canal, nunca como único camino.
- Correo (`mailto:gabriel@georadarchile.cl`) disponible en el footer de
  todas las páginas, como tercera vía, sin promoción activa.
- Ningún popup, modal ni gate de contenido condiciona el acceso a
  información a cambio de datos de contacto.

## Consecuencias

- Cualquier cambio de canal primario (por ejemplo, introducir un formulario
  obligatorio, un chatbot, o reemplazar WhatsApp por otro canal) es una
  decisión de canal de contacto — requiere su propio ADR antes de
  implementarse (`CLAUDE.md §3`).
- El éxito de conversión se mide por conversaciones iniciadas vía WhatsApp,
  no por leads de formulario — cualquier métrica que priorice volumen de
  formularios sobre calidad de conversación sería una señal de
  desalineación con esta decisión.
- Dependencia operativa de que el número de WhatsApp (+56 9 7590 9836) esté
  activamente monitoreado; un canal primario sin respuesta oportuna
  contradice la razón de ser de la decisión.

## Alternativas consideradas

- **Formulario de contacto como canal primario** — descartado: añade
  fricción y retraso (espera de respuesta por correo) frente a un público
  que valora velocidad, y no aporta ninguna ventaja sobre WhatsApp para este
  tipo de consulta técnica.
- **Chat en vivo embebido en el sitio** — descartado: requiere
  infraestructura adicional (widget, backend de mensajería) sin beneficio
  claro sobre WhatsApp, que el público objetivo ya usa de forma nativa.
- **Solo correo, sin WhatsApp** — descartado: tiempo de respuesta percibido
  más lento, y no calza con cómo los clientes actuales de Geo Radar Chile ya
  contactan a la empresa en la práctica.
