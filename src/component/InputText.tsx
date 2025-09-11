import { StyleProp, TextInput, View } from 'react-native';
import React from 'react';

interface InputTextProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style: StyleProp<any>;
  placeHolderTextColor?: StyleProp<any>;
}

const InputText = ({
  placeholder,
  value,
  onChangeText,
  style,
  placeHolderTextColor,
}: InputTextProps) => {
  return (
    <View>
      <TextInput
        style={style}
        placeholder={placeholder}
        placeholderTextColor={placeHolderTextColor}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;
