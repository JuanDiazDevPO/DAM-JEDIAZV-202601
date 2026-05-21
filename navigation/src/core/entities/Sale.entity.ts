export interface Sale {
  id?: number;
  username: string;
  productId: number;
  productName: string;
  cantidad: number;
  precioVenta: number;
  costoCompra: number;
  ganancia: number;
  fecha: string;
}
