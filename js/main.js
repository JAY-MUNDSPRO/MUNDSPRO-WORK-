document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navPanel = document.getElementById('navPanel');

navToggle.addEventListener('click', () => {
  const isOpen = navPanel.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navPanel.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navPanel.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formNote.textContent = 'Thanks — this form is not yet connected to email. Call or email us directly for now.';
});
