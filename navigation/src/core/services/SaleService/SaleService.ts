import { Product } from "../../entities";
import ProductRepository from "../../repositories/ProductRepository/ProductRepository";
import SaleRepository from "../../repositories/SaleRepository/SaleRepository";

const SaleService = {
    sell: (product: Product, cantidad: number): void => {
        if (cantidad <= 0) {
            throw new Error("La cantidad debe ser mayor a 0");
        }
        if (cantidad > product.cantidadStock) {
            throw new Error(`Stock insuficiente. Disponible: ${product.cantidadStock}`);
        }

        ProductRepository.updateStock(product.id!, product.cantidadStock - cantidad);

        SaleRepository.create({
            username: product.username,
            productId: product.id!,
            productName: product.nombre,
            cantidad,
            precioVenta: product.precioVenta,
            costoCompra: product.costoCompra,
            ganancia: (product.precioVenta - product.costoCompra) * cantidad,
            fecha: new Date().toISOString(),
        });
    },
};

export default SaleService;
