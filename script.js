/**
 * ELECTROAIRE — Landing Page Script
 * Version: 1.0.0 | SOULWARE Software Factory
 */

/* ================================
   1. HEADER: Sticky scroll + hamburger
   ================================ */
const header = document.getElementById('header');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.header__mobile-link');

// Sticky header shadow
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });

// Hamburger toggle
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

/* ================================
   2. SMOOTH SCROLL for nav links
   ================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const headerHeight = header.offsetHeight;
    const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    window.scrollTo({ top: targetPos, behavior: 'smooth' });
  });
});

/* ================================
   3. SIMULADOR INTERACTIVO
   ================================ */
const serviceDetails = {
  'Electricidad': [
    'Instalación eléctrica nueva (vivienda)',
    'Instalación eléctrica nueva (comercio)',
    'Normalización de tablero eléctrico',
    'Detección y reparación de falla eléctrica',
    'Recableado parcial o total',
    'Montaje de iluminación LED (interior)',
    'Montaje de iluminación LED (fachada/exterior)',
    'Puesta a tierra normalizada',
    'Balanceo de fases en tablero trifásico',
  ],
  'Aire Acondicionado': [
    'Instalación de Split (hasta 3200 frigorías)',
    'Instalación de Split Inverter (4500+ frigorías)',
    'Preinstalación en obra (cañerías y desagüe)',
    'Desinstalación y traslado de unidad',
    'Diagnóstico y revisión de presiones',
    'Carga de gas refrigerante',
    'Mantenimiento preventivo de equipo',
    'Reparación de heladera doméstica',
    'Reparación de heladera / freezer comercial',
  ],
  'Cámaras CCTV': [
    'Instalación de sistema 4 cámaras HD',
    'Instalación de sistema 8 cámaras HD',
    'Instalación de sistema 16 cámaras HD',
    'Cableado y canalización estética',
    'Configuración de monitoreo remoto (celular)',
    'Mantenimiento de sistema CCTV existente',
    'Reemplazo de fuente / grabador (DVR/NVR)',
  ],
};

const simButtons = document.querySelectorAll('.sim-btn');
const simDetailSelect = document.getElementById('sim-detail');
const simZonaSelect = document.getElementById('sim-zona');
const simPreviewBox = document.getElementById('sim-preview-box');
const simSendBtn = document.getElementById('sim-send-btn');

let selectedService = '';
let selectedDetail = '';
let selectedZona = '';

function updateSimPreview() {
  if (!selectedService || !selectedDetail || !selectedZona) {
    simPreviewBox.innerHTML = '<p class="sim-preview__placeholder">Completá los pasos anteriores para ver el resumen de tu consulta.</p>';
    simSendBtn.setAttribute('aria-disabled', 'true');
    simSendBtn.style.opacity = '0.6';
    simSendBtn.style.pointerEvents = 'none';
    return;
  }

  const msg = `Hola Maximiliano, me comunico desde la web de Electroaire.

🔧 *Servicio:* ${selectedService}
📋 *Detalle:* ${selectedDetail}
📍 *Zona:* ${selectedZona}

Quisiera recibir un presupuesto estimado. ¡Muchas gracias!`;

  simPreviewBox.innerHTML = `<p class="sim-preview__content"><strong>Para:</strong> Maximiliano Pagano (261 251 0379)\n\n${msg}</p>`;

  const waUrl = `https://wa.me/5492612510379?text=${encodeURIComponent(msg)}`;
  simSendBtn.setAttribute('href', waUrl);
  simSendBtn.removeAttribute('aria-disabled');
  simSendBtn.style.opacity = '1';
  simSendBtn.style.pointerEvents = 'auto';
}

function updateDetailOptions(service) {
  simDetailSelect.innerHTML = '';
  const defaultOpt = document.createElement('option');
  defaultOpt.value = '';
  defaultOpt.textContent = '— Seleccioná el tipo de trabajo —';
  simDetailSelect.appendChild(defaultOpt);

  (serviceDetails[service] || []).forEach(detail => {
    const opt = document.createElement('option');
    opt.value = detail;
    opt.textContent = detail;
    simDetailSelect.appendChild(opt);
  });

  selectedDetail = '';
  updateSimPreview();
}

simButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    simButtons.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    selectedService = btn.dataset.service;
    updateDetailOptions(selectedService);
  });
});

simDetailSelect.addEventListener('change', () => {
  selectedDetail = simDetailSelect.value;
  updateSimPreview();
});

simZonaSelect.addEventListener('change', () => {
  selectedZona = simZonaSelect.value;
  updateSimPreview();
});

/* ================================
   4. SCROLL REVEAL ANIMATIONS
   ================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -48px 0px',
});

// Elements to animate on scroll
const animatables = document.querySelectorAll(
  '.trust-bar__card, .service-card, .abonos__card, .testi-card, .compare-card, .abonos__content'
);

animatables.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObserver.observe(el);
});

/* ================================
   5. COUNTER ANIMATION (trust bar titles)
   ================================ */
// Stagger animation for trust bar items
const trustItems = document.querySelectorAll('.trust-bar__item');
const trustObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    trustItems.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, i * 100);
    });
    trustObserver.disconnect();
  }
}, { threshold: 0.2 });

trustItems.forEach(item => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(16px)';
  item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
});

const trustBar = document.querySelector('.trust-bar__card');
if (trustBar) trustObserver.observe(trustBar);

/* ================================
   6. SERVICE CARDS STAGGER
   ================================ */
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    serviceCards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 120);
    });
    serviceObserver.disconnect();
  }
}, { threshold: 0.1 });

serviceCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(32px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.22s ease';
});

const servicesSection = document.querySelector('.servicios__grid');
if (servicesSection) serviceObserver.observe(servicesSection);

/* ================================
   7. WA FLOAT PULSE ANIMATION
   ================================ */
const waFloat = document.getElementById('wa-float-btn');
if (waFloat) {
  // Add pulse ring
  const pulse = document.createElement('span');
  pulse.style.cssText = `
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 3px solid rgba(37, 211, 102, 0.6);
    animation: wa-pulse 2.5s ease-out infinite;
    pointer-events: none;
  `;
  waFloat.style.position = 'relative';
  waFloat.appendChild(pulse);

  // Inject keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes wa-pulse {
      0% { transform: scale(1); opacity: 0.8; }
      70% { transform: scale(1.55); opacity: 0; }
      100% { transform: scale(1.55); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

/* ================================
   8. ACTIVE NAV LINK on scroll
   ================================ */
const navLinks = document.querySelectorAll('.header__nav-link');
const sections = ['inicio', 'por-que', 'servicios', 'abonos', 'calculador', 'opiniones'];

const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` 
          ? 'white' : '';
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) activeSectionObserver.observe(el);
});
