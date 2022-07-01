import validator from "./validator.js";

//// aqui toma los valores para pasarlos al validador y al imput del form
var inputCardHide = document.getElementById("num_hide");
//// aqui muestra el masking en input
var inputCard = document.getElementById("num_card");
//// aqui muestra el masking en card
var printNumMask = document.getElementById("num_user_card");

var inputName = document.getElementById("num_name");
var printNameCard = document.getElementById("name_user_card");

var vigencyday = document.querySelector(".day");
var vigencymonth = document.querySelector(".month");
var inputPin = document.querySelector("#inputPin");
var Pin = document.querySelector(".pin");

///// imprime numero en la tarjeta
inputCardHide.addEventListener("keyup", (e) => {
  // e.preventDefault();
  let card_num_value = e.target.value;
  let maskifyNums = validator.maskify(card_num_value); ///agrega espacio cada 4 digitos

  inputCardHide.value = card_num_value
    ///elimina los espacios
    .replace(/\s/g, "")
    ///elimina las letras
    .replace(/\D/g, "")
    ///Elimina el ultimo espacio
    .trim();
  turnCard();

  inputCard.value = maskifyNums;
  printNumMask.textContent = inputCard.value

  if (inputCardHide.value == "") {
    printNumMask.textContent = "**** **** **** ****";
  }
});

///// imprime nombre en la tarjeta
inputName.addEventListener("keyup", (e) => {
  let card_name_value = e.target.value;
  inputName.value = card_name_value;
  printNameCard.textContent = card_name_value;
  if (card_name_value == "") {
    printNameCard.textContent = "Jhon Doe";
  }
  turnCard();
});

//pin
inputPin.addEventListener("keyup", (e) => {
  // e.preventDefault()
  let pin_value = e.target.value;
  inputPin.value = pin_value
    .replace(/\s/g, "")
    ///elimina las letras
    .replace(/\D/g, "");

  Pin.textContent = pin_value;
  if (pin_value == "") {
    Pin.textContent = "0000";
  }
  if (!card.classList.contains("active")) {
    card.classList.toggle("active");
  }
});
///voltea la tarjeta con funcion
const turnCard = () => {
  if (card.classList.contains("active")) {
    card.classList.remove("active");
  }
};

///select dia
const selectDay = document.querySelector("#vigency_day");
for (let i = 1; i <= 31; i++) {
  let dayOption = document.createElement("option");
  dayOption.value = i;
  dayOption.innerText = i;
  selectDay.appendChild(dayOption);
}

// ///select mes
const selectMonth = document.querySelector("#vigency_month");
for (let i = 1; i <= 12; i++) {
  let monthOption = document.createElement("option");
  monthOption.value = i;
  monthOption.innerText = i;
  selectMonth.appendChild(monthOption);
}

//select day
selectDay.addEventListener("change", (e) => {
  // e.preventDefault()
  vigencyday.textContent = e.target.value;
  turnCard();
});

//select mes
selectMonth.addEventListener("change", (e) => {
  // e.preventDefault()
  vigencymonth.textContent = e.target.value;
  turnCard();
});
