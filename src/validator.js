const validator = {


   isValid: function (numTarjeta){
    let arrayNumTarjeta = numTarjeta.split("");
    let sumaTotalArray = 0;
    let isValid= true;
    
      for ( let i=0;i<16;i++) { 
        arrayNumTarjeta[i] = parseInt(arrayNumTarjeta[i]) ;    
      }
        
      for ( let j=0;j<16;j+=2) { 
        arrayNumTarjeta[j] = arrayNumTarjeta [j]*2;
      }
      
      for ( let k=0;k<16;k+=2){
        if(arrayNumTarjeta[k] > 9){
          arrayNumTarjeta[k]= arrayNumTarjeta[k].toString();
          let suma= arrayNumTarjeta[k].split("");
          arrayNumTarjeta[k]= parseInt(suma[0])+ parseInt(suma[1]);
        }
      }
      
      for ( let m=0;m<16;m++) { 
           sumaTotalArray= sumaTotalArray + arrayNumTarjeta[m];
        }
        
        if ((sumaTotalArray%10) ==0){
          isValid=true;
        }else{
          isValid=false;
        }
         console.log(isValid);    


    

    
    // console.log( parseInt( arrayNumTarjeta[0] ) + parseInt( arrayNumTarjeta[5] ) )

   } 
  


};

export default validator;
