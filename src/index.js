import validator from './validator.js';

var botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener("click", getTarjeta);

function getTarjeta( ){
    var inputTarjeta = document.getElementById("tarjeta");
    var numerosTarjeta= inputTarjeta.value

    if (validator.isValid(numerosTarjeta)==true){
        var divMensaje = document.getElementById("mensajeError");
        divMensaje.classList.remove('mensajeAlerta');
        divMensaje.classList.add('mensajeOculto');
        window.location.assign("./pagValid.html");
      
    }else{
        var divMensaje = document.getElementById("mensajeError");
        divMensaje.classList.remove('mensajeOculto');
        divMensaje.classList.add('mensajeAlerta');
    }
        
    


}

