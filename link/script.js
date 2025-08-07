// Interactive effects and functionality
document.addEventListener('DOMContentLoaded', function() {
    // Profile image click effect
    const profileImg = document.getElementById('profileImg');
    const profileContainer = document.querySelector('.profile-image-container');
    
    profileContainer.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }, 150);
    });

    // Link click handlers with URLs
    const linkHandlers = {
        behance: 'https://www.behance.net/ricardojps', // Replace with actual Behance URL
        website: 'https://ricardojps.com', // Replace with actual website URL
        linkedin: 'https://www.linkedin.com/in/ricardojps' // Replace with actual LinkedIn URL
    };

    // Add click events to links
    document.querySelectorAll('.link-item').forEach(link => {
        const linkType = link.getAttribute('data-link');
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'translateY(-2px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px) scale(1)';
            }, 150);
            
            // Open link after animation
            setTimeout(() => {
                if (linkHandlers[linkType]) {
                    window.open(linkHandlers[linkType], '_blank');
                } else {
                    // Placeholder alert for demo
                    alert(`Abrir ${linkType.charAt(0).toUpperCase() + linkType.slice(1)}`);
                }
            }, 200);
        });

        // Hover effects
        link.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Connect button functionality
    const connectBtn = document.querySelector('.connect-btn');
    connectBtn.addEventListener('click', function() {
        this.style.transform = 'translateY(-1px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-1px) scale(1)';
        }, 150);
        
        // Placeholder functionality
        setTimeout(() => {
            alert('¡Conectando con ricardojps!');
        }, 200);
    });

    // Social icon click
    const socialIcon = document.querySelector('.social-icon');
    socialIcon.addEventListener('click', function() {
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }, 150);
        
        // Open Instagram (replace with actual Instagram URL)
        setTimeout(() => {
            window.open('https://www.instagram.com/ricardojps', '_blank');
        }, 300);
    });

    // Footer links
    document.querySelectorAll('.footer span').forEach(span => {
        if (span.textContent.trim() !== '•') {
            span.addEventListener('click', function() {
                if (this.textContent === 'Report') {
                    alert('Reportar contenido');
                } else if (this.textContent === 'Privacy') {
                    alert('Política de privacidad');
                }
            });
        }
    });

    // Add subtle parallax effect on scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const container = document.querySelector('.container');
        container.style.transform = `translateY(${scrolled * 0.1}px)`;
    });

    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.6s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});
