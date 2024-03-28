const ProductManager = require('./product.manager');

const manager = new ProductManager();

console.log("******************* Inicio Test *******************")

console.log("Se busca todos los poductos: pero aun no hay ninguno")  
console.log(manager.getProducts()); // []
console.log("**********************************************")

//Agrego un producto
try {
    manager.addProduct({
        title: 'producto prueba 1',
        description: 'Este es un producto prueba 1',
        price: 100,
        thumbnail: 'Sin imagen',
        code: 'abc0001',
        stock: 25
    });
} catch (error) {
    console.log("Se imprimira: Todos los campos son obligatorios")
    console.error(error.message);
}
console.log(" Se agrego un producto:")
console.log("**********************************************")

//ahora busco todos los productos y me deberia mostrar el producto que agregue
console.log("Busco todos los productos: ahora deberia mostrar el producto que agregue")
console.log(manager.getProducts()); 
console.log("**********************************************")

console.log("Se agrega un producto con el mismo codigo del anterior: Deberia mostrar un error")
try {
    manager.addProduct({
        title: 'producto prueba 1',
        description: 'Este es un producto prueba 1',
        price: 100,
        thumbnail: 'Sin imagen',
        code: 'abc0001',
        stock: 25
    });
} catch (error) {
    console.log("Se imprimira: El código del producto ya existe")
    console.error(error.message); // El código del producto ya existe
}
console.log("**********************************************")

console.log("Busco un producto por id:1")
console.log(manager.getProductById(1));
console.log("**********************************************") 
console.log("Busco un producto por id:2 en cual no existe")
console.log(manager.getProductById(2)); // Not found
console.log("******************* Fin Test *******************")

//Para ejecutar codigo en tu terminal escribe node main.js