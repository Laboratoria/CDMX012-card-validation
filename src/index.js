import validator from "./validator.js";

//var creditCardInput = document.getElementById("creditCardInput").value;
//console.log(creditCardInput);
//maskify: (creditCardInput)=>{
//    console.log(creditCardInput);
  //  var size = creditCardInput.value.length;
    //var lastValue = creditCardInput.value.charAt(size-1);
    //if (!size) return;
    //numbers.push(lastValue);
    //if(numbers.length < 13){
    //creditCardInput.value = creditCardInput.value.replace(/\d/, "*");
    //}
//},

function payWithCard(){
    document.getElementById("main").style.display = "block";
  };

  function validateLong(){
    var creditCardInput = document.getElementById("creditCardInput").value;
    console.log(creditCardInput);
    
    if(creditCardInput.length == 0 || /\s/.test(creditCardInput)){
        alert("campo vacio o con espacios")
    }
    if(creditCardInput.length >= 13 && creditCardInput.length <= 16){
        validator.isValid(creditCardInput);
        validator.maskify(creditCardInput);
    }
        else {
        alert("ingrse un numero valido")
        }
}

document.getElementById("validateLong").addEventListener("click",validateLong);