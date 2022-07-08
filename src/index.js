import validator from "./validator.js";
function payWithCard(){
    document.getElementById("pay").style.display = "block";
}
  function validateLong(){
    var creditCardInput = document.getElementById("creditCardInput").value.replace(/ /g, "");
    if(creditCardInput.length >= 13 && creditCardInput.length <= 16){
        var result = validator.isValid(creditCardInput);
        if(result === true){
            var replace1 = validator.maskify(creditCardInput);
            document.getElementById("creditCardInput").value = replace1
            alert("¡Gracias por tu compra!")
        } else {
            alert("Tarjeta invalida")
        }
    } else {
        alert("Ingrese un número válido")
    }
}
document.getElementById("Comprar").addEventListener("click",validateLong);
document.getElementById("Realizar-compra").addEventListener("click",payWithCard);