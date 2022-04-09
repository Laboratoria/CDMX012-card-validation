//Validando los números ingresados y regresandolos en reversa.
const validator = {
  isValid: function (cardNumber) {
    let parseCard = cardNumber.split("");
    parseCard.reverse();
    let card = parseCard;
    //let card = Array.from(cardNumber).reverse();
    //console.log(card)

    let result = false;
    const card2 = []; //arreglo vacio y auxiliar
    //console.log(cardNumber, card);

    let total = 0;
    //Recorrer el array con bucle for
    for (let i = 0; i <= cardNumber.length - 1; i++) {
      card[i] = parseInt(card[i]);
      //console.log("for"+i);
      //identificar pares y nones
      if (i % 2 !== 0) {
        card[i] = card[i] * 2;
        if (card[i] >= 10) {
          card2.push(card[i] - 9);
        } else {
          card2.push(card[i]);
        }
      } else {
        card2.push(parseInt(card[i]));
      }

      total = total + card2[i];
      //console.log(total);
    }

    if (total % 10 === 0) {
      result = true;
    } else {
      result = false;
    }
    //console.log(result);
    return result;
  },

  maskify: function (cardNumber) {
    let array = cardNumber.split("");
    let result;

    const array2 = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        array2.push("#");
      } else {
        array2.push(array[i]);
      }
    }
    result = array2.join("");
    
    return result;
  },
};

export default validator;
