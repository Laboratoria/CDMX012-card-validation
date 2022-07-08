const validator = {
    maskify: (value)=>{
        let numbers = []
        var size = value.length;
        var lastValue = value.charAt(size-1);
        if (!size) return;
        numbers.push(lastValue);
        return value.replace(/.(?=.{4,}$)/g, '#');
    },
    isValid: (creditCardInput)=>{   
        let numbers = Array.from(creditCardInput).reverse();
        var i = 0
      for (i=0; i<numbers.length; i++){
          if(i%2!==0){
              numbers[i] = numbers[i]*2;
          } else {
              numbers[i] = Number.parseInt(numbers[i]);
          }
      }
      for(i=0; i<16; i++){
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
        return true;  
      } else {
        return false;
      }
    }
}
export default validator;