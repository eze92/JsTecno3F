/*Ejercicio 6: Tablas de multiplicar ​
Crear un programa que reciba un número n y genere su tabla de multiplicar, desde el 10 hasta el 1. ​ Luego de 1 a 10. ​*/

let numero = parseInt(prompt("Ingrese un numero: "))

console.log("Tabla de multiplicar del 1 al 10:");
for ( let i = 1; i <= 10; i++ ){
    //contador = contador + 1;
     resultado = numero * i
     console.log("Resultado del 1 al 10:" , `${numero} x ${i} = ${resultado}`)
}

console.log("Tabla de multiplicar del 10 al 1:");
for  ( let i = 10; i >= 1; i-- ){
    resultadoInverso = numero * i
    console.log("Resultado del 10 al 1:" , `${numero} x ${i} = ${resultadoInverso}`)
}
