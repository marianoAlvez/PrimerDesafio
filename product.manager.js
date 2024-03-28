class ProductManager {
    //Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
    constructor() {
        this.products = [];
        this.id = 0;
    }

    addProduct(product) {

//Validar que todos los campos sean obligatorios (title, description, price, thumbnail, code, stock). En caso de que alguno falte, lanzar un error.
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            throw new Error('Todos los campos son obligatorios');
        }

//Validar que no se repita el campo “code” en los productos agregados. En caso de que se repita, lanzar un error.
        if (this.products.some(p => p.code === product.code)) {
            throw new Error('El código del producto ya existe');
        }

//Cada vez que se agregue un producto, se le asignará un id único y autoincremental.
        this.id++;
        this.products.push({ ...product, id: this.id });
    }

//Devolver un listado de todos los productos agregados.
    getProducts() {
        return this.products;
    }

//Devolver un producto en base a su id. En caso de no encontrar el producto, devolver un mensaje error “Not found”.
    getProductById(id) {
        const product = this.products.find(p => p.id === id);

        if (!product) {
            console.error('Not found');
            return;
        }

        return product;
    }
}

module.exports = ProductManager;

