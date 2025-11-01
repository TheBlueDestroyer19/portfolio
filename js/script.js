// Highlight active navigation link
const links = document.querySelectorAll('.nav-links a');
const current = window.location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});
