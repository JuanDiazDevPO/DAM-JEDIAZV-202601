import { db } from "../../config";
import { Sale } from "../../entities";

const SaleRepository = {
    create: (sale: Sale): void => {
        const query = `INSERT INTO sales (username, productId, productName, cantidad, precioVenta, costoCompra, ganancia, fecha)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
        db.executeSync(query, [
            sale.username,
            sale.productId,
            sale.productName,
            sale.cantidad,
            sale.precioVenta,
            sale.costoCompra,
            sale.ganancia,
            sale.fecha,
        ]);
    },

    findByUsername: (username: string): Sale[] => {
        const { rows } = db.executeSync(
            'SELECT * FROM sales WHERE username = ? ORDER BY id DESC;',
            [username]
        );
        return (rows ?? []) as unknown as Sale[];
    },
};

export default SaleRepository;
