import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Input, Button } from '../../atoms';
import { PasswordInput } from '../../molecules';
import styles from './LoginFormStyles';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  onSignUp: () => void;
  onForgotPassword?: () => void;
}

const LoginForm = ({ onSubmit, onSignUp, onForgotPassword }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Input
        label="Username"
        placeholder="johndoe"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <PasswordInput
        label="Password"
        placeholder="Minimum 8 chars"
        value={password}
        onChangeText={setPassword}
      />
      <Pressable onPress={onForgotPassword} style={styles.forgotContainer}>
        <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
      </Pressable>
      <Button title="Login" onSubmit={() => onSubmit(username, password)} disabled={false} />
      <View style={styles.signUpRow}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <Pressable onPress={onSignUp}>
          <Text style={styles.signUpLink}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;
