/*
Dado un arreglo de números como [1, 2, 3, 2, 4, 2, 5], contar la cantidad de veces que se repite el valor 2 y mostrarlo en consola.
*/

const numeros = [1, 2, 3, 2, 4, 2, 5];
let contador = 0

for ( let i = 0 ; i < numeros.length - 1 ; i++ ){
    if ( numeros[i] === 2){
        contador = contador + 1;
    }
}
console.log( "El numero 2 se repite", contador , "veces")
