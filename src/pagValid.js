let validCard = localStorage.getItem("validCard"); // trae la información a la pag del localStorage

let maskifyCard = document.getElementById("validateCard"); // variable para poder manipular la información 
maskifyCard.innerHTML = validCard; // a los datos de la tarjeta los convertimos a string para reemplazar las comas por espacios en blanco
