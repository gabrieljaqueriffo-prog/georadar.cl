# DESIGN_SYSTEM.md

> **Estado:** v1 — tipografía pendiente de ADR
> **Propósito:** Define cómo se ve, se siente y se comporta Georadar. No es una
> lista de estilos CSS: es el lenguaje visual del producto. Cada decisión aquí
> debe derivarse de `PROJECT_VISION.md` y pasar el filtro de `NORTH_STAR.md`.
>
> Regla de este documento: cuando exista tensión entre estética y comprensión,
> siempre gana la comprensión.

---

## 1. Filosofía visual

Antes de elegir un color, una fuente o un espaciado, hay que responder cuatro
preguntas. Las respuestas gobiernan todo lo demás.

**¿Cómo se comunica precisión científica?**
Con densidad controlada, no con escasez. Con alineación exacta. Con números
que se leen sin esfuerzo. Con anotaciones que no confunden. La precisión no
se declara: se demuestra en que cada elemento está exactamente donde debe estar.

**¿Cómo se comunica confianza sin parecer una corporación rígida?**
Con espacio. Con consistencia. Con jerarquía clara. La confianza no viene del
azul marino ni del logotipo grande: viene de que el usuario nunca se pregunta
dónde está ni qué debe hacer a continuación. Un sitio confiable es predecible
en el mejor sentido: siempre cumple lo que promete visualmente.

**¿Cómo se comunica innovación sin parecer una startup SaaS genérica?**
Evitando todos los atajos visuales que señalan "startup": los gradientes
brillantes, el glassmorphism, las ilustraciones vectoriales de personas
abstractas, los fondos oscuros completos, los badges de "AI-powered". La
innovación de Georadar es disciplinar, no estética. Se comunica con la
profundidad del contenido, no con los efectos de la interfaz.

**¿Cómo se comunica profundidad técnica sin intimidar?**
Con jerarquía progresiva. El usuario decide hasta dónde profundiza. La
portada habla al decisor; el artículo habla al ingeniero; la nota técnica
habla al especialista. El diseño guía ese descenso sin forzarlo.

---

## 2. Principios de diseño del producto

Antes de los principios perceptuales, estos cinco principios gobiernan cómo debe
comportarse cada interfaz de Georadar. No son reglas visuales: son compromisos
con el usuario. Cuando Claude diseñe una pantalla nueva, cada principio funciona
como un checklist.

1. **Reduce incertidumbre.** Cada interfaz debe dejar al usuario más seguro
   de lo que sabía antes de entrar. Si sale con más dudas, fallamos.

2. **Explica antes de pedir.** Antes de solicitar una acción (rellenar un formulario,
   hacer clic en un CTA, ingresar un dato), el usuario debe entender para qué sirve
   y qué obtendrá. Nunca pedimos primero y explicamos después.

3. **Muestra evidencia antes que afirmaciones.** "Somos expertos en GPR" no vale
   nada. Un radargrama correctamente interpretado, sí. Cada afirmación sobre
   capacidad debe estar respaldada por un activo concreto visible en la misma
   pantalla o a un clic de distancia.

4. **Permite profundizar sin obligar.** El decisor necesita saber si puede confiar;
   el ingeniero necesita entender cómo funciona. La interfaz ofrece ambas rutas
   sin forzar a ninguna. El contenido tiene capas; el diseño las hace accesibles.

5. **La acción siempre viene después de comprender.** El CTA aparece cuando el
   usuario ya tiene suficiente contexto para actuar con convicción, no antes.
   Un CTA prematuro genera rechazo; uno tardío, pérdida de momento. El diseño
   gestiona ese ritmo.

---

## 3. Principios perceptuales

No son reglas de CSS. Son reglas de percepción humana aplicadas al contexto
de Georadar. Explican el *por qué* detrás de cada decisión visual.

1. **El espacio en blanco comunica seguridad.** Un sitio denso parece apresurado.
   Un sitio con respiración parece seguro de sí mismo. Georadar no necesita llenar
   cada píxel para demostrar que tiene contenido.

2. **La alineación comunica precisión.** En una plataforma de medición del subsuelo,
   los elementos desalineados son una contradicción cultural. Todo tiene una cuadrícula.
   Todo respeta esa cuadrícula.

3. **La repetición comunica sistema.** Cuando el mismo componente aparece igual en
   diez páginas distintas, el usuario aprende a confiar. Cuando varía sin razón,
   genera ruido cognitivo.

