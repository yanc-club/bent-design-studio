/* ============================================================
   ANIMATIONS.JS — All GSAP scroll-triggered animations
   Call initAnimations() on each page after load.
   ============================================================ */

function initAnimations() {
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Generic reveal
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%' }
    });
  });
  gsap.utils.toArray('.reveal-left').forEach(el => {
    gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%' }
    });
  });
  gsap.utils.toArray('.reveal-right').forEach(el => {
    gsap.to(el, { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 80%' }
    });
  });

  // About image clip-path reveal
  if (document.querySelector('.about-img-main')) {
    gsap.to('.about-img-main', {
      clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.inOut',
      scrollTrigger: { trigger: '.about', start: 'top 70%' }
    });
    gsap.to('.about-img-accent', {
      clipPath: 'inset(0% 0 0 0)', duration: 1.2, delay: 0.3, ease: 'power3.inOut',
      scrollTrigger: { trigger: '.about', start: 'top 70%' }
    });
  }

  // Stats counter
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.textContent);
    const suffix = el.textContent.replace(/[0-9]/g, '');
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        let count = 0; const step = target / 50;
        const timer = setInterval(() => {
          count = Math.min(count + step, target);
          el.textContent = Math.floor(count) + suffix;
          if (count >= target) clearInterval(timer);
        }, 30);
      }
    });
  });

  // Parallax strip
  const bg = document.getElementById('parallax-bg');
  if (bg) {
    ScrollTrigger.create({
      trigger: '.image-strip', start: 'top bottom', end: 'bottom top',
      onUpdate: self => { bg.style.transform = `translateY(${self.progress * 15}%)`; }
    });
  }

  // Why cards stagger
  const whyCards = document.querySelectorAll('.why-card');
  if (whyCards.length) {
    gsap.from(whyCards, {
      opacity: 0, y: 40, duration: .8, stagger: .12, ease: 'power3.out',
      scrollTrigger: { trigger: '.why-grid', start: 'top 80%' }
    });
  }
}
