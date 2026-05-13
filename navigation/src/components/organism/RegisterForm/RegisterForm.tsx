import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '../../atoms';
import { PasswordInput } from '../../molecules';
import styles from './RegisterFormStyles';

interface RegisterFormProps {
  onSubmit: () => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const calendarIcon = <Text style={styles.calendarIcon}>📅</Text>;

  return (
    <View style={styles.container}>
      <Input
        label="Full Name"
        placeholder="John Doe"
        value={fullName}
        onChangeText={setFullName}
      />
      <Input
        label="Username"
        placeholder="johndoe123"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Input
        label="Email Address"
        placeholder="johndoe@example.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        label="Date of Birth"
        placeholder="YYYY-MM-DD"
        value={dob}
        onChangeText={setDob}
        rightIcon={calendarIcon}
      />
      <PasswordInput
        label="Password"
        placeholder="Minimum 8 chars"
        value={password}
        onChangeText={setPassword}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Re-enter password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Create Account" onSubmit={onSubmit} />
    </View>
  );
};

export default RegisterForm;
