
 var numbers = [];
 
 function encryptText(){
    var creditCardInput = document.getElementById("creditCardInput");
    var size = creditCardInput.value.length;
    var lastValue = creditCardInput.value.charAt(size-1);
    numbers.push(lastValue);
    creditCardInput.value = creditCardInput.value.replace(/\d/, "*");
    console.log(numbers);
}