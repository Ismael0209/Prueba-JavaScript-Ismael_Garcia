const tope = 5;
let numero1 = 0, numero2 = 1, terminoSig;
const serie = [];

    if(tope > 1){
        for (let i = 1; i <= tope; i++) {
         console.log(numero1);
         serie.push(numero1);
         terminoSig = numero1 + numero2;
         numero1 = numero2;
         numero2 = terminoSig;
        }

    }else{
        console.log("Error Digite un numero positivo")

    }


    console.log("la serie es: "+ serie);
