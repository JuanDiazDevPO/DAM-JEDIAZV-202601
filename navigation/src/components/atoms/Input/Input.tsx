import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import styles from './InputStyles';

interface InputProps extends TextInputProps {
  label: string;
  rightIcon?: React.ReactNode;
}

const Input = ({ label, rightIcon, style, ...rest }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#9CA3AF"
          {...rest}
        />
        {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
      </View>
    </View>
  );
};

export default Input;
