/* ============================================================
   CAROUSEL.JS — Homepage project carousel
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carousel-track');
  if (!track) return;

  const items   = track.querySelectorAll('.carousel-item');
  const dotsCon = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const visible = window.innerWidth < 900 ? 1 : 3;
  const total   = Math.ceil(items.length / visible);
  let current   = 0, autoTimer;

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsCon.appendChild(dot);
  }

  function goTo(n) {
    current = (n + total) % total;
    const w = items[0].offsetWidth + 32;
    track.style.transform = `translateX(-${current * visible * w}px)`;
    dotsCon.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function start() { autoTimer = setInterval(() => goTo(current + 1), 4500); }
  function stop()  { clearInterval(autoTimer); }

  prevBtn.addEventListener('click', () => { stop(); goTo(current - 1); start(); });
  nextBtn.addEventListener('click', () => { stop(); goTo(current + 1); start(); });
  start();
  window.addEventListener('resize', () => goTo(current));
});
