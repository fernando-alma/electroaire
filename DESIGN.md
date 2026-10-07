# DESIGN SYSTEM: ELECTROAIRE
## Identidad visual, tokens y componentes

*Versión 2.0.0 · Octubre 2026*
*Cliente: Electroaire (Maximiliano Pagano) · Estrategia y desarrollo: SOULWARE*

Cambios respecto de v1.0: logotipo redibujado con versiones monocromáticas y avatar; azul eléctrico #1F6FEB (tomado de la placa del cliente); naranja de texto #D96200 para fondos claros; escala de placas de Instagram con tamaños definidos; plantillas A, B y C reajustadas para trabajar sin fotografías; reglas de redacción y de afirmaciones; se quitan referencias a normas no confirmadas (IRAM) y a servicios no ofrecidos (guardia 24 h).

---

## 1. Marca

**Nombre:** Electroaire (una palabra, "E" mayúscula, resto en minúscula en texto corrido; ELECTROAIRE en mayúsculas solo en el logotipo).
**Descriptor:** Instalación eléctrica y refrigeración.
**Lema:** Instalamos, reparamos y solucionamos.
**Zona:** Gran Mendoza. **WhatsApp:** 261 251 0379. **Instagram:** @electroaire.mza.

### 1.1 Logotipo

Símbolo: casa (trazo azul con degradado #1F6FEB a #00A3E0), rayo naranja (#FFA040 a #FF7A00) y copo de seis brazos (#2F80F5). El copo y el rayo no se tocan; mantener al menos 4 unidades de la retícula de 120 entre ambos.

Wordmark: Montserrat 800 cursiva, tracking -0.02em. "ELECTRO" en navy (o blanco sobre oscuro), "AIRE" en #0D5BD6 (o #3D8BFF sobre oscuro).

Versiones:
- Principal sobre claro y sobre navy.
- Monocromática blanca (sobre azul, navy o foto) y navy (sobre claro, impresiones a una tinta).
- Avatar: símbolo solo, centrado, ocupa 60% del lienzo, fondo navy o blanco. Exportar a 1080×1080.
- Favicon: símbolo solo sobre navy, 32 y 180 px.

Reglas: espacio libre mínimo igual a la altura de la "E". Símbolo mínimo 24 px. Descriptor se omite bajo 160 px de ancho. No rotar, no estirar, no aplicar sombras, no cambiar los colores del rayo.

## 2. Color

```json
{
  "brand": {
    "navy":   { "deep": "#071229", "base": "#0B1B3D", "light": "#152E66" },
    "blue":   { "electric": "#1F6FEB", "bright": "#2F80F5", "base": "#0D5BD6", "deep": "#0D3B82", "hover": "#0A2F68", "onDark": "#3D8BFF" },
    "cyan":   { "dark": "#0082B4", "base": "#00A3E0", "light": "#33B5E6", "soft": "#E6F6FC" },
    "orange": { "dark": "#D96200", "base": "#FF7A00", "light": "#FFA040", "soft": "#FFF2E6" }
  },
  "surface": { "canvas": "#F4F7FB", "white": "#FFFFFF", "subtle": "#E9EFF7", "border": "#D2DEED" },
  "text": { "primary": "#0B1B3D", "secondary": "#475569", "muted": "#8A99AD", "inverse": "#FFFFFF" },
  "feedback": { "success": "#10B981", "warning": "#F59E0B", "error": "#EF4444", "whatsapp": "#25D366" }
}
```

Roles:
- **Navy base:** fondos oscuros (header, footer, placas A, banners de cierre) y texto principal.
- **Azul eléctrico y azul marca:** barras de placas, acentos, enlaces, botones secundarios.
- **Cian:** pilar de refrigeración y seguridad electrónica; bordes de píldoras.
- **Naranja:** pilar de electricidad y botones de acción principal. Texto naranja sobre claro usa #D96200.
- **Canvas / blanco:** fondos de sitio, tarjetas, placas B.
- Contraste: texto sobre fondos con mínimo 4.5:1. Texto blanco sobre #FF7A00 no cumple; usar navy sobre naranja.

## 3. Tipografía

- **Montserrat** (títulos, placas, botones, etiquetas): 500, 700, 800 y 800 cursiva.
- **Inter** (cuerpo, tablas, copys): 400, 600.

```css
--text-display-1: 800 clamp(32px, 5vw, 48px)/1.1 'Montserrat';
--text-heading-1: 800 clamp(26px, 4vw, 34px)/1.2 'Montserrat';
--text-heading-2: 700 24px/1.3 'Montserrat';
--text-heading-3: 700 18px/1.35 'Montserrat';
--text-body:      400 16px/1.6 'Inter';
--text-body-bold: 600 16px/1.6 'Inter';
--text-caption:   500 12px/1.4 'Inter';
--text-label:     800 12px/1 'Montserrat';  /* mayúsculas, tracking 0.14em */
```

Placas de Instagram (1080×1350): titular 80 px (64 px si supera 120 caracteres), etiqueta 26 px, barra inferior 28 px. Palabras clave del titular en color de acento.

## 4. Forma y elevación

```css
--radius-sm: 6px;  --radius-md: 12px;  --radius-lg: 20px;  --radius-pill: 9999px;
--shadow-card: 0 4px 16px -2px rgba(11,27,61,.08);
--shadow-card-hover: 0 10px 25px -4px rgba(11,27,61,.15);
--shadow-cta-orange: 0 8px 24px -2px rgba(255,122,0,.35);
--shadow-cta-blue: 0 8px 24px -2px rgba(31,111,235,.35);
```

Espaciado en grilla de 8 px. Contenedor máximo 1200 px.

## 5. Iconografía

Retícula 24×24, trazo 2 px, puntas redondeadas, estilo lineal. No usar emoji en el sitio ni en las placas. En el texto de los copys de Instagram sí se admiten, con moderación.
- Electricidad: rayo, disyuntor, toma con tierra.
- Refrigeración: copo, split con flujo, manómetros.
- Seguridad: cámara domo y bullet.
- Sellos: escudo con tilde (garantía), engranaje (materiales), reloj (rapidez), persona (atención).

## 6. Componentes

**Píldora de categoría:** fondo navy, borde 2 px del color del pilar, texto blanco Montserrat 800 12–13 px, tracking 0.08em. Eléctrica #FF7A00; refrigeración y seguridad #00A3E0.

**Tarjeta de servicio:** fondo blanco, borde 1 px #D2DEED, radio 16 px, padding 24 px, píldora arriba, lista con tildes circulares azules, botón de consulta a WhatsApp con mensaje precargado.

**Barra de confianza:** cuatro módulos separados por líneas finas. Textos: Trabajo garantizado / Respaldo formal por escrito. Materiales de calidad / Insumos normalizados. Respuesta rápida / Puntualidad en diagnósticos. Atención personalizada / Asesoramiento técnico directo.

**Botones:**
- Primario: fondo #FF7A00, texto navy, Montserrat 800 14 px, mayúsculas, padding 14×28, píldora, sombra naranja.
- WhatsApp: fondo #25D366, texto navy. "Escribinos al 261 251 0379".
- Secundario: borde 2 px #0D5BD6, texto #0D5BD6; sobre oscuro, borde y texto blancos.

## 7. Instagram

Formatos: carrusel o imagen 1080×1350 (4:5, recomendado); 1080×1080; historias y portadas de reels 1080×1920. Exportar siempre PNG.

Estructura de carrusel: portada (logo, etiqueta, titular, "Deslizá"), placas de contenido (logo reducido, contador 01/05, etiqueta, texto), cierre (logo, mensaje, botón con teléfono, lema). Barra inferior fija con "Trabajo formal con garantía por escrito" y el teléfono.

- **Plantilla A, educación técnica:** fondo navy con degradado a #071229, formas diagonales azules arriba a la derecha, acento naranja, barra inferior azul eléctrico.
- **Plantilla B, servicios y captación:** fondo #F4F7FB, formas navy y azul, acento #0D5BD6 o #D96200, barra inferior navy.
- **Plantilla C, prueba social:** fondo #F4F7FB, tarjeta blanca con sombra 0 12px 30px rgba(11,27,61,.10), estrellas en cian, texto entrecomillado en Inter cursiva. Se usa solo con reseñas reales de Google.
- Fotografía: opcional y de apoyo, dentro de un recuadro con bordes redondeados de 20 px. No se usan fotos de baja calidad ni ilustraciones que simulen casos reales.

Historias destacadas: círculo de 500 px, fondo navy, aro cian, ícono lineal blanco. Servicios, Garantía, Trabajos, Opiniones, Empresas.

Horario sugerido de publicación: 19:00. Frecuencia: martes y viernes.

## 8. Sitio web

Flujo de conversión:
```
Header fijo → Hero → Barra de confianza → Servicios (3) → Cómo trabajamos →
Abonos institucionales → Simulador de consulta → [Reseñas, cuando existan] → CTA final → Footer
```
- Móvil primero (390 px), contenedor 1200 px en escritorio.
- Un botón de WhatsApp fijo en móvil.
- El simulador no muestra precios; arma un mensaje de WhatsApp con servicio, detalle y zona.
- Galería de antes y después y reseñas se incorporan cuando haya fotos de calidad y reseñas verificadas de Google. Hasta entonces no se muestran ilustraciones ni testimonios de ejemplo.
- Metadatos: título, descripción, Open Graph con logo, favicon 32 y 180.

## 9. Tono de voz y reglas de contenido

- Voseo rioplatense, directo, técnico sin jerga innecesaria. Frases cortas.
- Se explica el porqué de cada práctica (vacío con bomba, polaridad, protecciones).
- No se critica a competidores por nombre; se educa sobre lo que conviene exigir.
- Afirmaciones permitidas: garantía por escrito de 60 días sobre mano de obra y materiales que suministra; presupuesto formal válido por 15 días; vacío con bomba y manómetros; control de polaridad; materiales normalizados; reparación de equipos de refrigeración en general; cámaras CCTV con visualización desde el celular.
- No afirmar: normas específicas (IRAM u otras) mientras no estén confirmadas; guardia o atención 24 h; relevamientos gratuitos; precios; reseñas o cantidad de estrellas sin respaldo.
- Teléfono siempre como 261 251 0379.

## 10. Papelería

- **Tarjeta 85×55 mm.** Frente navy con logotipo completo y lema. Dorso blanco: "¿Cómo fue tu experiencia?", cinco estrellas cian, QR de 32×32 mm al perfil de reseñas de Google, texto de invitación, WhatsApp y Mendoza.
- **Presupuesto A4.** Logotipo a la izquierda, número y fecha a la derecha, cajas de datos del cliente y del servicio, tabla con cabecera #0D3B82, condiciones: validez de 15 días, materiales normalizados, garantía por escrito con firma y aclaración.
- **Garantía y contrato.** Nombre de marca "Electroaire", mismo encabezado, tipografías y colores del sistema.
