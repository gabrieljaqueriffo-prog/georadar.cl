# Paper Brief — ATLAS

<!-- ATLAS — Uso interno hasta aprobación explícita de Gabriel. -->

---

## Identificación

- **ID interno:** 2020-chorro-gpr-inspeccion-no-destructiva
- **Tipo de fuente:** tesis de magíster
- **Título completo:** Uso de tecnicas de inspeccion no destructiva basadas en Ground Penetrating Radar
- **Autor:** Mauricio Rene Chorro
- **Año:** 2020
- **Institución:** Pontificia Universidad Católica de Chile — Escuela de Ingeniería
- **Grado:** Magíster en Ingeniería Estructural y Geotécnica
- **Director:** Prof. Sergio Gutiérrez Cid
- **Colaborador:** Dr. Giovanni Menanno (equipo de investigación FONDECYT 1181392)
- **Licencia:** no especificada — tratar como referencia interna; no citar ni reproducir texto hasta confirmar acceso público en repositorio PUC

---

## NIVEL DE FRONTERA

**Nivel 1-2 con zonas de Nivel 3**

- **Nivel 1-2 (publicable):** los principios físicos del GPR (Maxwell, permitividad, conductividad, velocidad de propagación, reflexión); que la detección depende del contraste dieléctrico entre el objeto y el medio; que materiales con alta permitividad como el acero son más fáciles de detectar que materiales con permitividad similar al hormigón (PVC, madera, polietileno); que el GPR puede usarse para control de calidad de relleno en muros de mampostería; el concepto de hipérbola de difracción como indicador de la presencia y ubicación de un objeto.
- **Nivel 3 (interno):** la secuencia específica de procesado en ReflexW (parámetros de filtros, ganancia, migración); el procedimiento de compatibilización y reordenamiento de trazas para Reflex3DScan; los criterios concretos de interpretación de amplitud de onda para distinguir celda llena de celda vacía; la rutina FreeFEM de modelación numérica directa.

---

## Estado editorial

- **Revisado:** sí
- **Fecha:** 2026-07-11
- **Aprobado para síntesis de Nivel 1-2:** pendiente de definición por tema
- **Archivo de intake:** pendiente

---

## Resumen en lenguaje propio

Esta tesis presenta una metodología completa de ensayo no destructivo con GPR aplicado a estructuras de hormigón y mampostería, desde la adquisición de datos hasta el procesado y la obtención de imágenes. El trabajo tiene tres partes.

La primera parte desarrolla los fundamentos teóricos del GPR: las ecuaciones de Maxwell, los parámetros electromagnéticos (conductividad, permitividad dieléctrica, permeabilidad, velocidad de propagación, factor de atenuación, coeficiente de reflexión) y el procesamiento de señal (filtros, deconvolución, migración, transformada de Fourier y de Hilbert).

La segunda parte es experimental. Se fabricaron 12 losetas de hormigón de 1.0 x 1.0 x 0.10 m con objetos embebidos de características dieléctricas distintas: barras de acero de distintos diámetros, listones de madera, pelotas de ping-pong, cuadrados de polietileno, tubo de PVC, bloques de ladrillo, y losetas con dos hormigones de propiedades diferentes. Se midieron con el equipo MALA CX (antena de 2.3 GHz) y se procesaron con ReflexW y Reflex3DScan. Además se realizaron ensayos en dos muros de mampostería de bloque de hormigón reforzado, buscando detectar la distribución de grout en celdas y la posición del refuerzo horizontal.

La tercera parte aborda la modelación numérica del problema directo de propagación de onda electromagnética, combinando diferencias finitas implícitas en el tiempo con elementos finitos en el espacio, implementado en FreeFEM. Se simuló la propagación de un pulso en una loseta con objeto circular de PVC, madera y acero para comparar con los ensayos experimentales.

---

## Hallazgos clave (en lenguaje propio)

1. **El contraste dieléctrico determina la capacidad de detección.** Objetos con alta permitividad respecto al hormigón (barras de acero) generan hipérbolas claras y bien definidas. Objetos con permitividad similar al hormigón (PVC, madera, polietileno) son detectables pero con menor definición y requieren filtros de ganancia.

2. **El GPR detecta todos los objetos ensayados, incluidos los de baja diferencia dieléctrica.** En todos los casos de las 12 losetas se pudo determinar la existencia y ubicación aproximada del objeto embebido. Los límites del método no son ausencia de detección sino pérdida de detalle (forma, tamaño, separación entre elementos próximos).

3. **El acero actúa como barrera para la onda.** Una malla de barras con separación estrecha puede impedir detectar objetos situados detrás de ella. La resolución del equipo no permite distinguir con claridad el tamaño o la forma de elementos próximos entre sí.

4. **Las interfaces entre dos hormigones de distinta dosificación son detectables.** Loseta 8 (dos hormigones de distinta resistencia) mostró diferencia clara en la imagen. Loseta 9 (dos hormigones iguales vaciados en momentos distintos) no mostró diferencia, confirmando que el contraste dieléctrico, y no el tiempo de vaciado, es el factor determinante.

