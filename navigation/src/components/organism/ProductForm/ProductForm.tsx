import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from '../../atoms';
import { TextareaInput } from '../../molecules';
import styles from './ProductFormStyles';

export interface ProductFormData {
  nombre: string;
  sku: string;
  cantidadStock: string;
  costoCompra: string;
  precioVenta: string;
  descripcion: string;
}

interface ProductFormProps {
  onSubmit: (data: ProductFormData) => void;
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [nombre, setNombre] = useState('');
  const [sku, setSku] = useState('');
  const [cantidadStock, setCantidadStock] = useState('');
  const [costoCompra, setCostoCompra] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');
  const [descripcion, setDescripcion] = useState('');

  return (
    <View style={styles.container}>
      <Input
        label="Nombre del Producto"
        placeholder="Producto XYZ"
        value={nombre}
        onChangeText={setNombre}
      />
      <Input
        label="SKU / Código"
        placeholder="SKU-001"
        value={sku}
        onChangeText={setSku}
        autoCapitalize="none"
      />
      <Input
        label="Cantidad en Stock"
        placeholder="0"
        value={cantidadStock}
        onChangeText={setCantidadStock}
        keyboardType="numeric"
      />
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <Input
            label="Costo de Compra"
            placeholder="0.00"
            value={costoCompra}
            onChangeText={setCostoCompra}
            keyboardType="decimal-pad"
          />
        </View>
        <View style={styles.rowItem}>
          <Input
            label="Precio de Venta"
            placeholder="0.00"
            value={precioVenta}
            onChangeText={setPrecioVenta}
            keyboardType="decimal-pad"
          />
        </View>
      </View>
      <TextareaInput
        label="Descripción"
        placeholder="Describe el producto..."
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <Button
        title="Crear Producto"
        onSubmit={() => onSubmit({ nombre, sku, cantidadStock, costoCompra, precioVenta, descripcion })}
      />
    </View>
  );
};

export default ProductForm;
