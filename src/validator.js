const validator = {

  isValid: function (tarjeta) {

    let suma = 0;
    const cantidadDeDigitosEsImpar = (tarjeta.length - 1) % 2 === 0;
    for (let i = tarjeta.length - 1; i >= 0; i--) {
      let posicionPar = false;
      if (cantidadDeDigitosEsImpar) {
        posicionPar = i % 2 !== 0
      } else {
        posicionPar = i % 2 === 0;
      }

      let valor = tarjeta.charAt(i) * 1;

      if (posicionPar) {
        valor = valor * 2;
        if (valor > 9) {
          let entero = 1;
          valor = entero + valor % 10;
        }
      }
      //console.log(i + "(" + posicionPar + "):" + tarjeta.charAt(i) + " => " + valor, typeof valor);
      suma = suma + valor;
    }

    console.log("suma=" + suma);
    if (suma % 10 === 0)
      return true;
    else
      return false;
  },
  maskify: function (tarjeta) {
    if (tarjeta.length <= 4) {
      return tarjeta
    }
    else {
      //convierte el numero de tarjeta en un arreglo
      let arreglo = tarjeta.split("");
      console.log(arreglo);
      //solo nos interesa enmascarar despues del 4to digito desde la derecha -1 porque los indices comienzan en 0
      const quintaPosicion = (arreglo.length - 4) - 1;
      //inicio en el 5to digito hacia la izquierda hasta llegar a posición 0
      for (let i = quintaPosicion; i >= 0; i--) {
        //cambio el valor en posición i por "#"
        arreglo[i] = "#";
      }
      //console.log(arreglo);
      //regreso la cadena madificada con .join 
      const tarjetaEnmascarada = arreglo.join("");
      return tarjetaEnmascarada;
    }
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