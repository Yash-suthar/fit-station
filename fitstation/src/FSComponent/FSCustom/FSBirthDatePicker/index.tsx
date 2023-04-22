import React from 'react';
import {Image, Pressable, View} from 'react-native';
import FSTextInput from '../FSTextInput';
import styles from './styles';

interface FSBirthDatePickerProps {
  placeholder?: string;
  value?: string;
  icon?: any;
  iconStyle?: any;
  extraStyle?: any;
  handleClick?: (link?: any) => void;
}

const FSBirthDatePicker: React.FC<FSBirthDatePickerProps> = ({
  placeholder,
  value,
  icon,
  iconStyle,
  extraStyle,
  handleClick,
}) => {
  return (
    <Pressable
      onPress={handleClick}
      style={[styles.pContainer, extraStyle && extraStyle]}>
      <View style={styles.vContainerFlex}>
        <View style={styles.vIcon}>
          <Image source={icon} style={[styles.iIcon, iconStyle]} />
        </View>
        <FSTextInput
          placeholder={placeholder}
          value={value}
          onChangeText={''}
          editable={false}
          iStyle={styles.pTextInput}
        />
      </View>
    </Pressable>
  );
};

export default FSBirthDatePicker;
