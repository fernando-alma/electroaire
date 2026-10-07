/* ELECTROAIRE · Landing · simulador de consulta por WhatsApp */
const WA = '5492612510379';
const detalles = {
  'Electricidad': ['Instalación eléctrica nueva', 'Normalización o armado de tablero', 'Detección y reparación de fallas', 'Cableado y recableado', 'Iluminación'],
  'Refrigeración y climatización': ['Instalación de aire acondicionado', 'Preinstalación en obra', 'Desinstalación de equipo', 'Revisión y diagnóstico', 'Reparación de equipo de refrigeración', 'Mantenimiento preventivo'],
  'Cámaras de seguridad': ['Instalación de sistema de cámaras', 'Canalización y cableado', 'Configuración de visualización en el celular', 'Mantenimiento de sistema existente']
};

const btns = document.querySelectorAll('.sim__btn');
const selDetalle = document.getElementById('sim-detalle');
const selZona = document.getElementById('sim-zona');
const preview = document.getElementById('sim-preview');
const send = document.getElementById('sim-send');
let servicio = '';

function actualizar() {
  const detalle = selDetalle.value, zona = selZona.value;
  if (!servicio || !detalle || !zona) {
    preview.textContent = 'Completá los tres pasos para ver tu mensaje.';
    send.setAttribute('aria-disabled', 'true');
    send.setAttribute('href', '#simulador');
    return;
  }
  const msg = `Hola, me comunico desde la web de Electroaire.\nServicio: ${servicio}\nTrabajo: ${detalle}\nZona: ${zona}\nQuisiera coordinar una visita y recibir un presupuesto.`;
  preview.textContent = msg;
  send.setAttribute('href', `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`);
  send.removeAttribute('aria-disabled');
}

btns.forEach(b => b.addEventListener('click', () => {
  btns.forEach(x => { x.classList.remove('active'); x.setAttribute('aria-pressed', 'false'); });
  b.classList.add('active');
  b.setAttribute('aria-pressed', 'true');
  servicio = b.dataset.service;
  selDetalle.innerHTML = '<option value="">Elegí el trabajo</option>' +
    detalles[servicio].map(d => `<option value="${d}">${d}</option>`).join('');
  actualizar();
}));
selDetalle.addEventListener('change', actualizar);
selZona.addEventListener('change', actualizar);