4. **La consistencia comunica profesionalismo.** No la perfección visual: la
   consistencia. Un botón que siempre se ve igual vale más que diez botones
   ligeramente distintos y "mejorados".

5. **La simplicidad comunica dominio.** Solo quien entiende profundamente un tema
   puede explicarlo sin decoración. La complejidad visual suele esconder
   inseguridad conceptual.

6. **La jerarquía visual comunica experiencia.** El usuario debe saber en tres
   segundos qué es lo más importante de cada página. Si necesita buscar, la
   jerarquía falló.

7. **El movimiento debe tener propósito.** Una animación que solo decora es ruido.
   Una animación que indica estado, guía la atención o confirma una acción tiene
   razón de existir.

---

## 4. Anti-patrones

Lo que Georadar nunca hará, sin importar las tendencias del momento.
Esta lista protege la identidad del producto contra la moda.

**Estética**
- ❌ Glassmorphism (fondos translúcidos con blur).
- ❌ Fondos oscuros como estilo dominante del sitio.
- ❌ Gradientes vibrantes tipo startup SaaS.
- ❌ Ilustraciones vectoriales de personas abstractas (las de stock de Notion/Linear).
- ❌ Iconografía genérica de oficina (maletines, apretones de manos, nubes con flechas).
- ❌ Mockups de dispositivos como evidencia técnica.

**Interacción**
- ❌ Hero con video de reproducción automática.
- ❌ Carruseles de contenido de reproducción automática.
- ❌ Popups de entrada (al llegar a la página).
- ❌ Animaciones de scroll que bloquean la lectura.
- ❌ Efectos parallax agresivos.
- ❌ Skeleton loaders en contenido que puede estar disponible de inmediato.

**Credibilidad falsa**
- ❌ Contadores animados de clientes o proyectos sin fuente verificable.
- ❌ Badges tipo "AI Powered", "Certificado", "Líder del sector" sin respaldo.
- ❌ Testimonios sin nombre, empresa ni contexto real.
- ❌ Precios tachados o urgencia artificial ("Solo por hoy").

**Técnica**
- ❌ Radargramas recortados que eliminan contexto de interpretación.
- ❌ Anotaciones que se confunden con el dato original.
- ❌ Gráficos sin escala, unidades u orientación.
- ❌ Imágenes de terreno genéricas de stock en lugar de fotografías reales.

---

## 5. Sistema de identidad

### 4.1 Paleta de color

La identidad de Georadar está anclada en la tierra: geología, subsuelo, material.
Los colores derivan de ese mundo, no de tendencias tecnológicas.

**Colores base (tierra evolucionada)**

| Rol | Descripción | Uso |
|-----|-------------|-----|
| `--color-earth-deep` | Marrón oscuro profundo | Texto principal, headers, fondos de autoridad |
| `--color-earth-mid` | Tierra media / umber | Elementos secundarios, separadores, bordes |
| `--color-stone-light` | Piedra clara / gris cálido | Fondos de secciones alternadas |
| `--color-white` | Blanco puro | Fondo principal, espacios de respiración |

**Colores técnicos (precisión y datos)**

| Rol | Descripción | Uso |
|-----|-------------|-----|
| `--color-slate-deep` | Gris azulado profundo | Datos técnicos, tablas, código |
| `--color-slate-mid` | Gris azulado medio | Texto secundario técnico |
| `--color-slate-light` | Gris azulado claro | Fondos de bloques técnicos |

**Color de acción (único acento)**

| Rol | Descripción | Uso |
|-----|-------------|-----|
| `--color-amber` | Ámbar / naranja cálido | **Solo** CTAs principales, alertas, énfasis crítico |

**Regla del acento:** el ámbar aparece únicamente en acciones que requieren
atención inmediata del usuario (botones primarios, WhatsApp widget, alertas).
Si aparece en más de dos elementos por pantalla, está mal usado.

**Estado de los valores hex:** pendiente de validación con accesibilidad (ratio
de contraste WCAG AA mínimo 4.5:1 para texto). Los valores exactos se definen
en el ADR de paleta una vez validados en pantalla.

---

### 4.2 Tipografía

> **Estado: PENDIENTE DE DECISIÓN — ADR-004-tipografia.md**

La tipografía no se elige por preferencia estética. Se elige cuando cumple
los siguientes criterios, en este orden de prioridad:

1. **Legibilidad móvil excepcional** — muchos usuarios leen en terreno, con luz
   solar directa y pantallas de tamaño variable.
