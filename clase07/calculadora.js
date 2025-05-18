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
2 . El programa debe mostrar un menú con las siguientes opciones:El usuario debe poder ingresar el número de la opción elegida.
3 . Ingreso de Datos:Después de seleccionar una operación, el usuario deberá ingresar dos números.Si la operación seleccionada es división, debe validarse que el segundo número no sea0.4 . Salida del Programa:Mostrar el resultado de la operación seleccionada.Después de realizar una operación, debe volver a mostrar el menú hasta que elusuario elija la opción "Salir".
*/

const readline = require('readline');

// Crear la interfaz para la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
            return "No se puede dividir por cero"
        }else{
            return numero / numero2
        }
    }
};
/*

console.log("El Resultado de la suma es:", calculadora.sumar(1,2))
console.log("El Resultado de la resta es:",calculadora.restar(3,2))
console.log("El Resultado de la multiplicacion es:",calculadora.multiplicar(3,2))
console.log("El Resultado de la division es:",calculadora.division(3,0))

*/

// Función para mostrar el menú y procesar la elección del usuario
function mostrarMenu() {
    console.log("\nCalculadora - Selecciona una opción:");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");

    //solicita datos el usuario
    rl.question("Elige una opción: ", opcion => {
        if (opcion === "5") {
            console.log("¡Hasta luego!");
            rl.close(); // Cerramos la interfaz después de recibir la respuesta
            return;
        }

        rl.question("Ingresa el primer número: ", num1 => {
            rl.question("Ingresa el segundo número: ", num2 => {
                const numero1 = parseFloat(num1);
                const numero2 = parseFloat(num2);

                if (isNaN(numero1) || isNaN(numero2)) {
                    console.log("❌ Debes ingresar números válidos.");
                } else {
                    let resultado;
                    switch (opcion) {
                        case "1":
                            resultado = calculadora.sumar(numero1, numero2);
                            break;
                        case "2":
                            resultado = calculadora.restar(numero1, numero2);
                            break;
                        case "3":
                            resultado = calculadora.multiplicar(numero1, numero2);
                            break;
                        case "4":
                            resultado = calculadora.division(numero1, numero2);
                            break;
                        default:
                            console.log("❌ Opción inválida.");
                            mostrarMenu(); // Volver a mostrar el menú si la opción es incorrecta
                            return;
                    }
                    console.log(`✅ Resultado: ${resultado}`);
                }
                mostrarMenu(); // Volver a mostrar el menú después de la operación
            });
        });
    });
}

// Iniciar la calculadora
mostrarMenu();