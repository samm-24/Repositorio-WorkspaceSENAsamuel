

function toggleMenu() {

    const navLinks = document.getElementById('navLinks');

    if (!navLinks) {
        return;
    }

    navLinks.classList.toggle('active');
}


/*formulariodd
*/

function toggleManualForm() {

    const form = document.getElementById('manualForm');

    if (!form) {
        return;
    }

    form.classList.toggle('hidden');

}


/*
para seleccionar fotos
*/

document.addEventListener('DOMContentLoaded', () => {

    const photoInput = document.getElementById('photoInput');

    const fileName = document.getElementById('fileName');

    if (photoInput && fileName) {

        photoInput.addEventListener('change', () => {

            if (photoInput.files.length > 0) {

                const file = photoInput.files[0];

                fileName.textContent =
                    `Imagen seleccionada: ${file.name}`;

            } else {

                fileName.textContent =
                    'No se ha seleccionado ninguna imagen.';

            }

        });

    }

});
