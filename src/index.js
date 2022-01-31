var numbers = [];

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
    if(numbers.length !== /[0-9]/){
        alert("escriba solo números")
    }
    if(numbers.length == 0 || /\s/.test(numbers)){
        alert("campo vacio o con espacios")
    }
    if(numbers.length >= 13 && numbers.length <= 16){
        validator.isValid(numbers);
    }
        else {
        alert("ingrse un numero valido")
        }
}