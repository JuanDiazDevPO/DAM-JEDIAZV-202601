import React from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { AuthTemplate } from '../../components/templates';
import { ProductForm, ProductFormData } from '../../components/organism';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../Routes';
import { ProductService } from '../../core/services';
import AuthRepository from '../../core/repositories/authRepository/AuthRepository';
import { colors } from '../../themes/colors';

const RegisterProductPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleSubmit = async (data: ProductFormData) => {
    if (!data.nombre || !data.sku || !data.cantidadStock || !data.costoCompra || !data.precioVenta) {
      Alert.alert('Error', 'Completa todos los campos obligatorios');
      return;
    }

    const user = await AuthRepository.get();
    if (!user) {
      Alert.alert('Error', 'No hay sesión activa');
      return;
    }

    try {
      ProductService.register({
        username: user.username,
        nombre: data.nombre,
        sku: data.sku,
        cantidadStock: Number(data.cantidadStock),
        costoCompra: Number(data.costoCompra),
        precioVenta: Number(data.precioVenta),
        descripcion: data.descripcion,
      });
      Alert.alert('Éxito', 'Producto creado correctamente', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <AuthTemplate title="REGISTRAR PRODUCTO" subtitle="Create a new product listing">
      <ProductForm onSubmit={handleSubmit} />
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.backLink}>
        <Text style={styles.backLinkText}>← Volver al inicio</Text>
      </Pressable>
    </AuthTemplate>
  );
};

const styles = StyleSheet.create({
  backLink: {
    alignItems: 'center',
    marginTop: 16,
  },
  backLinkText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default RegisterProductPage;
