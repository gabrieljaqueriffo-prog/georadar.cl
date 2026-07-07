# Themes — Evidencia Técnica ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

> Este directorio agrupa **varias fuentes alrededor de un problema o concepto**.
> Un tema no es el resumen de un solo paper: es un mapa temático que conecta
> múltiples fuentes y prepara el terreno para una síntesis original.

---

## Qué es un tema

Un tema es una pregunta técnica que ATLAS quiere responder con criterio, no
con una sola fuente. Ejemplos:

- ¿Cómo afecta la humedad del suelo a la profundidad efectiva del GPR?
- ¿Qué relación existe entre frecuencia de antena y resolución?
- ¿Qué dice la literatura sobre detección de cavidades con GPR?
- ¿Por qué la permitividad dieléctrica importa en la interpretación?
- ¿Qué limitaciones tiene el GPR en suelos conductivos?

Un tema no es una ficha de paper. Un tema mapea lo que se sabe colectivamente
sobre un problema.

---

## Temas candidatos iniciales

Los temas emergen del Knowledge Map de `CONTENT_STRATEGY.md §2`. Los más
prioritarios para ATLAS son los que alimentan contenido público inexistente:

- `humedad-conductividad` — efecto de agua y conductividad en la señal GPR
- `frecuencia-resolucion` — compromiso entre penetración y detalle
- `profundidad-efectiva` — qué factores la determinan y por qué no es fija
- `deteccion-cavidades` — GPR en socavones, vacíos, estructuras huecas
- `gpr-concreto` — limitaciones y condiciones en estructuras de hormigón
- `permitividad-dielectrica` — cómo varía entre materiales y qué implica
- `atenuacion-senal` — mecanismos, factores, consecuencias prácticas

---

## Cuándo crear un tema

Crear un archivo de tema cuando:
1. Existen al menos dos fichas de papers en `papers/` sobre el mismo problema.
2. Se identifica un vacío en el Knowledge Map de `CONTENT_STRATEGY.md §2`
   que podría cubrirse con contenido propio de ATLAS.
3. Se planea una síntesis y se necesita mapear el territorio antes de escribirla.

---

## Cómo crear un tema

1. Copiar `templates/research-theme-template.md`.
2. Renombrar: `theme-[nombre-en-kebab].md`  
   Ejemplo: `theme-humedad-conductividad.md`
3. Completar campos. El campo "fuentes relacionadas" debe apuntar a fichas
   existentes en `papers/`, no a papers externos directamente.
4. Guardar en este directorio.
