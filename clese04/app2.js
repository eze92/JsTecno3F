/*Ejercicio 2: 
Acumulador con bucle while 
 Escribir un programa que calcule la suma de los números del 5 al 10 e imprima el resultado en la consola.
 Pistas:
Declara una variable para almacenar la suma (acumulador).
Utiliza un bucle while que se repita mientras el contador sea menor o igual a 10.
En cada iteración, suma el valor del contador al acumulador.
Al finalizar el bucle, imprime el valor acumulado.*/


let suma = 0;
let contador = 5;

while ( contador <= 10) {
    suma = suma + contador;
    contador++
}
console.log ( "La suma de los numeros es: " ,suma)
