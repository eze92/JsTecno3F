/*
Crear una calculadora que permita al usuario realizar operaciones matemáticasbásicas: suma, resta, multiplicación y división. 
Se debe cumplir los siguientesrequerimientos:
Ingreso de datos: 1.
El usuario deberá ingresar dos números y el tipo de operación que desea realizar (+, -, *, /).Si el usuario ingresa una operación inválida, se le debe notificar con unmensaje de error.
Operaciones: 2.
La calculadora debe permitir realizar las operaciones de suma, resta,multiplicación y división.Si el usuario elige división y el segundo número es 0, la calculadora debemostrar un mensaje de error indicando que no se puede dividir por cero.
Funcionalidad iterativa: 3.
Después de mostrar el resultado, pregunta al usuario si desea realizar otraoperación.Si el usuario responde "sí", se reinicia la calculadora, permitiéndoleingresar nuevos números y una nueva operación.Si el usuario responde "no", finaliza el programa mostrando un mensajede despedida.*/

let continuar = true;
while (continuar) {
    let numero1 = parseFloat (prompt("Ingrese el primer numero: "));
    let numero2 = parseFloat (prompt("Ingrese el segundo numero: "));
    let operacion = prompt("Ingrese la operacion a realizar: Suma, Resta, Multiplicacion o Division: ");
    let resultado;

    if (operacion === "Suma"){
        resultado = numero1 + numero2;
        console.log( "Resultado:",resultado)
    }else if(operacion === "Multiplicacion") {
        resultado = numero1 * numero2;
        console.log("Resultado:",resultado);
    }else if(operacion === "Resta"){
        resultado = numero1 - numero2;
        console.log("Resultado:",resultado);
    }else if(operacion === "Division" ){
        if(numero2 === 0){
            console.log("Error: No se puede dividir por cero.");
        }else{
            resultado = numero1 / numero2;
            console.log("Resultado:",resultado);
        }
    } else{
        console.log( "La operacion ingresada no es valida")
    }

    // Preguntar si desea continuar
    let respuesta = prompt("¿Desea realizar otra operación? (si/no): ").toLowerCase();
    if (respuesta !== "si") {
        continuar = false;
        console.log("Gracias por usar la calculadora. ¡Adiós!");
    }
}
