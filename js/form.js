/* ============================================================
   FORM.JS — Contact form + testimonial slider
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── CONTACT FORM ──
  const form    = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      success.classList.add('show');

      // TO USE FORMSPREE: uncomment and add your ID
      /*
      fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(r => {
        if (r.ok) { form.style.display='none'; success.classList.add('show'); }
      });
      */
    });
  }

  // ── TESTIMONIAL SLIDER ──
  const slides = document.querySelectorAll('.testi-slide');
  const dots   = document.querySelectorAll('.testi-dot');
  if (!slides.length) return;
  let cur = 0;

  function showSlide(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }

  dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
  setInterval(() => showSlide(cur + 1), 5000);

});
