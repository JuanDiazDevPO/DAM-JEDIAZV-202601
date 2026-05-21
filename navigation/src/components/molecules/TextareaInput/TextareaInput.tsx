import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './TextareaInputStyles';

interface TextareaInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextareaInput = ({ label, placeholder, value, onChangeText }: TextareaInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        autoCapitalize="none"
      />
    </View>
  );
};

export default TextareaInput;
