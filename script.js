document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Form Submission Status
    const enrollForm = document.getElementById('enrollForm');
    const formStatus = document.getElementById('formStatus');

    enrollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        formStatus.style.color = '#2a9d8f';
        formStatus.textContent = 'Registration submitted! PSP team will contact you shortly.';
        
        enrollForm.reset();

        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    });

    // 3. Smooth Navigation Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                navLinks.classList.remove('active');
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});