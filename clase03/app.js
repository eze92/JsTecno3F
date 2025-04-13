/*
Ejercicio 1: Clasificación de Número Entero Pide al usuario que ingrese un número entero. Luego, muestra un mensaje indicando si el número es:
"Positivo" si es mayor que cero.
"Negativo" si es menor que cero.
"Cero" si es igual a cero.*/

let numero = parseInt(prompt( "Ingrese un numero entero"));

if ( numero > 0) {
    console.log( "El numero: " + numero + " " + "es POSITIVO")
}else if ( numero < 0) {
    console.log( "El numero: " + numero + " " + "es NEGATIVO")
}else if ( numero === 0 ){
    console.log( "El numero: " + numero + " " + "es igual a 0")
}else{
    console.log( "No se ingreso un numero valido")
}
