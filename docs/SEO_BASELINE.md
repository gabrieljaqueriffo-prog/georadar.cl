# SEO_BASELINE.md

> Linea base SEO del sitio georadar.cl. Elaborada el 2026-07-05.
> Cubre las 23 URLs publicas incluidas en `sitemap.xml`.
> Proposito: registrar el estado actual antes de optimizaciones, identificar
> riesgos de canibalizacion y servir de referencia para futuras decisiones
> editoriales y de arquitectura.
>
> Fuentes consultadas: `sitemap.xml`, HTML de cada pagina, `INTERNAL_LINKING_AUDIT.md`,
> `CONTENT_STRATEGY.md`, `BACKLOG.md`, `ARCHITECTURE.md`.
>
> Columnas:
> - **Estado**: mantener / optimizar / expandir / fusionar / revisar.
> - **Intencion**: informacional (I), comercial (C), transaccional (T), navegacional (N).

---

## Tabla de linea base

| URL | Tipo | Capacidad | Keyword principal | Keywords secundarias | Intencion | Publico objetivo | CTA principal | Estado | Observacion |
|-----|------|-----------|-------------------|----------------------|-----------|-----------------|---------------|--------|-------------|
| `/` | Home | Hub general | `georradar Chile` | GPR Chile, prospección no destructiva Chile, empresa georradar, Geo Radar Chile | N + C | Tomadores de decision que buscan empresa GPR en Chile | Solicitar cotización | Mantener | H1 reorientado a plataforma de conocimiento (2026-07-05). Monitorear si el CTR para búsquedas comerciales puras ("empresa georradar Chile") se mantiene estable tras el cambio. |
| `/mineria/` | Servicio | Minería | `georradar mineria Chile` | GPR mineria, deteccion cavidades mineria, prospeccion subterranea mineria, socavones GPR, georradar Codelco | C | Gerentes de operaciones, ingenieros de minas, jefes de proyecto (Codelco, BHP, SQM) | Solicitar cotización | Optimizar | La landing cubre bien el sector pero la keyword principal compite con la home en la busqueda genérica "georradar Chile". Diferenciar con modificadores más especificos: "deteccion de cavidades y socavones con georradar". Considerar H2 explícito sobre clientes de referencia. |
| `/utilities/` | Servicio | Utilities | `deteccion lineas soterradas GPR Chile` | localizacion ductos subterraneos, GPR utilities Chile, mapeo servicios subterraneos, deteccion tuberias sin excavar | C + T | Coordinadores de obra, ingenieros civiles, empresas de utilities | Solicitar deteccion | Mantener | Bien diferenciada del resto de landings por keyword especifica. La FAQ sobre entregables es el punto de mayor conversion potencial. |
| `/construccion/` | Servicio | Construccion | `georradar construccion Chile` | GPR obras civiles Chile, prospeccion suelo construccion, georradar losas hormigon, inspeccion no destructiva construccion | C | Constructoras, ingenieros de obra, inspectores tecnicos de edificacion | Solicitar cotización | Optimizar | Keyword mas generica que las otras landings de sector; mayor riesgo de solapamiento con la home. Incluir keyword de especificidad media como "GPR inspeccion de losas y pavimentos" o "prospeccion civil no destructiva Chile". |
| `/forense/` | Servicio | Forense | `peritaje forense GPR Chile` | georradar forense, prospeccion no destructiva forense, GPR derechos humanos, estudio no invasivo sitios memoria | I + C | Fiscalías, ministerios, organizaciones DDHH, peritos judiciales | Contacto directo | Mantener | Nicho de muy bajo volumen de busqueda pero alta especificidad institucional. El posicionamiento por reputacion y nombre de empresa es más relevante que el volumen de keyword. No optimizar para volumen: optimizar para confianza. |
| `/mineria/casos/socavones-espesador-t5/` | Caso | Minería | `deteccion socavones GPR mineria` | GPR Codelco, socavones espesador, prospeccion no destructiva Chuquicamata, georradar planta minera | I | Ingenieros de minas investigando casos de uso comparables | Solicitar estudio similar | Mantener | Caso mejor enlazado del sitio (8 entrantes contextuales). Keywords long-tail de alta especificidad con baja competencia. No escalar por volumen; mantener como evidencia de credibilidad. |
| `/utilities/casos/accesos-metro-de-santiago/` | Caso | Utilities | `localizacion servicios subterraneos Metro Santiago` | GPR utilities urbano, deteccion ductos Metro, georradar infraestructura urbana densidad | I | Ingenieros de infraestructura urbana, empresas de servicios publicos | Solicitar estudio similar | Optimizar | Caso menos desarrollado editorialmente que el de Espesador T5. Podria expandir la narrativa del resultado (que decisiones permitio tomar el estudio) para mejorar calidad de pagina y tiempo en sitio. Ahora tiene 4 entrantes contextuales tras la correccion de enlazado. |
| `/forense/casos/cip-san-joaquin-cerro-chena/` | Caso | Forense | `GPR forense derechos humanos Chile` | georradar CIP San Joaquin, prospeccion no invasiva DDHH, peritaje subsuelo Derechos Humanos, Cerro Chena GPR | I | Organismos judiciales, organizaciones DDHH, periodistas especializados | Contacto directo | Mantener | Tratamiento editorial sensible por diseno: sin hallazgos ni radargramas reales. SEO secundario al proposito institucional. Indexar para credibilidad, no para volumen. |
| `/forense/casos/sitio-iran-3037-venda-sexy/` | Caso | Forense | `GPR sitio memoria Iran 3037` | georradar prospeccion no invasiva sitio DDHH, GPR Venda Sexy, estudio subsuelo sitio memoria | I | Investigadores, organizaciones DDHH, periodistas | Contacto directo | Mantener | Mismo criterio editorial que CIP San Joaquin. Ahora enlazado desde el articulo de toma de decisiones (correccion 2026-07-05). Keywords muy especificas de nicho con interes institucional. |
| `/construccion/casos/prospeccion-aeropuerto-chacalluta/` | Caso | Construccion | `GPR prospeccion aeropuerto Chile` | georradar obras civiles aeropuerto, GPR infraestructura vial Chile, Aeródromo Chacalluta GPR, prospeccion no destructiva pista | I | Ingenieros de infraestructura, constructoras de obras civiles | Solicitar estudio similar | Optimizar | Unico caso de construccion. Podria ampliar el angulo hacia "GPR en infraestructura de transporte" para capturar mas variantes. El tema de GPR en pavimentos (backlog) encontraria nexo natural aqui cuando se publique. |
| `/biblioteca/` | Indice | Biblioteca | `biblioteca tecnica GPR` | articulos georradar, guias GPR Chile, aprender georradar, recursos tecnicos prospección | I | Profesionales que investigan antes de contratar; operadores en formacion | Leer articulo | Expandir | Con 6 articulos publicados, la biblioteca tiene masa critica. El indice deberia ser mas descriptivo en su meta description para mejorar CTR desde SERP. Cada card podria incluir 1 frase de por que este articulo importa, no solo el titulo. |
| `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` | Articulo | Biblioteca | `frecuencia antena GPR` | como elegir antena georradar, profundidad vs resolucion GPR, antena GPR MHz, compromiso profundidad resolucion | I | Operadores GPR, ingenieros que evaluan equipos, alumnos de mentoria | Calculadora de viabilidad / mentoria | Mantener | Mejor enlazado de la biblioteca (8 entrantes). Captura busquedas de operadores en fase de aprendizaje. Ahora enlaza a la mentoria como recurso de profundizacion. |
| `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/` | Articulo | Biblioteca | `suelos dificiles para GPR` | arcilla georradar, conductividad suelo GPR, limitaciones GPR terreno, cuando no funciona el georradar | I | Ingenieros geotecnicos, especialistas en suelos, clientes evaluando viabilidad | Calculadora de viabilidad | Mantener | Angulo complementario al de profundidad y humedad. Sin riesgo de canibalizacion si se mantiene el enfoque en "tipos de suelo" vs "por que" (profundidad) vs "el efecto específico" (humedad). |
| `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` | Articulo | Biblioteca | `cuando usar georradar` | GPR antes de excavar, que detecta el georradar, necesito georradar, prospeccion GPR decision, cuándo contratar GPR | I + C | Tomadores de decision antes de contratar: jefes de obra, mandantes, ingenieros de proyecto | Arbol de decision / WhatsApp | Mantener | Articulo Canon #1 y de mayor potencial TOFU. Mayor solapamiento potencial con `/herramientas/necesito-gpr/` (mismo angulo, diferente formato). Sin riesgo de canibalizacion real porque el articulo responde el "por que y cuando" y la herramienta da una respuesta categorica ("si / no"). Monitorear si Google los agrupa. |
| `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` | Articulo | Biblioteca | `profundidad georradar` | hasta que profundidad detecta el GPR, profundidad GPR terreno, alcance georradar suelo, rango de deteccion GPR | I | Clientes antes de contratar, ingenieros evaluando viabilidad del metodo | Calculadora de viabilidad | Mantener | Keywords de alto volumen relativo para el nicho ("hasta que profundidad"). Bien posicionado para capturar busquedas TOFU de evaluacion previa. Ahora enlaza a humedad como articulo hermano. |
| `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/` | Articulo | Biblioteca | `analisis senal GPR` | interpretacion cuantitativa GPR, parametros senal georradar, atenuacion senal GPR, informacion cuantitativa georradar | I | Profesionales con conocimiento tecnico previo que necesitan ir mas alla de la lectura visual | WhatsApp / solicitar estudio | Optimizar | Intención MOFU (middle of funnel): menor volumen pero leads mas calificados. Podria enriquecer el titulo para incluir la pregunta implicita: "Que puede decirnos una senal GPR además de mostrar una imagen del subsuelo". Ahora tiene 5 entrantes contextuales (incluido /utilities/). |
| `/biblioteca/como-afecta-la-humedad-al-georradar/` | Articulo | Biblioteca | `humedad suelo georradar` | lluvia GPR, nivel freatico GPR, conductividad humedad suelo GPR, efecto humedad prospeccion | I | Clientes con condiciones de terreno especificas: zonas con lluvia frecuente, napas superficiales | Calculadora de viabilidad / contacto | Optimizar | Articulo mas reciente con menor perfil de busqueda establecido. Keyword de cola larga especifica. Potencial de busquedas estacionales (temporada de lluvia). Ahora con 4 entrantes contextuales tras correccion de enlazado. Meta description podria ser mas especifica sobre el mecanismo (conductividad, no humedad sola). |
| `/glosario/` | Glosario | Glosario | `glosario GPR` | terminos georradar, definiciones GPR, que es radargrama, que es hiperbola GPR, vocabulario georradar | I | Profesionales nuevos al tema, ingenieros que interpretan informes GPR de terceros | Articulos de biblioteca / herramientas | Expandir | Activo Canon en estado OPTIMIZACION. 10 términos funcionan bien para los activos actuales. Expandir a medida que se publiquen nuevos articulos con terminos nuevos. BACKLOG: validacion de "mejor recurso en español" pendiente (requiere revision humana). |
| `/herramientas/` | Indice | Herramientas | `herramientas GPR online` | calculadora georradar, arbol de decision GPR, recursos interactivos GPR | I + T | Ingenieros y profesionales que prefieren auto-evaluacion antes de contactar | Usar herramientas | Mantener | Pagina indice con funcion de distribucion. Bien enlazada. No requiere optimizacion SEO propia: su valor es de UX y de enlazado interno hacia las tres herramientas hijas. |
| `/herramientas/calculadora-profundidad/` | Herramienta | Herramientas | `calculadora viabilidad GPR` | calculadora profundidad georradar, estimar profundidad GPR, viabilidad estudio GPR, herramienta GPR online | T | Ingenieros evaluando si su proyecto es viable para GPR antes de contactar | Resultado de viabilidad → WhatsApp | Revisar | El slug `/calculadora-profundidad/` ya no refleja el alcance real de la herramienta (es de viabilidad general, no solo profundidad). Evaluar si conviene un redirect a `/calculadora-viabilidad/` para alinear keyword con URL. Cambio de URL requeriria ADR por impacto SEO. |
| `/herramientas/necesito-gpr/` | Herramienta | Herramientas | `necesito un estudio GPR` | cuando contratar georradar, arbol de decision GPR, checklist GPR, como saber si necesito georradar | I + T | Tomadores de decision en fase de evaluacion previa | Arbol de decision → WhatsApp | Mantener | Posible solapamiento tematico con `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` (ambos responden "cuando necesito GPR"). Diferenciados por formato: articulo editorial con matices vs. herramienta de respuesta categorica. Riesgo bajo, pero monitorear si Google los trata como duplicados. |
| `/herramientas/selector-antena/` | Herramienta | Herramientas | `selector antena GPR` | que antena GPR usar, elegir antena georradar, frecuencia antena GPR recomendacion, herramienta seleccion antena | T | Operadores GPR con equipo propio, ingenieros con acceso a equipo | Resultado de seleccion → WhatsApp | Revisar | Solapamiento tematico con `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`. El articulo explica la fisica; la herramienta da una recomendacion. Si la herramienta hace recomendaciones especificas de antena, revisar que no exponga criterio propietario (Nivel C de `CONTENT_STRATEGY.md §1.5`). Riesgo medio de canibalizacion si Google los agrupa bajo la misma query. |
| `/mentoria/` | Mentoria | Mentoria | `mentoria GPR Chile` | formacion georradar especializada, curso GPR Chile, mentoria georradar online, capacitacion GPR 1a1 | C | Ingenieros, geologos, inspectores tecnicos con GPR propio o que supervisan estudios GPR | WhatsApp / correo | Optimizar | Pagina corregida (2026-07-05): ahora tiene 1 enlace contextual saliente y 1 entrante. Keyword mas especifica que podria incluir el pais: "mentoria GPR online Chile". Meta description podria enfatizar el perfil del alumno (profesional tecnico, no principiante) para reducir leads no calificados. |

