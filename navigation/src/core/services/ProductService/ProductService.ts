import { Product } from "../../entities";
import ProductRepository from "../../repositories/ProductRepository/ProductRepository";

const ProductService = {
    register: (product: Product): void => {
        ProductRepository.create(product);
    },

    getByUsername: (username: string): Product[] => {
        return ProductRepository.findByUsername(username);
    },
};

export default ProductService;
