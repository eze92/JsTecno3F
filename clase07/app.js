/*1.
Crear una función que muestre "¡Hola, mundo!" en la consola. .*/
function saludar(){
    console.log ("Hola mundo");
}

saludar();

/*2. Crear una función que reciba un nombre como parámetro y
muestre "¡Hola, */

function saludo( nombre){
    console.log( 'Hola', nombre);
}
saludo('Ezequiel');

/*3. Crear una función que reciba un número como parámetro y
devuelva el doble de ese número. */

function dobleNumero(numero){
    return numero * 2;
}
//let resultado = dobleNumero(5)
console.log(dobleNumero(5))

/*4. Crear una función que reciba tres números como parámetros y 
devuelva su promedio. */

function promedio (numero, numero2, numero3){
    return (numero * numero2 * numero3) / 3
}
console.log( "El promedio es", promedio(5,1,2))

/*5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.*/

function numeroMayor( numero, numero2){
    if( numero > numero2){
        return numero;
    }else{
        return numero2;
    }
}
console.log("El numero mayor es", numeroMayor(5,9));

/*6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.*/

function numeroAlCuadrado(numero){
    return Math.pow(numero,2)
}
console.log("El numero elevada al cuadrado es", numeroAlCuadrado(5))