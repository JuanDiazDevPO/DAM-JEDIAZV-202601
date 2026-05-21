import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Product } from '../../../core/entities';
import styles from './ProductCardStyles';

interface ProductCardProps {
  product: Product;
  onSell: (product: Product) => void;
}

const ProductCard = ({ product, onSell }: ProductCardProps) => {
  const ganancia = product.precioVenta - product.costoCompra;
  const sinStock = product.cantidadStock === 0;

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{product.nombre}</Text>
        <Text style={styles.sku}>SKU {product.sku}</Text>
        <Text style={styles.stock}>Stock: {product.cantidadStock}</Text>
        <Text style={styles.ganancia}>Ganancia: ${ganancia.toFixed(2)}</Text>
      </View>
      <Pressable
        style={[styles.sellButton, sinStock && styles.sellButtonDisabled]}
        onPress={() => onSell(product)}
        disabled={sinStock}>
        <Text style={styles.sellButtonText}>VENDER</Text>
      </Pressable>
    </View>
  );
};

export default ProductCard;
