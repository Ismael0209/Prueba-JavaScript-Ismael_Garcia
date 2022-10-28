const arreglo = [2,36,58,69,47,100];

let aux;
function ordenamiento(numeros){
    for(let i =0; i < numeros.length - 1; i++){ //comparacion de 2 en dos 
        for (let k = 0; k< numeros.length - 1; k++){
            if(numeros[k] > numeros[k+1]){
                aux = numeros[k];
                numeros[k] = numeros[k+1]
                numeros[k+1] = aux
            }

        }
    }

    return numeros;
}

console.log(ordenamiento(arreglo))