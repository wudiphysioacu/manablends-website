// Pure Picks: small progressive enhancements. No build step, no dependencies.
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (header && toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu once a link has been chosen.
    nav.addEventListener('click', function (event) {
      if (event.target instanceof HTMLAnchorElement) {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
