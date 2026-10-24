// Shared dark-mode controller for all lessons.
// Load this in <head> (before paint) to avoid a flash of the wrong theme.
// Markup contract: a single <button class="theme-toggle"></button> in the body.
//
// Behaviour:
//   - No saved choice  → follow the OS (prefers-color-scheme).
//   - Reader clicks    → force light/dark and remember it in localStorage.
(function () {
  var KEY = 'dsa-theme';
  var root = document.documentElement;

  // Apply any saved override immediately (pre-paint) to prevent a flash.
  try {
    var saved = localStorage.getItem(KEY);
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) { /* private mode / blocked storage — fall back to OS */ }

  function current() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    function render() { btn.textContent = current() === 'dark' ? '☀ Light' : '☾ Dark'; }
    render();
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      render();
    });
  });
})();
