/**
 * HODU VILLA CONSTRUCTIONS - VANILLA JAVASCRIPT
 * Simple, reliable interactive behaviors:
 * 1. Mobile navigation menu toggle
 * 2. FAQ accordion open/close
 * 3. Smooth internal anchor links
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close mobile nav when clicking any link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.innerHTML = '&#9776;';
      });
    });
  }

  // 2. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const parentItem = this.closest('.faq-item');
      const isAlreadyActive = parentItem.classList.contains('active');

      // Close all accordion items for clean single-open feel
      document.querySelectorAll('.faq-item').forEach(function (item) {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-question');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      // Toggle current item if it wasn't already active
      if (!isAlreadyActive) {
        parentItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
