(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    // Close after clicking a link (mobile)
    navLinks.addEventListener('click', (e) => {
      if (e.target.classList.contains('nav-link')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll (enhanced offset for sticky header)
  const header = document.querySelector('.navbar');
  const offsetTop = () => (header ? header.offsetHeight : 0);

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - offsetTop() - 8;
      window.scrollTo({ top, behavior: 'smooth' });
      history.pushState(null, '', id);
    });
  });
})();
