import React from 'react';
import { Alert } from 'react-native';
import { AuthTemplate } from '../../components/templates';
import { RegisterForm } from '../../components/organism';
import { AuthStackParamList } from '../../Routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthService } from '../../core/services';

const RegisterPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = async (data: {
    nombre: string;
    username: string;
    correo: string;
    fechaNacimiento: string;
    contrasena: string;
    confirmPassword: string;
  }) => {
    if (!data.nombre || !data.username || !data.correo || !data.fechaNacimiento || !data.contrasena) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    if (data.contrasena !== data.confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    try {
      await AuthService.register({
        nombre: data.nombre,
        username: data.username,
        correo: data.correo,
        fechaNacimiento: data.fechaNacimiento,
        contrasena: data.contrasena,
      });
      Alert.alert('Éxito', 'Cuenta creada correctamente', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <AuthTemplate title="REGISTER" subtitle="Create a new account">
      <RegisterForm onSubmit={handleRegister} disabledAction={false} />
    </AuthTemplate>
  );
};

export default RegisterPage;
