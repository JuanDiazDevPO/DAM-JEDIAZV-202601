import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './ButtonStyles';

interface ButtonProps {
  title: string;
  onSubmit: () => void;
}

const Button = ({ title, onSubmit }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onSubmit}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
