import validator from "./validator.js";

var inputCard = document.getElementById("num_card");

var btn_validate = document.getElementById("validate_btn");
btn_validate.addEventListener("click", getTarjeta);

function getTarjeta() {
  var toValidate = inputCard.value;
  var singleCardNumber = toValidate.replace(/\s/g, "");
  console.log(toValidate);
console.log(singleCardNumber);
debugger
console.log(validator.isValid(singleCardNumber));
  if (validator.isValid(singleCardNumber) === true) {
    localStorage.setItem("validCard", validator.maskify(toValidate));
    // window.location.assign("./pagValid.html");
  } else {
    var divMensaje = document.getElementById("error");
    divMensaje.classList.remove("hide_message");
    divMensaje.classList.add("error_message");
  }
}
