// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');

    mobileMenuBtn.addEventListener('click', () => {
        if (desktopNav.style.display === 'flex') {
            desktopNav.style.display = 'none';
        } else {
            desktopNav.style.display = 'flex';
            desktopNav.style.flexDirection = 'column';
            desktopNav.style.position = 'absolute';
            desktopNav.style.top = '100%';
            desktopNav.style.left = '0';
            desktopNav.style.width = '100%';
            desktopNav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            desktopNav.style.padding = '1rem';
            desktopNav.style.borderBottom = '1px solid var(--color-border)';
            desktopNav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // hide mobile menu if open
            if (window.innerWidth < 768) {
                desktopNav.style.display = 'none';
            }

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
