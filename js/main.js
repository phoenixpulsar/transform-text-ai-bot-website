/**
 * Transform Text AI — Landing Page Scripts
 * Minimal JS: navbar scroll effect + smooth scroll fallback
 */

(function () {
  'use strict';

  // --- Navbar background on scroll ---
  var nav = document.querySelector('.nav');

  function updateNav() {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // --- Smooth scroll fallback for anchor links ---
  var smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      // If the browser supports native smooth scroll, let CSS handle it
      if ('scrollBehavior' in document.documentElement.style) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
