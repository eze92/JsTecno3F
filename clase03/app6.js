/*Ejercicio 5: 
Determinar si un Número es Par o ImparPedir al usuario que ingrese un número y determina si es par o impar.*/

let numero = parseInt(prompt("Ingrese numero a ser evaluado"));

if( numero % 2 === 0){
    console.log("El numero es Par");
}else{
    console.log("El numero es IMPAR")
}