2. **Números técnicos perfectamente legibles** — 0 vs O, 1 vs l vs I nunca deben
   confundirse. Las cifras de medición son críticas.
3. **Soporte para texto técnico largo** — artículos de biblioteca y casos de estudio
   requieren lectura cómoda de 800–1500 palabras.
4. **Soporte para símbolos y unidades** — MHz, ns, m/ns, dB deben renderizarse
   correctamente.
5. **Rendimiento web** — peso del archivo razonable, soporte de `font-display: swap`.
6. **Licencia adecuada** — uso comercial sin restricciones.
7. **Coherencia con geociencias** — no debe evocar fintech, moda ni entretenimiento.

**Estructura tipográfica prevista (roles, no fuentes):**
- `--font-display`: títulos H1–H2, gran impacto visual.
- `--font-body`: texto de lectura, artículos, descripciones.
- `--font-mono`: código, datos técnicos, coordenadas, valores de medición.

*No se selecciona fuente hasta validar estos criterios y registrar la decisión
en ADR-004.*

---

### 4.3 Escala tipográfica

Independiente de la fuente elegida, la escala sigue una proporción modular
que garantiza jerarquía clara en todos los tamaños de pantalla:

| Token | Uso | Tamaño base (desktop) |
|-------|-----|-----------------------|
| `--text-display` | Hero, título de sección principal | 48–64px |
| `--text-h1` | Título de página | 36–48px |
| `--text-h2` | Sección dentro de página | 28–36px |
| `--text-h3` | Subsección | 22–28px |
| `--text-body-lg` | Lead, resumen | 18–20px |
| `--text-body` | Texto de lectura estándar | 16–18px |
| `--text-small` | Metadata, etiquetas, notas | 13–14px |
| `--text-mono` | Datos técnicos, código | 14–16px |

**Mínimo absoluto en móvil:** `--text-body` nunca baja de 16px.

---

### 4.4 Espaciado

Sistema de escala base-8 (múltiplos de 8px). Predecible, alineado con
cuadrículas de pantalla y consistente en todos los componentes.

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | Micro (entre icono y texto) |
| `--space-2` | 8px | XS (padding interno mínimo) |
| `--space-3` | 16px | S (espaciado entre elementos relacionados) |
| `--space-4` | 24px | M (padding de componentes) |
| `--space-5` | 32px | L (separación entre componentes) |
| `--space-6` | 48px | XL (separación entre secciones) |
| `--space-7` | 64px | 2XL (separación entre bloques mayores) |
| `--space-8` | 96px | 3XL (héroe, secciones de apertura) |

---

### 4.5 Radios, sombras y bordes

**Radios:** sutiles. Georadar no es una app de consumo con bordes muy redondeados.
- Componentes pequeños (botones, badges): 4–6px.
- Tarjetas y contenedores: 8px.
- Modales y overlays: 12px.
- Nunca pill-shape (`border-radius: 9999px`) excepto en badges de estado pequeños.

**Sombras:** funcionales, no decorativas.
- `--shadow-sm`: elevación mínima (hover de tarjeta).
- `--shadow-md`: componentes flotantes (dropdown, tooltip).
- `--shadow-lg`: modales, paneles principales.
- Sin sombras de color (azul brillante, ámbar). Solo grises neutros con opacidad baja.

**Bordes:** preferir bordes a sombras cuando sea posible. Un borde claro
comunica más precisión que una sombra difusa.

---

### 4.6 Iconografía

- Sistema de iconos: trazo (stroke), no relleno (fill). El trazo es más preciso
  y técnico; el relleno es más "aplicación de consumo".
- Grosor de trazo consistente en todo el sitio (1.5–2px).
- Tamaños: 16px (inline), 20px (UI), 24px (acciones), 32px (ilustrativo).
- Nunca combinar iconos de trazo con iconos de relleno en la misma interfaz.
- Iconos propios para conceptos específicos de GPR (antena, radargrama, subsuelo)
  cuando no exista equivalente en la biblioteca elegida.

---

### 4.7 Fotografía e imágenes de terreno

- **Solo fotografías reales** de proyectos ejecutados. Cero imágenes de stock
  de ingeniería genérica.
- Tratamiento visual consistente: fotografías de alta calidad, bien iluminadas,
  que muestren el contexto real del trabajo (equipos, terreno, faena).
