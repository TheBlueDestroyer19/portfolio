// Highlight active navigation link
const links = document.querySelectorAll('.nav-links a');
const current = window.location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});

// Responsive navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close nav when clicking a link (for better UX)
  navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    })
  );
}
