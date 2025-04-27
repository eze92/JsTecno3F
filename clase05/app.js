/*Ejercicio 1
Dado el arreglo de frutas que contienen "manzana", "banana", "pera", "naranja", recorrerlo con un bucle e imprimir por consola el índice y el valor de cada elemento.*/

const frutas = ["manzana", "banana", "pera", "naranja"];

for ( let i = 0; i <= frutas.length - 1; i++){
    console.log("El indice es:" , i , "y el valor es:" , frutas[i] )
}


/*Ejercicio 2
Con el arreglo anterior, realizar las siguientes 

1. Agregar "kiwi" al final.*/
frutas.push("Kiwi");
console.log( frutas )

/*2. Agregar "sandía" al inicio.*/

frutas.unshift("sandia");
console.log( frutas )

/*3. Quitar el primer elemento.*/

frutas.shift();
console.log( frutas )

/*4. Quitar el último elemento. Imprime el arreglo final.*/

frutas.pop();
console.log( frutas )