---

## Resumen de estados

| Estado | Paginas | URLs |
|--------|---------|------|
| Mantener | 11 | `/`, `/mineria/`, `/utilities/`, `/forense/`, `/mineria/casos/socavones-espesador-t5/`, `/forense/casos/cip-san-joaquin-cerro-chena/`, `/forense/casos/sitio-iran-3037-venda-sexy/`, `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/`, `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/`, `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/`, `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/`, `/herramientas/`, `/herramientas/necesito-gpr/` |
| Optimizar | 7 | `/mineria/`, `/construccion/`, `/utilities/casos/accesos-metro-de-santiago/`, `/construccion/casos/prospeccion-aeropuerto-chacalluta/`, `/biblioteca/que-puede-decirnos-una-senal-gpr-ademas-de-una-imagen/`, `/biblioteca/como-afecta-la-humedad-al-georradar/`, `/mentoria/` |
| Expandir | 2 | `/biblioteca/`, `/glosario/` |
| Revisar | 2 | `/herramientas/calculadora-profundidad/`, `/herramientas/selector-antena/` |
| Fusionar | 0 | Ninguna pagina justifica fusion en este momento. |

---

## Riesgos de canibalizacion identificados

### Riesgo bajo

| Par de paginas | Razon del solapamiento | Por que no es canibalizacion real |
|----------------|------------------------|-----------------------------------|
| `/biblioteca/como-tomar-decisiones-antes-de-intervenir-el-subsuelo/` vs. `/herramientas/necesito-gpr/` | Ambas responden "cuando necesito un GPR" | Diferente formato: editorial con matices vs. herramienta con resultado categorico. Intenciones distintas: lectura vs. evaluacion activa. |
| `/biblioteca/que-hace-que-un-suelo-sea-dificil-para-el-gpr/` vs. `/biblioteca/por-que-la-profundidad-del-georradar-depende-del-terreno/` vs. `/biblioteca/como-afecta-la-humedad-al-georradar/` | Los tres tratan limitaciones del GPR por condiciones del suelo | Angulos distintos: tipos de suelo limitante / por que la profundidad varia / efecto especifico de la humedad. Google deberia distinguirlos por angulo de busqueda. Monitorear si alguno desplaza a otro en SERP. |

