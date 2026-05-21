import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, Pressable } from 'react-native';
import { Product } from '../../../core/entities';
import styles from './SellModalStyles';

interface SellModalProps {
  product: Product | null;
  onConfirm: (quantity: number) => void;
  onCancel: () => void;
}

const SellModal = ({ product, onConfirm, onCancel }: SellModalProps) => {
  const [quantity, setQuantity] = useState('1');

  useEffect(() => {
    if (product) setQuantity('1');
  }, [product]);

  const handleConfirm = () => {
    const qty = parseInt(quantity, 10);
    if (!isNaN(qty) && qty > 0) {
      onConfirm(qty);
    }
  };

  return (
    <Modal visible={!!product} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Vender producto</Text>
          <Text style={styles.productName}>{product?.nombre}</Text>
          <Text style={styles.stockText}>Stock disponible: {product?.cantidadStock}</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantity}
            onChangeText={setQuantity}
            placeholder="Cantidad"
            placeholderTextColor="#9CA3AF"
            selectTextOnFocus
          />
          <View style={styles.actions}>
            <Pressable style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelText}>CANCELAR</Text>
            </Pressable>
            <Pressable style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmText}>CONFIRMAR</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SellModal;
