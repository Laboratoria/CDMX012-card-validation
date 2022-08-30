const validator = {
  isValid: function (cardNumber) {
    let parseCard = cardNumber.split("");
    parseCard.reverse();
    let card = parseCard;

    let result = false;
    let total = 0;
    const arrayAux = []; //arreglo vacio y auxiliar

    for (let i = 0; i <= cardNumber.length - 1; i++) {
      card[i] = parseInt(card[i]);
      if (i % 2 !== 0) {
        card[i] = card[i] * 2;
        if (card[i] >= 10) {
          arrayAux.push(card[i] - 9);
        } else {
          arrayAux.push(card[i]);
        }
      } else {
        arrayAux.push(parseInt(card[i]));
      }
      total = total + arrayAux[i];
    }

    if (total % 10 === 0) {
      result = true;
    } else {
      result = false;
    }
    return result;
  },

  maskify: function (cardNumber) {
    let cardMask = cardNumber.split("");
    let finalResult;

    const arrayAuxMask = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        arrayAuxMask.push("#");
      } else {
        arrayAuxMask.push(cardMask[i]);
      }
    }
    finalResult = arrayAuxMask.join("");

    return finalResult;
  },
};

export default validator;
