const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
const setNav = (open) => {
  nav.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
navToggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));
window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });

const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}
