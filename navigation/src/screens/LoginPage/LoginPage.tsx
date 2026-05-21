import React from 'react';
import { Alert } from 'react-native';
import { AuthTemplate } from '../../components/templates';
import { LoginForm } from '../../components/organism';
import { AuthStackParamList } from '../../Routes';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthService } from '../../core/services';

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    try {
      await AuthService.login(username, password);
      navigation.navigate('Home');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
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
