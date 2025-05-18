/*Crea un programa en JavaScript que implemente una calculadora como un
objeto. La calculadora debe ofrecer un menú para que el usuario seleccione
qué operación desea realizar. Los datos para las operaciones se ingresarán
desde la terminal (Node.js) o mediante prompt (Navegador).*/

/*
Requerimientos
1 . La calculadora debe ser un objeto con:
Propiedades para almacenar los números ingresados por el usuario.
Métodos para realizar las operaciones básicas: sumar, restar, multiplicar y dividir.
Un método para mostrar el menú y procesar la selección del usuario.
2 . El programa debe mostrar un menú con las siguientes opciones:El usuario debe poder ingresar el número de la opción elegida.*/


const calculadora = {

    sumar: function ( numero, numero2){
        return numero + numero2;
    },
    restar: function ( numero , numero2) {
        return numero - numero2;
    },
    multiplicar: function ( numero, numero2){
        return numero * numero2;
    },
    division: function ( numero , numero2){
        if ( numero2 === 0){
            console.log("No se puede dividir por cero");
        }else{
            return numero / numero2
        }
    }
};

console.log("El Resultado de la suma es:", calculadora.sumar(1,2))
console.log("El Resultado de la resta es:",calculadora.restar(3,2))
console.log("El Resultado de la multiplicacion es:",calculadora.multiplicar(3,2))
console.log("El Resultado de la division es:",calculadora.division(3,0))