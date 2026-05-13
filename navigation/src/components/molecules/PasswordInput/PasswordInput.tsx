import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { Input } from '../../atoms';
import styles from './PasswordInputStyles';

interface PasswordInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput = ({ label, placeholder, value, onChangeText }: PasswordInputProps) => {
  const [visible, setVisible] = useState(false);

  const eyeIcon = (
    <Pressable onPress={() => setVisible(v => !v)} hitSlop={8}>
      <Text style={styles.eyeIcon}>{visible ? '🙈' : '👁'}</Text>
    </Pressable>
  );

  return (
    <Input
      label={label}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={!visible}
      rightIcon={eyeIcon}
      autoCapitalize="none"
    />
  );
};

export default PasswordInput;
