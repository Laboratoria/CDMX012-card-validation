var inputCard = document.getElementById("num_card");
var printNumCard = document.getElementById("num_user_card");

var inputNameCard = document.getElementById("num_name");
var printNameCard = document.getElementById("name_user_card");

var vigencyday = document.querySelector(".day");
var vigencymonth = document.querySelector(".month");
var inputPin = document.querySelector("#inputPin");
var Pin = document.querySelector(".pin");

///// imprime nombre en la tarjeta
inputNameCard.addEventListener("keyup", (e) => {
  let card_name_value = e.target.value;
  inputNameCard.value = card_name_value;
  printNameCard.textContent = card_name_value;
  if (card_name_value == "") {
    printNameCard.textContent = "Jhon Doe";
  }
  turnCard();
});
///// imprime numero en la tarjeta
inputCard.addEventListener("keyup", (e) => {
  let card_num_value = e.target.value;
  inputCard.value = card_num_value
    ///elimina los espacios
    .replace(/\s/g, "")
    ///elimina las letras
    .replace(/\D/g, "")
    ///agrega espacio cada 4 digitos
    .replace(/([0-9]{4})/g, "$1 ")
    ///Elimina el ultimo espacio
    .trim();
  printNumCard.textContent = inputCard.value;
  if (inputCard.value == "") {
    printNumCard.textContent = "#### #### #### ####";
  }
  turnCard();
});
//pin
inputPin.addEventListener("keyup", (e) => {
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
///voltea la tarjeta con click
const card = document.querySelector("#card");
card.addEventListener("click", () => {
  card.classList.toggle("active");
});

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
  vigencyday.textContent = e.target.value;
  turnCard();
});

//select mes
selectMonth.addEventListener("change", (e) => {
  vigencymonth.textContent = e.target.value;
  turnCard();
});