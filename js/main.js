// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // Mobile dropdowns
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                if (this.parentElement.classList.contains('dropdown')) {
                    e.preventDefault();
                    this.parentElement.classList.toggle('active');
                }
            });
        }
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!e.target.closest('.main-nav')) {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
                dropdowns.forEach(d => d.classList.remove('active'));
            }
        }
    });
});