/*Una supermercado tiene un inventario de productos en un arreglo de objetos. Cada objeto tiene las propiedades nombre, categoria y precio. Requerimientos:Mostrar solo los productos de la categoría "tecnología".Sumar el precio de todos los productos de la categoría "hogar" y mostrar el total.*/


precioTotal = 0;

const inventario = [
    { nombre: "Laptop", categoria: "tecnologia" , precio:800 },
    { nombre: "Mesa", categoria: "hogar" , precio:100 },
    { nombre: "Celular", categoria: "tecnologia" , precio:500 },
    { nombre: "Silla", categoria: "hogar" , precio:500 }
];

for ( const item in inventario){
    if( (inventario[item].categoria) === "tecnologia"){
        console.log(inventario[item].nombre)
    }
}
for ( const item in inventario){
    if( (inventario[item].categoria) === "hogar"){
        precioTotal = inventario[item].precio + precioTotal
    }
}
console.log("El precio total de los articulos del hogar es", precioTotal)
