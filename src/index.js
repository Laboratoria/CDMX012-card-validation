import validator from './validator.js';

console.log(validator);

document.getElementById("botonTarjeta").addEventListener("click", function () {
  const inputTarjeta = document.getElementById("inputTarjeta");
  console.log(inputTarjeta.value);
  const inputSoloNumeros = validator.soloNumeros(inputTarjeta.value);
  let mensajeInput = "";
  if (inputSoloNumeros === false) {
    mensajeInput = "Ingresa solo números sin espacios";
    alert(mensajeInput);
    //document.getElementById("mensajeAlerta").innerHTML = mensajeInput;
    return;
  }

  const resultadoValidacion = validator.isValid(inputTarjeta.value);
  let mensajeAMostrar = "";
  if (resultadoValidacion === true) { mensajeAMostrar = "Tarjeta Valida" }
  else { mensajeAMostrar = "Tarjeta Invalida" }

  let tarjetaMascara = validator.maskify(inputTarjeta.value)

  document.getElementById("tarjetaOculta").innerHTML = tarjetaMascara;
  document.getElementById("resultadoVaidacion").innerHTML = mensajeAMostrar;

  const resultadoFinal = document.getElementById("resultadoFinal");
  resultadoFinal.style.display = "block";
  if (resultadoValidacion === true) {
    resultadoFinal.style.borderColor = "green";
  }
  else {
    resultadoFinal.style.borderColor = "red";
  }

  //let resultadoValidacion= document.getElementById ("resultadoVaidacion");
  // resultadoValidacion.innerHTML=resultado;


});
