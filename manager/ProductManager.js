import fs from 'fs';

const path = './files/Productos.json'

export default class ProductManager {
    constructor(path) {
        this.path = path;
    }

    getProducts = async () => {
        try {
            if (fs.existsSync(path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                console.log(data);
                const products = JSON.parse(data);
                return products;
            } else {
                return [];
            }
        }

        catch (error) {
            console.log('error')
        }
    }

    addProduct = (titulo, descripcion, precio, thumbnail, codigo, stock) => {
        const producto = {
            titulo,
            descripcion,
            precio,
            thumbnail,
            codigo,
            stock,
            productos: []
        }

        if (this.productos.length === 0) {
            producto.id = 1
        } else {
            producto.id = this.productos[this.productos.length - 1].id + 1
        }

        this.productos.push(producto)
    }

    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex(product => product.id === idProduct);

        if (productIndex === -1) {
            console.log("No encontrado");
            return;
        }

        const productAdd = this.products[productIndex].products.includes(idProduct);

        if (productAdd) {
            console.log("El producto se agregó correctamente");
            return;
        }
        this.products[productIndex].products.push(idProduct)
    }
};

const handleProducts = new productManager();
handleProducts.addProduct('Pincel', 'Punta redonda', 32, 'sin imágen', 'xy181', 100);
handleProducts.addProduct('Lápiz', 'Punta gruesa', 45, 'sin imágen', 'xy182', 150);
handleProducts.addProduct('Birome', 'Azul', 78, 'sin imágen', 'xy183', 38);


handleProducts.getProductById(1);
handleProducts.getProductById(2);
handleProducts.getProductById(3);


console.log(handleProducts.getProducts());