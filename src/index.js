import validator from "./validator.js";
function payWithCard(){
    document.getElementById("main").style.display = "block";
  }
  function validateLong(){
    var creditCardInput = document.getElementById("creditCardInput").value;
    if(creditCardInput.length == 0 || /\s/.test(creditCardInput)){
        alert("campo vacio o con espacios")
    }
    if(creditCardInput.length >= 13 && creditCardInput.length <= 16){
        validator.isValid(creditCardInput);
        var replace1 = validator.maskify(creditCardInput);
        document.getElementById("creditCardInput").value = replace1
        //console.log(replace1);
    } else {
        alert("ingrse un numero valido")
    }
}

document.getElementById("validateLong").addEventListener("click",validateLong);
document.getElementById("payWithCard").addEventListener("click",payWithCard);