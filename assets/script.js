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

/*Carrito */
document.addEventListener("DOMContentLoaded", function () {
    let contador = 0;
    const botones = document.querySelectorAll(".agregar-carrito");
    const contadorElemento = document.getElementById("contadorCarrito");
    const carritoIcono = document.getElementById("iconoCarrito");
    botones.forEach(function (boton) {
        boton.addEventListener("click", function () {
            contador++;
            contadorElemento.textContent = contador;
            carritoIcono.classList.add("shake");
            setTimeout(function () {
                carritoIcono.classList.remove("shake");
            }, 400);
        });
    });
});

/* Registro */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registroForm");
    const btnEnviar = document.getElementById("btnEnviar");
    const checkbox = document.getElementById("terminos");
    const mensajeError = document.getElementById("mensajeError");

    if (form && btnEnviar && checkbox) {

        checkbox.addEventListener("change", function () {
            btnEnviar.disabled = !this.checked;
        });

        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                mensajeError.textContent = "Complete todos los campos correctamente";
            } else {
                mensajeError.textContent = "";
                alert("Registro exitoso");
            }
        });
    }
});

/*Busqueda de productos*/
document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "Suculenta", precio: 120, imagen: "imagenes/suculenta.jpg" },
        { nombre: "Monstera", precio: 250, imagen: "imagenes/monstera.jpg" },
        { nombre: "Cactus", precio: 90, imagen: "imagenes/cactus.jpg" },
        { nombre: "Helecho", precio: 180, imagen: "imagenes/helecho.jpg" }
    ];
    const params = new URLSearchParams(window.location.search);
    const busqueda = params.get("q");

    const contenedor = document.getElementById("resultados");
    const input = document.getElementById("inputBusqueda")
    const titulo = document.getElementById("tituloBusqueda")

    if (busqueda){
        //mostra la palabra en el input
        if (input) {
            input.value = busqueda;
        }
        //cambia el titulo dinamicamente
        if (titulo) {
            titulo.textContent = `Resultados de busqueda de "${busqueda}"`;
        }
        if (contenedor) {
            const filtrados = productos.filter(producto =>
                producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
            );

            if (filtrados.length > 0) {
                filtrados.forEach(producto => {
                    contenedor.innerHTML += `
                        <div class="col-md-4">
                            <div class="card shadow-sm">
                                <img src="${producto.imagen}" class="card-img-top">
                                <div class="card-body">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">$${producto.precio}</p>
                                </div>
                            </div>
                        </div>
                    `;
                });
            } else {
                contenedor.innerHTML = `<p>No se encontraron productos.</p>`;
            }
        }
    }

});
