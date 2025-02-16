// Navegación móvil
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header transparente al scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#ffffff';
    }
    
    lastScroll = currentScroll;
});

// Formulario de contacto
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;
    
    // Aquí normalmente enviarías los datos a un servidor (formsubmid)
    // Por ahora, solo mostraremos un mensaje de éxito
    alert('Mensaje enviado con éxito. Gracias por contactarnos!');
    contactForm.reset();
});

// Animación de elementos al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos a animar
document.querySelectorAll('.service-card, .project-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});