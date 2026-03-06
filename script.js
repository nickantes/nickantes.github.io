/**
 * Portfolio utilities — theme toggle, mobile nav, anchor scroll, year stamp.
 * No framework dependencies. Theme preference stored in localStorage (na_theme).
 */
(() => {
  const root = document.documentElement;

  // Copyright year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle
  const THEME_KEY = 'na_theme';
  const toggle = document.getElementById('themeToggle');

  function applyTheme(theme) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
    if (toggle) toggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
  }

  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') applyTheme(saved);
  else applyTheme('dark');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navEl = document.querySelector('.nav');

  if (navToggle && navEl) {
    navToggle.addEventListener('click', () => {
      const open = navEl.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    // Close mobile nav when a link is clicked
    navEl.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        navEl.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Smooth-scroll fragment links without letting Angular's hash router intercept them.
  // Angular controls #/ and #/projects/... — plain anchors like #about are handled here.
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const hash = link.getAttribute('href');
    if (!hash || hash === '#' || hash.startsWith('#/')) return;
    const target = document.querySelector(hash);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', hash);
  });

})();

