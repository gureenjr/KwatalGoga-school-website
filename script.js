// script.js - place site-wide JS here
document.addEventListener('DOMContentLoaded', () => {
  // fill year in footer (redundant with inline, but good practice)
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // future: add small behaviors (mobile menu, form validation, etc.)
});
