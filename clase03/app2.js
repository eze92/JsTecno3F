/*Triángulo
Realiza un programa que solicite al usuario las longitudes de los tres lados de un triángulo (tres números).
 Luego, muestra el tipo de triángulo que forman según las siguientes reglas:
 Equilátero: si todos los lados son iguales.
 Isósceles: si dos lados son iguales.
 Escaleno: si todos los lados son diferentes.*/

 let lado1 = parseInt(prompt( "Ingrese el lado 1 del triangulo"));
 let lado2 = parseInt(prompt( "Ingrese el lado 2 del triangulo"));
 let lado3 = parseInt(prompt( "Ingrese el lado 3 del triangulo"));

 if ( lado1 === lado2 && lado2 === lado3 ) {
     console.log( "Los 3 lados del triangulo son iguales por lo que su tipo es Equilatero")
 }else if ( lado1 === lado2 && lado2 != lado3 ) {
     console.log( "Dos lados iguales por lo que su tipo es Isosceles")

 }else{
     console.log( "Todos los lados son distintos, su tipo es Escaleno")
 }
 
 