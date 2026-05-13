import React from 'react';
import { AuthTemplate } from '../../components/templates';
import { LoginForm } from '../../components/organism';
import { AuthStackParamList } from '../../Routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = () => {
    console.log('Login submitted');
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthTemplate title="LOGIN">
      <LoginForm onSubmit={handleLogin} onSignUp={handleSignUp} />
    </AuthTemplate>
  );
};

export default LoginPage;
