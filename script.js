/**
 * Portfolio utilities — theme toggle, year, no framework dependencies.
 * Runs after DOM ready; theme preference stored in localStorage (na_theme).
 */
(() => {
  const root = document.documentElement;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

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

})();

