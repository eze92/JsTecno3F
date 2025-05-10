/*
Ejercicio 2: Clasificación de estudiantes
Un arreglo contiene objetos que representan a estudiantes, cada uno con nombre y
calificacion.
Requerimientos:
Mostrar los nombres de los estudiantes aprobados (calificación mayor o igual a 6).
Contar y mostrar la cantidad de estudiantes reprobados.*/

aprobados = 0

const estudiantes = [
    { nombre : "Ana", calificacion: 8},
    { nombre : "Luis", calificacion: 5},
    { nombre : "Maria", calificacion: 7},
    { nombre : "Pedro", calificacion: 4}
]

for(const alumno in estudiantes){
    if( estudiantes[alumno].calificacion >= 6){
        console.log( estudiantes[alumno].nombre)
        aprobados = aprobados + 1
    }
}
console.log("La cantidad de estudiantes aprobados son:", aprobados)