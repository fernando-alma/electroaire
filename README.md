# Electroaire — Landing Page Comercial

Prototipo de alta fidelidad e interactivo para la landing page comercial de **Electroaire** (Mendoza, Argentina), empresa especializada en ingeniería eléctrica, climatización integral (HVAC) y sistemas de seguridad electrónica (CCTV).

---

## ⚡ Características Principales

- **Diseño Responsive & Mobile-First**: Optimizado para pantallas de 390px (móvil) hasta 1440px+ (desktop con contenedor de 1200px).
- **Sistema de Diseño Oficial**: Implementación rigurosa de design tokens (paleta Navy Base, Cian Técnico, Naranja Alerta y WhatsApp Directo).
- **Simulador Interactivo de Servicios**: Selector dinámico de rubro, detalle específico y zona en el Gran Mendoza que genera un mensaje listo para WhatsApp con codificación URL estándar.
- **Galería Comparativa Antes / Después**: Tarjetas interactivas con SVG inline para visualizar intervenciones técnicas reales (tableros normalizados y climatización inverter).
- **Catálogo Técnico & Abonos Institucionales**: Estructura de servicios categorizados con badges de estado y cotización a medida.
- **Arquitectura Limpia**: Desarrollado en HTML5 semántico, Vanilla CSS y JavaScript moderno sin dependencias externas pesadas.

---

## 🛠️ Tecnologías

- **HTML5 Semántico**: Microformatos, accesibilidad (ARIA) y estructura jerárquica limpia.
- **CSS3 Puro**: Custom Properties (Variables CSS), CSS Grid, Flexbox, animaciones por keyframes y microinteracciones de estado.
- **JavaScript (ES6+)**: `IntersectionObserver` para scroll-reveal escalonado, control de cabecera fija y lógica reactiva del simulador.
- **Tipografía**: Google Fonts (`Montserrat` para títulos y `Inter` para cuerpo de texto).

---

## 📁 Estructura del Proyecto

```text
├── index.html        # Estructura semántica completa (10 secciones)
├── style.css         # Design tokens, layouts, utilidades y media queries
├── script.js         # Lógica interactiva, simulador y observers
├── DESIGN.md         # Documento de especificación del sistema de diseño
└── README.md         # Documentación del repositorio
```

---

## 🚀 Visualización Local

Para ver el proyecto en tu navegador:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/fernando-alma/electroaire.git
   ```
2. Abre `index.html` directamente en tu navegador o utiliza una extensión como **Live Server** en VS Code.

---

## 👨‍💻 Créditos & Desarrollo

Desarrollado con estándares de ingeniería de software por **SOULWARE Software Factory**.
