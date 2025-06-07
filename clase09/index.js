/*escribe en el dom */
document.write("Hola a todos")

/*selecciona un único elemento que coincida con el ID especificado*/
const s = document.getElementById("saludo")

console.log(s)

/*Selecciona todos los elementos que tengan la clase especificada. Retorna una colección HTML (HTMLCollection) que se
actualiza automáticamente si el DOM cambia.
Es caseSensitve*/
const s1 = document.getElementsByClassName("pintar")

console.log(s1)

// en CSS # selector de ID . el . es un selector de Class
const s2 = document.querySelectorAll(".pintar") 
console.log(s2)

console.log(s.innerText)

s.innerText = "Hola gente de JS"

console.log(s.innerHTML)

const s4 = document.getElementById("saludo2")
s4.innerHTML = `<h5 class='pintar' style = 'color: red;'>Soy un H5</h5>`

/*1. Cambiar el contenido de un elemento
Cambiar el texto del párrafo con ID intro para que diga "Este texto
ha sido modificado con JavaScript".
Tip:
Usar textContent o innerText para cambiar el texto del párrafo.*/

const s5 = document.getElementById("saludo").textContent = "Cambio el texto del parrafo con js"
console.log(s5)

/*2. Agregar un nuevo elemento a la lista
Agregar un nuevo elemento al final de la lista con ID list.
Tip:
Crea un elemento <li> con el texto "Elemento 4".
Agregarlo al final de la lista*/


const lista = document.getElementById("list");
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 4";
lista.appendChild(nuevoElemento);

/*3. Cambiar el estilo de un elemento
Cambiar el color del texto del párrafo con ID status a rojo y su
fondo a amarillo.
Tip:
Usa la propiedad style para cambiar los colores o crear el estilo
en la hoja css y agregarlo al elemento utilizando classList.*/

const status = document.getElementById("status");
status.style.color = "red";
status.style.backgroundColor = "yellow";

/*4. Eliminar un elemento de la lista
Eliminar el segundo elemento (Elemento 2) de la lista con ID list.
Tip:
Traversing de DOM y eliminar :)*/

const lista2 = document.getElementById("list");
const segundoElemento = lista2.children[1]; // El índice 1 es el segundo elemento
if (segundoElemento) {
    lista2.removeChild(segundoElemento);
}

/* 5. Usar prompt para modificar el contenidoSolicitar al usuario un nuevo texto para el párrafo con ID intro y mostrarlo en la página.*/

const nuevoTexto = prompt("Ingresa un nuevo texto para el párrafo:");
if (nuevoTexto !== null) {
    document.getElementById("intro").textContent = nuevoTexto;
}

/*6. Personalizar el footer con tu nombreSolicitar al usuario su nombre con prompt y reemplazar el texto "[Tu Nombre]" en el footer con el nombre ingresado.*/


const nombreUsuario = prompt("¿Cuál es tu nombre?");
if (nombreUsuario !== null && nombreUsuario.trim() !== "") {
    const footer = document.getElementById("footer");
    footer.textContent = `Creado por ${nombreUsuario}`;
}