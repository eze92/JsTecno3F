/* Ejercicio 3: Sistema de Evaluación de Empleados
Una empresa realiza evaluaciones de desempeño a sus empleados. Cada empleado tiene un objeto con nombre,
 departamento, evaluaciones (un arreglo de números que representa lacalificación mensual durante el año),
  y activo (un valor booleano que indica si sigue trabajandoen la empresa)

El objetivo es analizar el desempeño de los empleados por lo tanto los
requerimientos son:
Calcular el promedio de evaluaciones de cada empleado.
Contar cuántos empleados tienen un promedio mayor o igual a 8(excelentes) y 
cuántos están por debajo de 5 (en riesgo).

Crear un nuevo arreglo que contenga solo los empleados activos con promedio mayor o igual a 6.
.*/


const empleados = [
	{
	  nombre: "Carlos",
	  departamento: "Ventas",
	  evaluaciones: [7,8,6,9,7,8,7,6,8,7,6,7],
      activo:true
	},
	{
	  nombre: "Ana",
	  departamento: "Marketing",
	  evaluaciones: [4,5,3,4,4,4,3,4,4,3,4,3],
      activo:true
	},
	{
	  nombre: "Luis",
	  departamento: "It",
	  evaluaciones: [8,9,8,8,9,8,8,9,9,8,8,9],
      activo:false
	},
	{
	  nombre: "Maria",
	  departamento: "Finanzas",
	  evaluaciones: [5,6,5,6,5,6,5,6,5,6,5,6],
      activo:true
	}
];

let excelentes = 0;
let enRiesgo = 0;
const empleadosActivos = [];

for (const emp of empleados){
	let sumaEvaluaciones = 0;
	for ( let i = 0; i < emp.evaluaciones.length  ; i ++){
		sumaEvaluaciones = (sumaEvaluaciones + emp.evaluaciones[i]);
	}
	const promedio = sumaEvaluaciones / emp.evaluaciones.length;

	if(promedio >= 8){
		excelentes = excelentes + 1;
	}else if ( promedio < 5){
		enRiesgo = enRiesgo + 1;
	}

	if ( promedio > 6 && emp.activo === true){
        empleadosActivos.push(emp.nombre)
    }

	console.log(`Empleado: ${emp.nombre}, Total de evaluaciones: ${sumaEvaluaciones}, Con promedio:, ${promedio.toFixed(2)}` )
}
console.log(`Empleados excelentes: ${excelentes}`);
console.log(`Empleados en riesgo: ${enRiesgo}`);
console.log(`Empleados activos y promedio mayor a 6: ${empleadosActivos}`);


