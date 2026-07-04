# Papers — Evidencia Técnica ATLAS

<!-- ATLAS — Uso interno. Este archivo no es contenido público. -->

> Este directorio contiene **fichas editoriales limpias** de cada paper o
> fuente que superó el triage de intake. Una ficha aquí significa que la
> fuente es relevante, su licencia está identificada y su nivel de riesgo
> está clasificado.

---

## Qué entra aquí

- Fichas completas de papers académicos relevantes para GPR.
- Fichas de tesis universitarias.
- Fichas de informes institucionales (ASTM, IEEE, organismos técnicos).
- Fichas de manuales técnicos públicos.
- Fichas de preprints con revisión de licencia.

## Qué NO entra aquí

- PDFs de terceros (se guardan internamente, no se referencian desde aquí con rutas públicas).
- Contenido copiado del paper (la ficha es síntesis en lenguaje propio).
- Entradas de intake sin triage completo.

---

## Flujo

```
Ficha de intake aprobada
        │
        ▼
Crear ficha en papers/ usando la plantilla
        │
        ▼
Clasificar: nivel de frontera (1/2/3/4) + riesgo (bajo/medio/alto)
        │
        ├── Nivel 1-2, riesgo bajo/medio → puede alimentar synthesis/
        ├── Nivel 3, riesgo alto → solo uso interno, no pasa a synthesis/
        └── Nivel 4 → solo uso interno, nunca pasa a ninguna capa pública
```

**Regla crítica:** el campo `nivel-frontera` determina si una ficha puede
alimentar síntesis públicas. Si el nivel es 3 o 4, la ficha queda en
papers/ para referencia interna pero no genera contenido público de ATLAS.

---

## Clasificación de acceso por tipo de fuente

| Tipo | Regla |
|------|-------|
| Open Access con licencia CC BY | Citar, analizar, reutilizar con atribución y enlace |
| Open Access sin licencia clara | Citar y enlazar. No copiar tablas, figuras ni texto largo |
| Paper en editorial cerrada / paywall | Solo referencia interna. No republicar nada |
| Preprint (arXiv, repositorio universitario) | Enlazar al original. Revisar licencia antes de reutilizar |
| Tesis o informe institucional | Verificar permisos. Citar y enlazar. No asumir libre reutilización |

**Regla de seguridad:** si la licencia no está clara, tratar la fuente
como referencia interna. No asumir que "estar disponible online" equivale
a "libre para reutilizar".

---

## Cómo crear una ficha

1. Copiar `templates/paper-brief-template.md`.
2. Renombrar: `[año]-[autor-apellido]-[tema-clave]-brief.md`  
   Ejemplo: `2024-jol-gpr-conductividad-brief.md`
3. Completar todos los campos. El `nivel-frontera` es obligatorio.
4. Guardar en este directorio.
