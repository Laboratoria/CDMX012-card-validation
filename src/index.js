import validator from './validator.js';

console.log(validator);

document.getElementById("botonTarjeta").addEventListener("click", function () {
    const inputTarjeta = document.getElementById("inputTarjeta");
    console.log(inputTarjeta.value);
    let resultado = validator.isValid(inputTarjeta.value)
    if (resultado=== true ){resultado ="Tarjeta Valida"}
    else {resultado="Tarjeta Invalida"}

    document.getElementById ("resultadoVaidacion").innerHTML=resultado;

   //let resultadoValidacion= document.getElementById ("resultadoVaidacion");
  // resultadoValidacion.innerHTML=resultado;


});
