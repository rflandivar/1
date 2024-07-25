// Opcional: Mejora el efecto parallax con JavaScript
window.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(section => {
        let scrollPosition = window.scrollY;
        section.style.backgroundPositionY = scrollPosition * 0.5 + "px"; // Ajusta el factor 0.5 para controlar la velocidad del efecto
    });
});
