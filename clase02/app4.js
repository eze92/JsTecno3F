
console.log("Clase 2");
/*4. Del punto anterior, reemplazar todos los espacios en blanco por "-".
Así como también cambiar la letra "a" por un 4.
Si la frase es "hola mundo", el resultado deberá ser: "HOL4-MUNDO"*/

/*let frase = prompt("Ingresa una frase:");;

let todoEnMayuscula = frase.toLocaleUpperCase();

let reemplazar = todoEnMayuscula.replace("", "-");
let reemplazarpor4 = reemplazar.replace ("A", "4")

console.log(reemplazarpor4);
*/
/*4. Del punto anterior, reemplazar todos los espacios en blanco por "-".
Así como también cambiar la letra "a" por un 4.
Si la frase es "hola mundo", el resultado deberá ser: "HOL4-MUNDO"*/

let frase = prompt("Ingresa una frase:");

let todoEnMayuscula = frase.toLocaleUpperCase();

// Reemplazar todos los espacios por "-"
let reemplazar = todoEnMayuscula.replace(/ /g, "-");

// Reemplazar la letra "A" por un 4
let reemplazarpor4 = reemplazar.replace(/A/g, "4");

console.log(reemplazarpor4);



