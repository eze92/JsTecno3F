/*Ejercicio 5 contas divisores
Escribir un programa que reciba un número n y cuente cuántos divisores tiene. 
Un divisor  es un número que divide a n sin dejar resto.
Ejemplo:
Entrada: n = 12
Salida: 6 (divisores: 1, 2, 3, 4, 6, 12)*/

let numero = parseInt(prompt ("Ingrese un numero:" ));
let divisor = 0;
let divisores = []

for ( let i = 1; i <= numero; i ++){
    if ( numero % i === 0){
        divisor = divisor + 1
        divisores.push(i);
    }
}
console.log( "Cantidad de divisores" , divisor );
console.log( "Todos los divisores", divisores)
