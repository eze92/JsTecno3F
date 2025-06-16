/*Crear un programa en el que el usuario debe adivinar un número secreto entre 1 y 10.
El número secreto estará definido dentro del código (por ejemplo, el número 5).
El programa debe permitir al usuario 3 intentos para adivinar el número.

1 . El programa debe mostrar un mensaje pidiendo al usuario que ingrese un número entre 1 y 10.
2 . Luego de cada intento, si el número no es correcto:

3 . Si el número ingresado es correcto:

4 . Si agota los 3 intentos sin adivinar:
Debe indicar que no acertó.
Informar cuántos intentos le quedan.

Mostrar un mensaje de felicitación indicando en qué intento adivinó.
Terminar el juego.

Mostrar un mensaje indicando que perdió.

*/

let numeroSecreto = 5;
let encontrado = false;
const maxIntentos = 3;
let intentos = 0;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pedirNumero() {
    if (encontrado || intentos >= maxIntentos) {
        if (!encontrado) {
            console.log("Perdiste. No adivinaste el número secreto.");
        }
        rl.close();
        return;
    }

    rl.question(`Intento ${intentos + 1} de ${maxIntentos}. Ingresa un número entre 1 y 10: `, (respuesta) => {
        const numero = parseInt(respuesta);
        if (numero === numeroSecreto) {
            encontrado = true;
            console.log(`¡Felicitaciones! Adivinaste el número secreto en el intento ${intentos + 1}.`);
            rl.close();
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                console.log(`No es el número secreto. Te quedan ${maxIntentos - intentos} intento(s).`);
                pedirNumero();
            } else {
                console.log("No adivinaste el número al tercer intento.");
                rl.close();
            }
        }
    });
}

//no es necesario el while
while (!encontrado && intentos < maxIntentos) {
    pedirNumero();
    break; // Necesario para evitar múltiples llamadas por la naturaleza asíncrona de readline
}