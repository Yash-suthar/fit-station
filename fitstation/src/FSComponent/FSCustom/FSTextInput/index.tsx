import React from 'react';
import { KeyboardTypeOptions, ReturnKeyTypeOptions, View } from 'react-native';
import styles from './styles';
import FSColors from '../../../FSUtils/FSColors';
import { TextInput } from 'react-native-paper';
import { Sizes } from '../../../FSUtils/FSDimensions';

interface FSTextInputProps {
  placeholder?: string;
  inputProps?: any;
  onChangeText: any;
  value: any;
  index?: number
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  maxLength?: number;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  autoComplete?: string;
  editable?: boolean;
  iStyle?: any;
}
const FSTextInput: React.FC<FSTextInputProps> = ({
  placeholder,
  inputProps,
  onChangeText,
  value,
  index,
  keyboardType,
  returnKeyType,
  maxLength,
  secureTextEntry,
  multiline,
  numberOfLines,
  autoComplete,
  editable,
  iStyle,
}) => {

  return (
    <View>
      <TextInput
        mode='outlined'
        label={placeholder}
        placeholder={placeholder}
        outlineColor={FSColors.secondary}
        selectionColor={FSColors.secondary}
        theme={{ roundness: Sizes.cornerRadius.large, colors: { primary: FSColors.secondary, placeholder: FSColors.borderColor, text: FSColors.black } }}
        style={[styles.tiContainer, iStyle&&iStyle]}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        autoComplete={autoComplete}
        placeholderTextColor={FSColors.borderColor}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default FSTextInput;

