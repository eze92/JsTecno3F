/*Dado un arreglo de colores = ["rojo", "azul", "verde", "amarillo", "morado"],eliminar los colores "verde" y "amarillo" para reemplazarlos por "negro" y"blanco". */

const colores = ["rojo", "azul", "verde", "amarillo", "morado"];

console.log(colores)

//la primera posiciion indica el indice de donde empieza a tomar, la segunda indica la cantidad de elementos a remover  si tiene un 0 que no saco ningun elemento si le ponto otro numero es la cantidad a sacar, lo que ponga despues de la coma son los nuevos elementos a agregar 

colores.splice(2,2, "negro", "blanco");

console.log(colores)
