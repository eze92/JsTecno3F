/*
Recorrer el arreglo [5, 12, 8, 20, 3, 15] con un bucle y guardar en un nuevo arreglo solo los números mayores a 10.*/

const arreglo = [5, 12, 8, 20, 3, 15]
const nuevoArreglo = [];

for ( let i = 0; i <= arreglo.length -1 ; i ++){
    if ( arreglo[i] > 10){
        nuevoArreglo.push(arreglo[i])
    }
}
console.log(nuevoArreglo);

