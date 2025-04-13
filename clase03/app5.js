/*Ejercicio 5:Número Mayor
Pedir al usuario que ingrese dos números y muestra cuál es el mayor. En casode que sean iguales, indícalo.Luego intentar hacerlo con tres numeros (para valientes). Tipo: usar variableauxiliar.*/

let numero1 = parseInt(prompt( "Ingrese el primero numero"));
let numero2 = parseInt(prompt( "Ingrese el segundo numero"));
let numero3 = parseInt(prompt( "Ingrese el tercer numero"));

let mayor = Math.max(numero1,numero2,numero3);

console.log("El numero mayor es:", mayor)