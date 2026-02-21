document.addEventListener("DOMContentLoaded", function() {

    console.log("JS conectado correctamente ;)"); /* para verificar que el archivo cargo correctamente*/
/* Código para el botón "Ver más" en la sección de historia  de quienes.html */
    const boton = document.getElementById("btn-ver-mas");
    const info = document.getElementById("extra-info");

    if (boton && info) {
        boton.addEventListener("click", function() {
            info.classList.toggle("oculto");
            if (info.classList.contains("oculto")) {
                boton.textContent = "Ver más";
            } else {
                boton.textContent = "Ver menos";
            }
        });
    }
});

/*funcion para los terminos y condiciones*/
document.addEventListener("DOMContentLoaded", function() {
    const modalElement = document.getElementById("modalTerminos");
    /*Para que ya no aparezca de nuevo en un navegador si ya acepto*/
    if (!localStorage.getItem("terminosAceptados") && modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        /* para que aparezca despues de unos segundos */
        setTimeout(function() {
            modal.show();
        }, 4000); // 4000 ms = 4 segundos
        const checkbox = document.getElementById("aceptarTerminos");
        const boton = document.getElementById("btnAceptar");
        checkbox.addEventListener("change", function() {
            boton.disabled = !checkbox.checked;
        });
        boton.addEventListener("click", function() {
            localStorage.setItem("terminosAceptados", "true");
            modal.hide();
        });
    }
});
