const validator = {

  isValid: function (tarjeta) {

    let suma = 0;
    for (let i = tarjeta.lenght - 1; i >= 0; i--) {
      let valor = tarjeta.chartAt(i)
      let posPar = i % 2 == 0;
      if (posPar) {
        valor = valor * 2;
        if (valor > 9) {
          let entero = 1;
          valor = entero + valor % 10;
        }
      }
      suma = suma + valor;
    }
    if (suma % 10 === 0)
      return true;
    else
      return false;
  }
}
export default validator;











/* 
() {
let creditCardNumber = "xxxxxxxxxxxxxxxx";

let digitoPos = creditCardNumber.charAt(14);
let duplicar = digitoPos * 2;

let digito1Suma=1;
let digito2Suma=duplicar%10;
if (duplicar >9) {duplicar=digito1Suma+digito2Suma}

 falta convertir en una funcion el algoritmo para 
hacer un ciclo con los caracteres especificos
y poner un aumento de 2 para posiciones pares 

let contarDigitosSuma = duplicar.length;
if contarDigitosSuma == 1
let sumaDuplicar = duplicar.charAt(0) + duplicar.charAt(1)

validator.isValid(creditCardNumber): creditCardNumber es un 
string con el número de tarjeta que se va a verificar. Esta 
función debe retornar un boolean dependiendo si es válida 
de acuerdo al algoritmo de Luhn.
*/