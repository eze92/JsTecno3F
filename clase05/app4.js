/*
Ejercicio 4 
Dado un arreglo de letras = ["a", "b", "c", "d", "e", "f"], crear una nueva variable que contenga otro arreglo con los elementos ["b", "c", "d"].*/

const arregloLetras = ["a", "b", "c", "d", "e", "f"];

// Usamos slice para extraer los elementos deseados
// 1 represanta la posicion del arregla donde empieza y 4 la posicion a partir de la cual se excluye
const nuevoArreglo = arregloLetras.slice(1, 4);

console.log(nuevoArreglo); // ["b", "c", "d"]