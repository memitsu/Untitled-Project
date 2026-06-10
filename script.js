function toggleFaq(el) {
  el.classList.toggle('open');
  el.nextElementSibling.classList.toggle('open');
}

document.querySelectorAll('#meista .meista-grid > div, #yhteystiedot .yhteys-grid > div').forEach(el => {
  el.classList.add('animate-in');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.palvelu-card, .tiimi-henkilo, .faq-item, .arvot-lista li, .animate-in').forEach((el, i) => {
  el.style.transitionDelay = (i * 0.05) + 's';
  observer.observe(el);
});