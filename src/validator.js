const validator = {
    maskify: (value)=>{
        console.log(value);
        let numbers = []
        var size = value.length;
        var lastValue = value.charAt(size-1);
        if (!size) return;
        numbers.push(lastValue);
        //if(numbers.length < 13){
            console.log(numbers);
        document.getElementById("creditCardInput").value = value.replace(/\d/, "*");
        //}
    },
    isValid: (creditCardInput)=>{   
        let numbers = Array.from(creditCardInput).reverse();
      for (var i=0; i<numbers.length; i++){
          if(i%2!==0){
              numbers[i] = numbers[i]*2;
          }
          else{
              numbers[i] = Number.parseInt(numbers[i]);
          }
      }
      for(var i=0; i<16; i++){
          if(numbers[i]>9){
             var stringArray = numbers[i].toString().split("")
             var array1 = Number.parseInt(stringArray[0]);
             var array2 = Number.parseInt(stringArray[1]);
             var sum = array1 + array2
             numbers[i] = sum
          }
      }
      var total = numbers.reduce((a, b) => a + b, 0);
      if(total%10===0){
          alert("tarjeta valida")
      }
      else{
          alert("tarjeta no valida")
      }
      console.log(total);
    }
}

export default validator;