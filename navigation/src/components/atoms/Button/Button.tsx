import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './ButtonStyles';

interface ButtonProps {
  disabled?: boolean;
  title: string;
  onSubmit: () => void;
}

const Button = ({ title, onSubmit, disabled = false }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onSubmit}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
