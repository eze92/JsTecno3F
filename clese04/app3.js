/*Ejercicio 3: 
Banderas y bucle do-while
Escribir un programa que simule una cuenta regresiva desde 10 hasta 1 e imprima"Despegue!" al final de la cuenta.

pistas:
*Utiliza un bucle do-while para realizar la cuenta regresiva.
*Declara una variable bandera (boolean) para indicar cuándo la cuenta ha llegado a 1.
*En cada iteración, imprime el valor actual y disminuye el contador.
*Una vez que el contador llegue a 1, cambia la bandera y sal del bucle.
Imprime "Despegue!" fuera del bucle.*/

cuentaACero = false;
contador = 10;

do{
    console.log(contador);
    contador--;
    if (contador == 1){
        cuentaACero = true;
    }
}
while   (cuentaACero == false); // La bandera se usa para salir del bucle cuando el contador llega a 1.
// El bucle se ejecuta mientras la bandera sea falsa, es decir, hasta que el contador llegue a 1.   
console.log("Despegue!");   