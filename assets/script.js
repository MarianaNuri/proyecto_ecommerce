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
