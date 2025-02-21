document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Set initial theme based on user preference
  if (prefersDarkScheme.matches) {
      document.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  themeToggle.addEventListener('click', () => {
      const currentTheme = document.getAttribute('data-theme');
      if (currentTheme === 'dark') {
          document.body.removeAttribute('data-theme');
          themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
          document.setAttribute('data-theme', 'dark');
          themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
  });

  // Mobile Menu Toggle
  const mobileMenu = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      // Animate hamburger to X
      mobileMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('show');
          mobileMenu.classList.remove('active');
      });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.classList.remove('show');
          mobileMenu.classList.remove('active');
      }
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section');
  const navLinksArray = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollY >= sectionTop - 150) {
              current = section.getAttribute('id');
          }
      });

      navLinksArray.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').slice(1) === current) {
              link.classList.add('active');
          }
      });
  });
});