5. **El GPR permite control de calidad de relleno en muros de mampostería.** En los dos muros ensayados se identificaron con claridad las celdas rellenas de grout versus las celdas vacías, la posición del refuerzo horizontal (hipérbolas en las sisas), y la posición del refuerzo vertical. Los resultados coincidieron con los planos de construcción.

6. **La habilidad del operador afecta la calidad de la imagen.** La estabilidad y rectitud del desplazamiento de la antena sobre la cuadrícula guía es determinante. Los corrimientos del operador se reflejan en la imagen como deformaciones de los objetos detectados.

7. **La combinación FDTD + FEM en FreeFEM es un método viable para modelar la propagación.** La simulación mostró variación de intensidad al chocar la onda con el objeto, coherente con el comportamiento físico esperado. El alcance es introductorio: no se incorporaron reflexión, refracción ni velocidades reales de propagación.

---

## Qué puede enseñarse públicamente (Nivel 1-2)

1. Que el GPR detecta objetos a través del contraste en sus propiedades electromagnéticas, no a través del material en sí.
2. Que a mayor diferencia entre la permitividad del objeto y la del medio, más clara es la señal reflejada y más fácil la detección.
3. Que objetos con permitividad similar al hormigón (madera, PVC) pueden detectarse, pero con menor precisión en forma y tamaño.
4. Que las barras de acero se detectan por la hipérbola de difracción que generan al cruzar el perfil de medición.
5. Que el GPR puede aplicarse para verificar el relleno de grout en muros de mampostería estructural.
6. Que la calidad de la imagen depende en parte de la ejecución del operador en campo.
7. Los principios de por qué dos hormigones de distinta dosificación pueden diferenciarse con GPR.

---

## Qué NO debe publicarse (Nivel 3 — interno)

1. La secuencia exacta de procesado en ReflexW (parámetros de filtros, ganancia, migración) usada para cada tipo de loseta.
2. El procedimiento de compatibilización y reordenamiento de trazas en Reflex3DScan.
3. Los criterios cuantitativos de amplitud de onda para distinguir celda rellena de celda vacía.
4. La rutina FreeFEM de modelación numérica directa (Anexo A).
5. Cualquier protocolo de interpretación que Geo Radar Chile aplique en sus estudios sobre hormigón o mampostería.

---

## Ideas de contenido derivadas

### Artículos de biblioteca técnica

1. "Qué puede detectar el georradar en estructuras de hormigón" — principios de detección por contraste dieléctrico, límites del método, aplicaciones en inspección estructural (Nivel 1-2)
2. "Cómo el georradar detecta vacíos y rellenos en muros de mampostería" — aplicación en control de calidad constructivo (Nivel 1-2)
3. "Por qué el acero y el PVC se comportan distinto frente al GPR" — permitividad como explicación del contraste de detección (refuerza artículos de glosario existentes)

### Glosario (candidatos de refuerzo o nuevos)

- Permitividad dieléctrica — ya publicado; este paper refuerza con tabla de valores ASTM D4748 (hormigón: 6-11, grava: 5-9, arena: 2-6)
- Conductividad — ya publicado; refuerzo adicional
- Hipérbola de difracción — ya publicado; este paper ilustra el mecanismo con ensayos en losetas
- Coeficiente de reflexión — candidato nuevo; expresa el porcentaje de energía reflejada según el contraste dieléctrico

### Casos y sectores

- Refuerza el vertical de construcción: GPR en estructuras de hormigón como inspección no destructiva previa a intervención.
- Posible aplicación en forense estructural (verificación de relleno, detección de vacíos).

---

## Referencia sugerida

> Chorro, M. R. (2020). _Uso de tecnicas de inspeccion no destructiva basadas en Ground Penetrating Radar_ [Tesis de Magíster en Ingeniería Estructural y Geotécnica]. Pontificia Universidad Católica de Chile, Escuela de Ingeniería. Director: Sergio Gutiérrez Cid.

_(Citar solo cuando se confirme acceso público en repositorio PUC. Hasta entonces, tratar como referencia interna.)_

---

## Relación con otras fichas

| Ficha | Relación |
|-------|----------|
| `papers/1995-lorenzo-gpr-obras-civiles-brief.md` | Complementaria: Lorenzo establece fundamentos de campo (subsuelo); Chorro aplica el mismo método a estructuras de hormigón y mampostería. Juntas cubren los dos dominios principales de aplicación del GPR. |
| `papers/2024-paredes-gpr-analisis-cuantitativo-brief.md` | Complementaria: Chorro presenta ensayos experimentales con procesado visual; Paredes aporta la dimensión cuantitativa de la señal. Chorro es la base experimental; Paredes la capa analítica posterior. |

---

## Temas que alimenta

| Tema | Acción |
|------|--------|
| `themes/theme-gpr-hormigon.md` | Fuente principal (tema nuevo a crear si corresponde) |
| `themes/theme-frecuencia-resolucion.md` | Fuente adicional (relación frecuencia-resolución en hormigón) |
| `themes/theme-humedad-conductividad.md` | Fuente de refuerzo (permitividad del hormigón y su variación con dosificación) |
