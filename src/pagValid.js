let numerosDeTarjeta = localStorage.getItem("numerosDeTarjeta"); // trae la información a la pag del localStorage

let spanEnmascarado = document.getElementById("numeroEnmascarado"); // variable para poder manipular la información 
spanEnmascarado.innerHTML = numerosDeTarjeta; // a los datos de la tarjeta los convertimos a string para reemplazar las comas por espacios en blanco

