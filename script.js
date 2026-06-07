(function () {
    var navbar      = document.querySelector('.navbar');
    var navContainer = document.querySelector('.nav-container');
    var navMenu     = document.querySelector('.nav-menu');

    if (!navContainer || !navMenu || !navbar) return;

    // El nav-container necesita position relative para el menú absoluto
    navContainer.style.position = 'relative';

    // Crear el botón hamburguesa
    var hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Abrir menú');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = '<span></span><span></span><span></span>';

    // Añadirlo al final del nav-container (después del logo y el menú)
    navContainer.appendChild(hamburger);

    // Función para abrir/cerrar
    function toggleMenu(forceClose) {
        var isOpen = forceClose ? false : navMenu.classList.toggle('is-open');
        if (forceClose) navMenu.classList.remove('is-open');

        hamburger.classList.toggle('is-open', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    }

    // Click en el botón
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Cerrar al hacer clic en un enlace
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            toggleMenu(true);
        });
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', function (e) {
        if (!navbar.contains(e.target)) {
            toggleMenu(true);
        }
    });

    // Cerrar si se redimensiona a escritorio
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            toggleMenu(true);
        }
    });
})();