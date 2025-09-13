import { StyleProp, TextInput, View } from 'react-native';
import React from 'react';

interface InputTextProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style: StyleProp<any>;
  placeHolderTextColor?: StyleProp<any>;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'web-search';
}

const InputText = ({
  placeholder,
  value,
  onChangeText,
  style,
  placeHolderTextColor,
  keyboardType,
}: InputTextProps) => {
  return (
    <View>
      <TextInput
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeHolderTextColor}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;
