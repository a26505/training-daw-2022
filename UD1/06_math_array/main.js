// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos

let suma = 0;

function doCalculation(array) {
    let mayor = array[0];
    let menor= array[0];
    for( let i = 0; i < array.length; i++){
        suma = suma + array[i]; 
    }
    console.log ('la suma es: '+ suma )
    media = suma/array.length; 
    console.log ('la media es: '+ media )
   
    suma = 0;

    for( let i = 0; i < array.length; i++){
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    console.log ('Mayor es el: '+ mayor )

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    console.log ('Menor es el: '+ menor )

}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])