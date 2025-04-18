/*Ejercicio 4: Contador y bucle for con condicional
Escribir un programa que cuente cuántos números pares e impares hay entre 1 y 20 e imprima el resultado en la consola. ​
Pistas: ​
Declara una variable para contar los números impares y otra para los pares. ​
Utiliza un bucle for que itere desde 1 hasta 20. ​
En cada iteración, verifica si el número es par (divisible por 2) o impar. ​
Dependiendo de la condición, incrementa el contador. ​
Al final del bucle, imprime el total de números pares e impares. ​
*/

let contadorPares = 0; // Contador de números pares
let contadorImpares = 0; // Contador de números impares

// Bucle for que itera desde 1 hasta 20     
for (let i = 1; i <=20; i++){
    // verifico si  el numero es par o impar
    if ( i % 2 === 0){
        contadorPares = contadorPares + 1
    } else {
            contadorImpares = contadorImpares + 1
        }
}
// Imprimo el resultado en la consola
console.log("Total de números pares: " + contadorPares); // Imprime el total de números pares
console.log("Total de números impares: " + contadorImpares); // Imprime el total de números impares

