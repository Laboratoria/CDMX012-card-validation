import validator from './validator.js';

var inputTarjeta = document.getElementById("tarjeta");


var botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener("click", getTarjeta);



function getTarjeta( ){
    var numerosTarjeta= inputTarjeta.value;
    if (validator.isValid(numerosTarjeta)==true){
      localStorage.setItem("numerosDeTarjeta", validator.maskify(numerosTarjeta));
        window.location.assign("./pagValid.html");
      
    }else{
        var divMensaje = document.getElementById("mensajeError");
        divMensaje.classList.remove('mensajeOculto');
        divMensaje.classList.add('mensajeAlerta');
    }  
} 