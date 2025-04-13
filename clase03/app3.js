/*Ejercicio 3: Clasificacion de edad 
Crea un programa que solicite al usuario su edad y determine en qué etapa de la vida se 
encuentra: 
Menor de 12 es ninio, 
entre 12 y 17 es adolescente, 
entre 18y 64 es adulto, 
de 65 en adelante es adulto mayor.*/

let edad = parseInt(prompt( "Ingrese el su edad"));

if( edad < 12  && edad >= 0){
    console.log("Es un niño")
}
else if( edad >= 12 && edad <= 17){
    console.log( "Es adolecente")
}
else if( edad >= 18 && edad <= 64 ){
    console.log( "Es adulto")
}else if (edad >= 65 ) {
    console.log( "Es adulto mayor")
}
else {
    console.log( "La edad ingresada no es valida")
}
