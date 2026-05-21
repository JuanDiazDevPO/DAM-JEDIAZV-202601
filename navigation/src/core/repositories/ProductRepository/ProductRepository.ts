import { db } from "../../config";
import { Product } from "../../entities";

const ProductRepository = {
    create: (product: Product): void => {
        const query = `INSERT INTO products (username, nombre, sku, cantidadStock, costoCompra, precioVenta, descripcion)
        VALUES (?, ?, ?, ?, ?, ?, ?);`;
        db.executeSync(query, [
            product.username,
            product.nombre,
            product.sku,
            product.cantidadStock,
            product.costoCompra,
            product.precioVenta,
            product.descripcion,
        ]);
    },

    findByUsername: (username: string): Product[] => {
        const query = `SELECT * FROM products WHERE username = ? ORDER BY id DESC;`;
        const { rows } = db.executeSync(query, [username]);
        return (rows ?? []) as unknown as Product[];
    },

    updateStock: (id: number, newStock: number): void => {
        db.executeSync('UPDATE products SET cantidadStock = ? WHERE id = ?', [newStock, id]);
    },
};

export default ProductRepository;
