document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    // Verificamos que los elementos existan
    if (btn && menu) {
        btn.addEventListener('click', (e) => {
            console.log("Botón menú clickeado"); // Si ves esto en consola, el JS está bien
            menu.classList.toggle('hidden');
        });
    } else {
        console.error("No se encontró el botón o el menú en el DOM");
    }
});

// Función para los sub-desplegables
function toggleElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
        console.log("Desplegando sección:", id);
    }
}

function toggleFAQ(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
        console.log("Desplegando sección:", id);
    }
}