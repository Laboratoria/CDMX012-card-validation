const validator = {

  isValid: function (numTarjeta) {
    let arrayNumTarjeta = numTarjeta.split("");
    let arrayNumTarjetaReverse = arrayNumTarjeta.reverse() //separa cada uno de los números
    let sumaTotalArray = 0;

    

    for (let i = 0; i < arrayNumTarjeta.length; i++) {
      arrayNumTarjetaReverse[i] = parseInt(arrayNumTarjetaReverse[i]); // convertir string a numero
    } 

    for (let j = 1; j < arrayNumTarjeta.length; j += 2) {
      arrayNumTarjetaReverse[j] = arrayNumTarjetaReverse[j] * 2;  //seleccionar los numeros pares y multiplicar por 2.
    }

    for (let k = 1; k < arrayNumTarjeta.length; k += 2) {
      if (arrayNumTarjetaReverse[k] > 9) { // selecciona los numeros mayores a 9.
        arrayNumTarjetaReverse[k] = arrayNumTarjetaReverse[k].toString(); // convierte a string para poder separar
        let suma = arrayNumTarjetaReverse[k].split(""); // separa los strings
        arrayNumTarjetaReverse[k] = parseInt(suma[0]) + parseInt(suma[1]); //lo convierte de nuevo a número para porder sumar
      }
    }

    for (let m = 0; m < arrayNumTarjeta.length; m++) {
      sumaTotalArray = sumaTotalArray + arrayNumTarjetaReverse[m]; // suma total de los números.
    }

    if (sumaTotalArray % 10 == 0) { // da el residuo 
      return true;
    } else {
      return false;
    }
  },

  maskify: function (numTarjeta) {
    let arrayMasking = numTarjeta.split(""); 
    
    for ( let a =0; a< arrayMasking.length-4; a++){
        if (a<= arrayMasking.length-4){
        arrayMasking[a]="#";
        }      
    }
    
    return  arrayMasking.toString().replace( /,/g, "");
      
  }
    

}

export default validator;