- No aplicar filtros excesivos que distorsionen los colores reales del terreno.
- Las fotografías de personas deben mostrar trabajo real, no poses corporativas.
- Relación de aspecto estándar: 16:9 para hero y cabeceras; 4:3 para tarjetas;
  1:1 para avatares y thumbnails pequeños.

---

## 6. Visualización de evidencia

Esta sección es única en Georadar y no aparece en sistemas de diseño
convencionales. Define cómo se presentan los activos más estratégicos del
producto: la evidencia técnica real.

### 5.1 Radargramas

Los radargramas son la firma visual de Georadar. Son irreemplazables como
prueba de competencia técnica y nunca deben tratarse como "imágenes decorativas".

**Reglas de presentación:**
- Nunca recortar un radargrama que elimine contexto de interpretación.
- Siempre indicar: escala de profundidad, escala horizontal, frecuencia de antena
  y medio de propagación cuando sea relevante para la interpretación.
- Las anotaciones (flechas, etiquetas, líneas de interpretación) deben distinguirse
  claramente del dato original. Usar colores de anotación que contrasten pero no
  compitan con la escala de amplitud del radargrama.
- Estilo de anotación único en todo el sitio: mismo grosor de línea, misma
  tipografía mono, mismo color de acento para anotaciones en todos los radargramas
  publicados. Con el tiempo, esa consistencia se convierte en firma editorial.
- Ofrecer versión con y sin anotación cuando sea posible (el dato limpio y el
  dato interpretado).
- Incluir siempre una leyenda mínima o enlace al glosario para términos técnicos
  visibles en la imagen.

### 5.2 Mapas y perfiles

- Indicar siempre norte, escala y sistema de coordenadas.
- Distinguir claramente entre lo medido y lo interpretado.
- Usar paletas de color funcionales para mapas de amplitud o profundidad
  (no estéticas): evitar arco iris completo; preferir paletas divergentes o
  secuenciales con significado técnico.

### 5.3 Tablas de interpretación

- Estructura clara: columna de anomalía / columna de interpretación /
  columna de nivel de confianza.
- Nunca combinar colores de semáforo (rojo/amarillo/verde) sin explicar
  explícitamente el criterio de clasificación.
- Siempre incluir pie de tabla con fuente, fecha y condiciones del levantamiento.

### 5.4 Comparaciones antes/después

- Alinear perfectamente ambas imágenes para que la comparación sea justa.
- Indicar claramente qué es "antes" y qué es "después", y qué cambió.
- Nunca usar comparaciones antes/después de proyectos de terceros sin autorización
  explícita y sin indicar la fuente.

---

## 7. Sistema de componentes

Georadar usa CSS vanilla, pero piensa en componentes con una taxonomía clara.
Eso garantiza consistencia aunque no haya un framework que la fuerce.

```
FOUNDATION (variables CSS)
    │  Color, tipografía, espaciado, sombras, radios
    ▼
TOKENS (nombres semánticos)
    │  --color-action, --text-primary, --space-section
    ▼
PRIMITIVES (elementos base)
    │  Botón, enlace, badge, input, label, divider
    ▼
COMPONENTS (composiciones)
    │  Card-article, card-case, card-tool, card-service
    │  Form-contact, nav-main, nav-breadcrumb
    │  Cta-whatsapp, cta-form, cta-download
    ▼
PATTERNS (combinaciones recurrentes)
    │  Hero, feature-grid, testimonial-block, stats-row
    │  Radargram-annotated, calculator-input, case-preview
    ▼
TEMPLATES (estructuras de página)
    │  Template-article, template-case, template-tool
    │  Template-service, template-home
    ▼
PAGES (instancias reales)
       Cada página del sitio
```

**Regla de la taxonomía:** nunca crear una instancia en un nivel superior
sin que el nivel inferior esté definido. Un Pattern que no puede descomponerse
en Components conocidos no está bien diseñado.

### Componentes prioritarios (construir primero)

Por orden de impacto en conversión y autoridad:

1. `cta-whatsapp` — presente en todas las páginas, canal principal.
2. `card-case` — activo de credibilidad más visible.
3. `card-article` — activo de autoridad más frecuente.
4. `calculator-input` — componente base de todas las herramientas.
5. `radargram-annotated` — firma visual del producto.
6. `nav-main` — consistencia de navegación en todo el sitio.
7. `hero` — primera impresión por capacidad.

---

## 8. Lenguaje de interacción

Define la personalidad del movimiento. No "hover azul": cómo se *siente*
interactuar con Georadar.

### 7.1 Principios de movimiento

