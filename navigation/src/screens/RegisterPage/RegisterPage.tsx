import React from 'react';
import { AuthTemplate } from '../../components/templates';
import { RegisterForm } from '../../components/organism';
import { AuthStackParamList } from '../../Routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const RegisterPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <AuthTemplate title="REGISTER" subtitle="Create a new account">
      <RegisterForm onSubmit={handleRegister} />
    </AuthTemplate>
  );
};

export default RegisterPage;
