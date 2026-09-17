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
