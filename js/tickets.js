const formulario = document.getElementById("formulario");
const cantidadInput = document.getElementById("cantidad");
const categoriaSelect = document.getElementById("categoria");
const calcularButton = document.getElementById("calcularButton");
const totalPagarDisplay = document.getElementById("totalPagar");
const borrarButton = document.getElementById("borrarButton");

//Agregar un evento al botón "Resumen"
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
    const cantidad = parseInt(cantidadInput.value);
    const categoria = categoriaSelect.value;

    //Validar que se haya ingresado una cantidad válida
    if (isNaN(cantidad) || cantidad < 1) {
        return;
    }

    //Calcular el total a pagar con descuento
    let precioTicket = 200;
    let descuento = 0;

    if (categoria === "estudiante") {
        descuento = 0.8; //80% de descuento para estudiantes
    } else if (categoria === "trainee") {
        descuento = 0.5; //50% de descuento para trainees
    } else if (categoria === "junior") {
        descuento = 0.15; //15% de descuento para juniors
    }

    const totalPagar = cantidad * precioTicket * (1 - descuento);

    //Mostrar el total a pagar en el elemento HTML
    totalPagarDisplay.textContent = `${totalPagar.toFixed(2)}`;

});

//Agregar evento para borrar el total a pagar
borrarButton.addEventListener("click", function() {
    totalPagarDisplay.textContent = "";
});