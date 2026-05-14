import React from 'react';
import { AuthTemplate } from '../../components/templates';
import { RegisterForm } from '../../components/organism';
import { AuthStackParamList } from '../../Routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthService } from '../../core/services';

const RegisterPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = async () => {
    navigation.navigate('Login');
    const user = {
      id: '',
      nombre: 'Tamarindo',
      username: 'Tamarindo',
      correo: 'tamarindo@mail.com',
      fechaNacimiento: '2000-01-01',
      contrasena: 'Tamarindo'
    };

    await AuthService.register(user);
  };

  return (
    <AuthTemplate title="REGISTER" subtitle="Create a new account">
      <RegisterForm onSubmit={handleRegister} disabledAction={false} />
    </AuthTemplate>
  );
};

export default RegisterPage;
