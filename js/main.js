// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});

// Smooth scrolling and section animations
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop - 500) {
            section.classList.add('visible');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
});
