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
    /* para que ya no vuelva a aparecer si refresca*/
    if (!localStorage.getItem("terminosAceptados")) {
        const modal = new bootstrap.Modal(document.getElementById("modalTerminos"));
        modal.show();
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
