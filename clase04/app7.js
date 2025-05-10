/*
Escribir un programa que reciba un número entero positivo n y calcule por separado la suma de todos los números pares y la suma de todos los números impares desde 1 hasta n. 

Ejemplo: Ejemplo: 
Entrada: n = 10
Pares = 30, Impares = 25
*/
let resultadoPares = 0;
let resultadoImpares = 0;

numero = parseFloat(prompt("Ingrese un numero: "))

if (numero <= 0 || !Number.isInteger(numero)) {
    console.log("El número ingresado no es un entero positivo");
} else {
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            resultadoPares = resultadoPares + i;
        } else {
            resultadoImpares = resultadoImpares + i;
        }
    }

    console.log("Suma de Números Pares:", resultadoPares);
    console.log("Suma de Números Impares:", resultadoImpares);
}


