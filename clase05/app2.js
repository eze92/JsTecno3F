/*Dado el arreglo de números = [ 10, 20, 30, 40, 50 ], el programa debe recibir un número e indicar si está en el arreglo.*/


const arreglo = [ 10, 20, 30, 40, 50 ];

let numero = parseInt(prompt("Ingrese un numero para ver si esta en el arreglo: "));

if (  arreglo.includes(numero) === true ) {
    console.log(`El numero ${numero} esta en el arreglo`);
} else {
    console.log(`El numero ${numero} no esta en el arreglo`);
}



