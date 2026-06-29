# ADR-004 — Arquitectura de dos dominios: Geo Radar Chile y Georadar.cl (ATLAS)

**Estado:** Aprobado
**Fecha:** 2026-06-29

## Contexto

El ecosistema tiene dos dominios con propósitos distintos:

- **georadarchile.cl** (Geo Radar Chile) — sitio corporativo. Vende servicios,
  publica novedades, certificaciones y proyectos recientes.
- **georadar.cl** (ATLAS) — centro de conocimiento. Explica el subsuelo,
  publica casos reales en formato técnico, glosario, calculadoras y biblioteca.

Sin una regla explícita de gobernanza, ambos dominios corren el riesgo de
publicar el mismo contenido en formatos ligeramente distintos (p. ej. el
mismo caso real narrado dos veces), lo que Google interpreta como
contenido duplicado entre dominios y diluye la autoridad de ambos en lugar
de sumarla.

## Decisión

Se establece una arquitectura de dos niveles con responsabilidades separadas
y un único punto de cruce: el enlace contextual, nunca la duplicación.

**Geo Radar Chile = Empresa.** Responde "¿por qué contratar Geo Radar Chile?".
Vende servicios, publica noticias corporativas, novedades, certificaciones y
proyectos recientes. Habla como empresa: "Ejecutamos…", "Prospectamos…",
"Entregamos…", "Nuestro equipo…".

**Georadar.cl (ATLAS) = Centro de conocimiento.** Responde "¿cómo comprender
el problema antes de intervenir el subsuelo?". Explica el subsuelo, publica
herramientas, casos reales en profundidad, glosario, calculadoras y biblioteca
técnica. Habla como profesor: "¿Qué ocurre cuando…?", "¿Por qué…?", "¿Cómo
afecta…?", "¿Qué limitaciones tiene…?".

### Reglas absolutas de cruce

1. **ATLAS no replica contenido de Geo Radar Chile. Lo complementa.**
   Cada tema existe una sola vez en el ecosistema. Si ATLAS explica "¿qué es
   un radargrama?", esa explicación nunca se repite en Geo Radar Chile, y
   viceversa con "cómo usamos GPR en el proyecto X".
2. **Todo enlace entre ambos sitios debe aportar contexto nuevo al usuario,
   nunca duplicar información.** Un artículo corto en Geo Radar Chile sobre
   un proyecto cerrado puede cerrar con un enlace a "Ver caso técnico completo
   en Georadar.cl"; un caso técnico en ATLAS puede cerrar con un enlace a
   "¿Necesitas un estudio similar? → Geo Radar Chile". El enlace nunca repite
   lo que el usuario ya leyó.

### Circuito de valor esperado

```
Google → ATLAS → confianza → Geo Radar Chile → cotización
LinkedIn → Geo Radar Chile → caso publicado → ATLAS → más tiempo de permanencia
```

Los enlaces cruzados forman un grafo de conocimiento, no una red de enlaces
por SEO. Geo Radar Chile convierte la confianza en negocio; ATLAS construye
esa confianza mediante conocimiento y herramientas.

## Consecuencias

- Antes de publicar cualquier activo nuevo en ATLAS, se verifica que el tema
  no esté ya cubierto en Geo Radar Chile en el mismo nivel de detalle (y
  viceversa, cuando se coordine contenido del sitio corporativo).
- Los enlaces salientes hacia georadarchile.cl desde ATLAS deben ir acompañados
  de una pregunta de conversión explícita (p. ej. "¿Necesitas un estudio
  similar?"), no de un enlace genérico de navegación.
- Esta regla se documenta también en `CONTENT_STRATEGY.md` (sección nueva,
  cerca de §1.5) como regla editorial operativa, y se referencia desde
  `PROJECT_VISION.md §2`.
- No se auditó en este ADR el contenido ya publicado en busca de duplicación
  existente entre dominios; esa auditoría es un trabajo posterior y separado.

## Alternativas consideradas

- **Mantener solo enlaces de navegación genéricos entre dominios** (sin regla
  de no-duplicación) — descartado: es la práctica que ya generaba riesgo de
  contenido duplicado entre dominios.
- **Fusionar ambos dominios en uno solo** — descartado: rompe la separación de
  responsabilidades (`PROJECT_VISION.md §2`: Geo Radar Chile debe permanecer
  estable como sitio corporativo de cotización y autoridad SEO propia).
