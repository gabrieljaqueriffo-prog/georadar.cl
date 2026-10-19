# Monitor GPR de Pavimentos

Demo técnica de propuesta: https://georadar.cl/herramientas/monitor-gpr-avo1/

La página tiene `noindex, nofollow` y no se incorpora al sitemap, navegación ni catálogo de herramientas. El acceso es directo y público para quien conozca la URL.

## Arquitectura

- `herramientas/monitor-gpr-avo1/index.html`: estructura original adaptada a la tipografía y colores de ATLAS, avisos técnicos y módulos.
- `assets/monitor-gpr/monitor.css`: presentación y adaptación a pantallas pequeñas.
- `assets/monitor-gpr/monitor.js`: selección de anomalías, ficha, referencia y matriz histórica.
- `assets/monitor-gpr/avo1.json`: geometría, identificador, inventario ficticio, estados y referencias de radargramas.
- `assets/monitor-gpr/radargrama-referencia-*.jpg`: tres JPEG extraídos del HTML aportado, sin transformación de sus bytes.

Para otro proyecto, crear una configuración y página propias, parametrizar la URL de carga y reutilizar el renderizador. Las campañas C03/C04 se muestran pendientes: la demo no inventa mediciones futuras. La implementación de ingestión de campañas reales y gestión documental corresponde a una fase posterior.

## Verificación

`npm run build` genera el sitio. Servir `_site` por HTTP y ejecutar `node scripts/check-monitor-gpr.cjs` con Playwright disponible y Chrome instalado. `MONITOR_URL` permite verificar la publicación; por defecto usa localhost:8765. Las capturas se guardan en `output/monitor-gpr-avo1/`, con escala 2 para incorporación al PDF.

La prueba comprueba ocho selecciones, matriz de ocho filas, tres referencias, imágenes cargadas, directiva robots y ausencia de desbordamiento a 1600, 1280, 820 y 390 px. El comparador conserva las imágenes originales y aclara que no son campañas repetidas de AVO 1.
