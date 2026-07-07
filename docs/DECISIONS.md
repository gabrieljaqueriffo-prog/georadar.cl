# DECISIONS.md

> Registro de decisiones de producto: elecciones puntuales tomadas por el
> cliente o derivadas de su criterio, que no constituyen una decisión
> arquitectónica (eso vive en `/docs/adr/`) pero que un agente o colaborador
> futuro necesita conocer antes de tocar el área afectada. Ver `CLAUDE.md §1`
> (Capa 4 — Planificación).
>
> Diferencia con `/docs/adr/`: un ADR documenta una decisión de tecnología,
> arquitectura o canal — difícil de revertir, con alternativas evaluadas
> formalmente (`DECISION_FRAMEWORK.md` Bloque 0). Una entrada aquí documenta
> una decisión de producto o contenido — más simple, pero igual de necesaria
> de registrar para no repetir la pregunta ni revertirla sin saberlo.

---

## 2026-06-30 — Mantener "+220" como cifra pública de proyectos

**Contexto:** el cliente entregó `docs/REGISTRO_EXPERIENCIA.md`, un registro
interno verificado de 252 proyectos (2011-2025). El sitio publicado usa
"+220" en múltiples páginas.

**Decisión:** se mantiene "+220" sin actualizar a "252+" por ahora.

**Quién decidió:** el cliente, explícitamente, al ser consultado.

**Implicancia:** cualquier cambio futuro de esta cifra requiere nueva
confirmación explícita del cliente — no se actualiza automáticamente aunque
el registro interno crezca.

---

## 2026-06-30 — Autorización de mención pública de todos los casos, incluyendo forenses/DDHH

**Contexto:** `docs/REGISTRO_EXPERIENCIA.md` incluye casos sensibles de
derechos humanos (CIP San Joaquín, Cerro Chena, Sitio Irán 3037 "Venda
Sexy", Cementerio Río Chico, causas con ROL judicial).

**Decisión:** todos los casos y clientes listados en el registro, sin
excepción, pueden nombrarse públicamente en el sitio.

**Quién decidió:** el cliente, explícitamente, al ser consultado junto con
la decisión de la cifra "+220".

**Implicancia:** habilitó la construcción de la página de caso
`/forense/casos/cip-san-joaquin-cerro-chena/` y la actualización de cards en
`/forense/`, `/mineria/` y `/utilities/` con clientes y casos reales — pero
no exime de aplicar el tratamiento editorial sensible que exige cada caso
(ver esa página y `BACKLOG.md` para el criterio aplicado caso por caso).

---

## 2026-06-30 — Orden de secciones de industria en la home y clientes destacados

**Contexto:** la home presenta las industrias atendidas (minería, forense,
utilities) y una franja de logos de clientes.

**Decisión:** orden minería → forense → utilities. Franja de clientes
ampliada de 8 a 12 logos, agregando Minera Collahuasi, Minera Los Pelambres,
Aeropuerto AMB y Finning CAT como clientes destacados adicionales.

**Quién decidió:** propuesto por el agente con base en volumen de evidencia
del registro, confirmado por el cliente ("Ok vamos así").

---

## 2026-06-30 — Principio editorial: criterio sobre volumen (dónde vive)

**Contexto:** el cliente propuso una reflexión estratégica sobre que ATLAS
debía "pasar de medir éxito por volumen a medir éxito por posición mental".
El agente propuso inicialmente incorporarla en `PROJECT_VISION.md` o
`NORTH_STAR.md`.

**Decisión:** el cliente rechazó esa ubicación — son documentos que
responden "qué es el producto" y "cómo se decide entre alternativas", no
estrategia competitiva de posicionamiento. La idea correcta ("ATLAS no
busca ser la mayor biblioteca, busca ser la fuente de mayor criterio") se
incorporó como nueva sección "Principio editorial" en `CONTENT_STRATEGY.md`,
justo después de "Tesis central" y antes del Canon.

**Quién decidió:** el cliente, con razonamiento explícito sobre la
jerarquía documental del GPOS.

**Implicancia:** este es ahora el filtro editorial vigente para decidir qué
contenido se publica. Cualquier propuesta futura de agregar contenido
"porque suma volumen" debe poder justificarse también en términos de
criterio desarrollado en el lector, no solo de cantidad.

---

## Cómo usar este archivo

- Una entrada por decisión de producto/contenido relevante, no por cada
  cambio menor (eso vive en `CHANGELOG.md`).
- Incluir: contexto, la decisión tomada, quién decidió, e implicancia para
  trabajo futuro.
- Si la decisión es sobre tecnología, arquitectura o un canal de conversión
  — y es difícil de revertir — documentarla como ADR en `/docs/adr/` en vez
  de (o además de) aquí.
