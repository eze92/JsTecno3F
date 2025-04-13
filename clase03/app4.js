/*Ejercicio 4: Calculo de notas Pide al usuario que ingrese su calificacion (entre 0 y 100). 
Luego, mostrar su equivalencia en letras segun la siguiente informacion:
90-100: A
80-89: B
70-79: C
60-69: D
Menos de 60: F */

let calificacion = parseInt(prompt( "Ingrese su calificacion"));

if( calificacion >= 90  && calificacion < 100){
    console.log("Su calificacion es A")
}
else if( calificacion >= 80  && calificacion <= 89){
    console.log( "Su calificacion es B")
}
else if( calificacion >= 70  && calificacion <= 79 ){
    console.log( "Su calificacion es C")

}else if (calificacion >= 60  && calificacion <= 69) {
    console.log( "Su calificacion es D ")
}
else {
    console.log( "Su calificacion es F")
}
