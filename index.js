function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Navbar mobile
document.querySelector(".navbar-burger").addEventListener("click", () => {
    document.querySelector(".navbar-burger").classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
});

// LÓGICA DE PAGINACIÓN GLOBAL
const PER_PAGE = 5;

document.querySelectorAll('.paginated-section').forEach(section => {
    let currentPage = 0;
    const cards = section.querySelectorAll('.card-pro');
    const totalPages = Math.ceil(cards.length / PER_PAGE);

    const prevBtn = section.querySelector('.pagination-previous');
    const nextBtn = section.querySelector('.pagination-next');
    const pageInfo = section.querySelector('.page-info');

    function updateUI() {
        // Mostrar/Ocultar cards
        cards.forEach((card, index) => {
            const start = currentPage * PER_PAGE;
            const end = start + PER_PAGE;
            card.style.display = (index >= start && index < end) ? "block" : "none";
        });

        // Actualizar número de página
        pageInfo.innerText = `${currentPage + 1} de ${totalPages}`;

        // Deshabilitar botones si no hay más páginas
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;

        // Estilo visual de deshabilitado (Bulma)
        prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
        prevBtn.style.pointerEvents = prevBtn.disabled ? "none" : "auto";
        nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
        nextBtn.style.pointerEvents = nextBtn.disabled ? "none" : "auto";
    }

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 0) {
            currentPage--;
            updateUI();
            section.scrollIntoView({ behavior: 'smooth' }); // Opcional: vuelve arriba de la sección
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateUI();
            section.scrollIntoView({ behavior: 'smooth' }); // Opcional: vuelve arriba de la sección
        }
    });

    // Inicializar sección
    updateUI();
});

const slides = document.querySelectorAll(".hero-slider img");
let current = 0;

function changeSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}

// Cambia cada 4 segundos
setInterval(changeSlide, 4000);