- **Propósito antes que decoración.** Una animación existe solo si indica estado,
  guía la atención o confirma una acción. Si solo decora, se elimina.
- **Sutileza técnica.** Las transiciones son precisas y controladas, no
  "suaves y amigables". Georadar no es una app de bienestar.
- **Nunca interrumpir la lectura.** Las animaciones de scroll no bloquean
  el contenido. El contenido siempre tiene prioridad.
- **Respetar `prefers-reduced-motion`.** Todas las animaciones se desactivan
  si el sistema operativo del usuario lo solicita.

### 7.2 Duraciones estándar

| Tipo | Duración | Uso |
|------|----------|-----|
| Micro | 100–150ms | Hover, focus, toggle |
| Corta | 200–250ms | Aparición de tooltips, dropdowns |
| Media | 300–350ms | Transiciones de componentes, modales |
| Larga | 400–500ms | Transiciones de página, loaders |

Nunca superar 500ms en una transición de interfaz. Si algo necesita más tiempo,
el problema es de arquitectura, no de animación.

### 7.3 Curvas de easing

- Entradas: `ease-out` (rápido al inicio, desaceleración suave).
- Salidas: `ease-in` (aceleración, desaparece con intención).
- Interacciones de estado: `ease-in-out` (equilibrado).
- Nunca `linear` para movimiento de UI (mecánico y sin vida).

### 7.4 Comportamiento de componentes interactivos

**Botones:**
- Estado rest → hover: cambio sutil de luminosidad (-10%) en 150ms.
- Estado hover → active/pressed: escala leve (scale 0.98) en 100ms.
- Estado loading: spinner inline, texto "Enviando…", botón deshabilitado.
- Estado success: ícono de check, verde sutil, texto de confirmación.

**Tarjetas:**
- Hover: elevación de sombra (--shadow-sm → --shadow-md) + desplazamiento
  vertical de -2px. Duración: 200ms, ease-out.
- Sin zoom ni transformaciones agresivas.

**Calculadoras y herramientas:**
- El resultado aparece con fade-in suave (200ms) para indicar que el cálculo
  ocurrió, no que siempre estuvo ahí.
- Los errores de input se señalan con borde ámbar y mensaje inline,
  nunca con alert() del navegador.
- Los valores de resultado numérico se formatean con separador de miles
  y unidades visibles siempre.

**Formularios:**
- Validación inline progresiva (al salir del campo, no al hacer submit).
- Estados: rest / focus (borde slate) / error (borde ámbar + mensaje) /
  success (borde verde sutil).
- Nunca mostrar todos los errores en un bloque al hacer submit; señalar
  el primer campo con error y permitir corrección progresiva.

---

## 9. Mobile-first

Muchos usuarios de Georadar acceden desde terreno: faenas, obras, sitios
arqueológicos. El diseño móvil no es una versión reducida del desktop; es el
contexto de uso primario para una parte significativa de la audiencia.

**Tamaños de toque mínimos:** 44×44px para cualquier elemento interactivo
(botones, enlaces, inputs). Sin excepciones.

**Texto en exterior:** asumir que el usuario lee bajo luz solar directa.
Contraste siempre por encima de WCAG AA; preferir AA+ (7:1) en texto crítico.

**Formularios en móvil:**
- Inputs de tipo adecuado (`type="tel"` para teléfonos, `type="email"` para
  correos, `type="number"` para valores numéricos).
- Labels siempre visibles, nunca solo placeholder.
- Botón de submit siempre visible sin scroll.

**Radargramas en móvil:** deben poder ampliarse con pinch-to-zoom o abrirse
en pantalla completa. Un radargrama que no puede inspeccionarse en móvil es
un activo degradado.

---

## Cierre

> **El diseño en Georadar no busca impresionar. Busca hacer que la información
> técnica sea más comprensible, confiable y útil. Cuando exista tensión entre
> estética y comprensión, siempre gana la comprensión.**

Esta frase no es un eslogan: es el criterio de desempate de cualquier decisión
visual. Si un elemento hace el sitio más bello pero menos claro, se modifica.
Si un elemento hace el sitio más claro aunque menos sorprendente, se queda.

Conecta directamente con `PROJECT_VISION.md` (construir confianza a través de
utilidad genuina), con `NORTH_STAR.md` (¿esto ayuda a alguien a comprender
mejor?) y con `DECISION_FRAMEWORK.md` (claridad antes que espectacularidad).
GPOS es un sistema coherente: cada documento hereda y refuerza a los anteriores.
