# Synthesis — Evidencia Técnica ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

> Este directorio contiene **síntesis originales de ATLAS**: explicaciones
> propias basadas en literatura técnica, listas para convertirse en contenido
> público cuando estén revisadas y aprobadas.

---

## La regla más importante de este directorio

**Solo desde síntesis se crea contenido público en ATLAS. Nunca desde el
paper crudo. Nunca desde una ficha de intake. Nunca desde una ficha de paper.**

Una síntesis es contenido propio de ATLAS, no un resumen de terceros.
Cita sus fuentes, pero el texto es original.

---

## Qué hace que una síntesis sea publicable

Una síntesis puede convertirse en contenido público cuando cumple todo lo siguiente:

- [ ] Está escrita en lenguaje propio de ATLAS (no copia párrafos del paper).
- [ ] Cita correctamente las fuentes consultadas (enlace o DOI).
- [ ] No reproduce tablas, figuras ni texto extenso de material protegido.
- [ ] Está clasificada como Nivel 1 o 2 de la frontera de conocimiento.
- [ ] No enseña interpretación avanzada de radargramas (Nivel 3).
- [ ] No revela protocolos o heurísticas propietarias (Nivel 4).
- [ ] Tiene un tipo de activo recomendado (artículo, FAQ, herramienta, etc.).
- [ ] Ha sido revisada por Gabriel antes de publicarse.

**Si alguna condición falla, la síntesis queda interna hasta que se corrija.**

---

## Flujo completo desde fuente hasta publicación

```
intake/          → fuente cruda identificada
    ↓
papers/          → ficha editorial limpia + clasificación de riesgo
    ↓
themes/          → mapa temático con múltiples fuentes
    ↓
synthesis/       → síntesis original de ATLAS ← estás aquí
    ↓
Revisión Gabriel → ¿cumple todos los criterios de publicabilidad?
    ↓
Contenido público → artículo en /biblioteca/, página en /evidencia-tecnica/,
                    mejora de herramienta, FAQ en página de servicio, etc.
```

---

## Sobre la conexión futura con BADR

El campo `conexion-badr` en cada síntesis permite anotar qué señales
podría generar este conocimiento en BADR (el sistema interno de operaciones).
No es integración — es una nota de intención para cuando BADR esté operativo.

Ejemplo de anotación correcta:
> "Si un cliente menciona suelo arcilloso en el contacto inicial, este tema
> puede orientar la estimación de viabilidad antes de la visita."

---

## Cómo crear una síntesis

1. Copiar `templates/synthesis-template.md`.
2. Renombrar: `synthesis-[tema-en-kebab].md`  
   Ejemplo: `synthesis-humedad-profundidad-gpr.md`
3. Completar todos los campos. El campo `puede-publicarse` es obligatorio y binario.
4. Si `puede-publicarse` es "no", dejar la síntesis aquí como referencia interna.
5. Si `puede-publicarse` es "sí", coordinar con Gabriel la creación del activo público.
