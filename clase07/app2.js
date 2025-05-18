/*1.Crea una función que calcule el índice de masa corporal (IMC) de
una persona a partir de su altura en metros y peso en kilogramos,
que se recibirán como parámetros.*/

function calculoIMC( peso, altura){
    return peso / (altura **2);
}
console.log("El indice IMC es", calculoIMC(55,1.65).toFixed(2)) // tofixed redondea el numero

/*
2. Crea una función que calcule el valor del factorial de un número
pasado como parámetro.*/

function factorial(numero){

    if( numero == 0 || numero == 1){
        return 1;
    }
    return numero * factorial(numero -1 )
}
/* otra forma con for
let resultado = 1;
for (let i = 2; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}*/
console.log(factorial(5));

/*3. Crea una función que convierta un valor en dólares, pasado como
parámetro, y devuelva el valor equivalente en pesos.*/


function conversionADolar(valorDolar, tcPesos) {
    return  (valorDolar * tcPesos);
}
console.log("El valor del cambio a pesos es de" ,conversionADolar(5, 1200) )

/*4. Crea una función que muestre en pantalla la tabla de multiplicar
de un número dado como parámetro.*/

function tablaMultiplicar(numero){
    let resultado;
    for( let i = 1; i <= numero ; i++){
        resultado = numero * i;
        console.log(`El valor de la multiplicación es ${i} x ${numero} = ${resultado}`)
    }
    return resultado;
}
tablaMultiplicar(10);

/*5. Crea una función que muestre en la consola el número más grande
y el número más pequeño en un array.*/

const arrayPrincipal = [2,10,3,15,1];

function compararNumeroArray( array ){

    if (array.length === 0) return

    let maximo = array[0];
    let minimo = array[0];

    for( let i = 0; i <= array.length - 1; i ++){
        if (array[i] > maximo) {
            maximo = array[i];
        }
        if (array[i] < minimo) {
            minimo = array[i];
        }
    }
    console.log(`El número más grande es: ${maximo}`);
    console.log(`El número más pequeño es: ${minimo}`);
}
/*
para calcular mas directo puedo usar
console.log(`El número más grande es: ${Math.max(...arrayPrincipal)}`);
console.log(`El número más pequeño es: ${Math.min(...arrayPrincipal)}`);
*/

compararNumeroArray( arrayPrincipal);