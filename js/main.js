import { initCursor } from './cursor.js';
import { initSmoothScroll } from './scroll.js';
import { initForm } from './form.js';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initSmoothScroll();
  initForm();
});