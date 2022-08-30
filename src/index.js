import validator from "./validator.js";

const buttonSend = document.getElementById("button_send");
buttonSend.addEventListener("click", getNumber);

function getNumber() {
  const boxNumbers = document.getElementById("cardNumber").value;
  let maskify = validator.maskify(boxNumbers);
  let validAlert = document.getElementById("validation");
  let validation = validator.isValid(boxNumbers);

  if (validation === true) {
    validAlert.innerHTML = "Valid card";
    validAlert.classList.add("valid");
    document.getElementById("maskifys").innerHTML = maskify;
  } else {
    validAlert.innerHTML = "Invalid card";
    validAlert.classList.add("invalid");
    document.getElementById("maskifys").innerHTML = maskify;
  }

  document.getElementById("cardNumber").innerHTML =
    validator.maskify(boxNumbers);
}

const userNameImpress = document.getElementById("user_name");
const buttonUserName = document.getElementById("button_username");
const userName = document.getElementById("username");

buttonUserName.addEventListener("click", () => {
  userNameImpress.innerHTML = userName.value;
});
