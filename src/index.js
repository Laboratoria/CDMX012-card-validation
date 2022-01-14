
 var numbers = [];
 
 function encryptText(){
    var creditCardInput = document.getElementById("creditCardInput");
    var size = creditCardInput.value.length;
    var lastValue = creditCardInput.value.charAt(size-1);
    numbers.push(lastValue);
    creditCardInput.value = creditCardInput.value.replace(/\d/, "*");
    console.log(numbers);
}

function validateCardNumber(){
    //validar 16 digitos de largo
    //sumar numeros de pocisiones pares
    //ciclo  mientras haya numeros de dos digitos sumar ambos números
    //sumar todos los numeros del arreglo
    //revisar si termina en 0
    
}