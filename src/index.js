import validator from "./validator.js";

const button = document.getElementById("boton");
button.addEventListener("click", getNumber);

function getNumber() {
  let box = document.getElementById("cardNumber").value;
  let maskify = validator.maskify(box);
  let alert = document.getElementById("validation");
  let validation = validator.isValid(box);

  if (validation === true) {
    alert.innerHTML = "Tarjeta válida";
    alert.classList.add("valid");
    document.getElementById("maskify").innerHTML = maskify;
  } else {
    alert.innerHTML = "Tarjeta inválida";
    alert.classList.add("invalid");
    document.getElementById("maskify").innerHTML = maskify;
  }

  document.getElementById("cardNumber").innerHTML = validator.maskify(box);
}
