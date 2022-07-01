const validator = {
  isValid: function (singleCardNumber) {
    if (singleCardNumber !== "") {
      let numCard = singleCardNumber.split(""); //separa cada uno de los números
      let numCardReverse = numCard.reverse(); //invierte el array
      let validatorSum = 0;

      for (let i = 0; i < numCard.length; i++) {
        numCardReverse[i] = parseInt(numCardReverse[i]); // convertir string a numero
      }
      for (let j = 1; j < numCard.length; j += 2) {
        numCardReverse[j] = numCardReverse[j] * 2; //seleccionar los numeros pares y multiplicar por 2.
      }
      for (let k = 1; k < numCard.length; k += 2) {
        if (numCardReverse[k] > 9) {
          // selecciona los numeros mayores a 9.
          numCardReverse[k] = numCardReverse[k].toString(); // convierte a string para poder separar
          let sum = numCardReverse[k].split(""); // separa los strings
          numCardReverse[k] = parseInt(sum[0]) + parseInt(sum[1]); //lo convierte de nuevo a número para porder sumar
        }
      }
      for (let m = 0; m < numCard.length; m++) {
        validatorSum = validatorSum + numCardReverse[m]; // suma total de los números.
      }
      if (validatorSum % 10 === 0) {
        // da el residuo
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  maskify: function (card_num_value) {
    let arrayToMasking = card_num_value.split("");
    let arrayMasking = [];

    if (arrayToMasking.length <= 20) {
      for (let a = 0; a < arrayToMasking.length - 4; a++) {
        arrayToMasking[a] = "*";
      }
    }

    for (let i = 0; i < arrayToMasking.length; i++) {
      if (i % 4 === 0 && i != 0) {
        arrayMasking.push(" ");
        arrayMasking.push(arrayToMasking[i]);
      } else {
        arrayMasking.push(arrayToMasking[i]);
      }
    }
    return arrayMasking.toString().replace(/,/g, "");
  },
};

export default validator;
