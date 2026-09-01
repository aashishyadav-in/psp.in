document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Form Submission Status — submissions are sent to the PSP email inbox.
  const enrollForm = document.getElementById('enrollForm');
  const formStatus = document.getElementById('formStatus');

  if (enrollForm && formStatus) {
    enrollForm.addEventListener('submit', () => {
      formStatus.style.color = '#2a9d8f';
      formStatus.textContent = 'Sending your enquiry securely…';
    });
  }

  // 3. Smooth Navigation Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        if (navLinks) navLinks.classList.remove('active');
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});