### Riesgo medio

| Par de paginas | Razon del solapamiento | Accion recomendada |
|----------------|------------------------|-------------------|
| `/herramientas/selector-antena/` vs. `/biblioteca/como-influye-la-frecuencia-de-antena-gpr/` | Ambas tratan seleccion de antena GPR segun frecuencia | Verificar que el selector no reproduzca el contenido explicativo del articulo. Diferenciar el selector como "herramienta de decision" y el articulo como "contexto fisico". Si Google los agrupa, considerar si el selector deberia enlazarse solo desde el articulo y no indexarse independientemente. Requiere decision editorial antes de actuar. |

### Sin riesgo de canibalizacion

- Las landings de sector (`/mineria/`, `/utilities/`, `/construccion/`, `/forense/`) vs. la home: jerarquia clara, keywords diferenciadas por sector.
- Las paginas de caso real vs. sus landings de sector: las paginas de caso son evidencia especifica; las landings son paginas de servicio general. Google las trata como jerarquia, no competencia.

---

## Prioridades de optimizacion sugeridas

En orden de impacto estimado:

1. **`/construccion/`** (optimizar keyword): Es la landing con keyword mas generica del sitio. Diferenciacion urgente para evitar solapamiento con la home.
2. **`/herramientas/selector-antena/`** (revisar criterio): Verificar que no exponga criterio propietario antes de cualquier optimizacion SEO de la herramienta.
3. **`/herramientas/calculadora-profundidad/`** (revisar slug): Evaluar si el slug refleja la herramienta real. Cambio de URL requiere ADR.
4. **`/biblioteca/como-afecta-la-humedad-al-georradar/`** (optimizar meta description): Mencionar explicitamente el mecanismo (conductividad) para capturar busquedas mas especificas.
5. **`/mentoria/`** (optimizar keyword): Incluir el pais en la keyword principal y revisar la meta description para filtrar leads no calificados.
6. **`/biblioteca/`** (expandir): Hacer el indice mas descriptivo para mejorar CTR desde SERP.
7. **`/glosario/`** (expandir): Agregar nuevos terminos a medida que se publiquen articulos. Pendiente validacion humana para declarar Canon MADURO.

---

## Notas metodologicas

- Esta linea base no incluye datos de trafico real, CTR ni posicion promedio en SERP: requeriria integracion con Google Search Console, que no esta disponible en este contexto.
- Las keywords principales y secundarias se determinaron a partir del contenido real de cada pagina, su meta description, su H1 y los terminos usados en el texto principal.
- El volumen de busqueda no fue consultado directamente (sin acceso a herramientas como Semrush, Ahrefs o GSC). Las estimaciones de volumen ("alto / medio / bajo") son inferencias basadas en generalidad del termino y comportamiento tipico del sector B2B de GPR en Chile.
- Proxima revision recomendada: al publicar un activo nuevo, al cambiar una URL, o trimestralmente si se integra GSC.
