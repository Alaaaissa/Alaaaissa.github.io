// Main JavaScript file for Alaa Aissa's portfolio website

// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Scroll Animation
const scrollAnimation = () => {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + window.innerHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                section.classList.add('active');
            }
        });
    });
}

// Smooth scrolling for navigation links
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    scrollAnimation();
    smoothScroll();
    
    // Add active class to sections initially in view
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + window.innerHeight * 0.8;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section.classList.add('active');
        }
    });
});
