import validator from './validator.js';

console.log(validator);

document.getElementById("botonTarjeta").addEventListener("click", function () {
  const inputTarjeta = document.getElementById("inputTarjeta");
  console.log(inputTarjeta.value);
  const resultado = validator.isValid(inputTarjeta.value)
  let resultadoString ="";
  if (resultado === true) { resultadoString = "Tarjeta Valida" }
  else { resultadoString = "Tarjeta Invalida" }

  let tarjetaMascara = validator.maskify(inputTarjeta.value)
  

  document.getElementById("tarjetaOculta").innerHTML = tarjetaMascara;
  document.getElementById("resultadoVaidacion").innerHTML = resultadoString;

  const resultadoFinal = document.getElementById("resultadoFinal");
  resultadoFinal.style.display = "block";
  if (resultado === true){
    resultadoFinal.style.borderColor="green"}
    else {
      resultadoFinal.style.borderColor="red"
    }

  //let resultadoValidacion= document.getElementById ("resultadoVaidacion");
  // resultadoValidacion.innerHTML=resultado;


});
