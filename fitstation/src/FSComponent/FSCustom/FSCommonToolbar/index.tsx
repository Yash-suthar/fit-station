import React from 'react';
import { View, Pressable, Text, ViewStyle, TextStyle } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { FSNever, FSAlways } from '../../../FSUtils/FSConst';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';

interface FSCommonToolbarProps {
  containerStyle?: ViewStyle
  title?: string;
  skip?: string;
  textStyle?: TextStyle;
  skipStyle?: TextStyle;
  isRightButton?: boolean;
  isLeftButton?: boolean;
  leftIcon?: any;
  isExtraSpace?: boolean;
  rightIcon?: any;
  onLeftClickListener?: () => void;
  onRightClickListener?: () => void;

}
const FSCommonToolbar: React.FC<FSCommonToolbarProps> = ({
  containerStyle,
  title,
  skip,
  textStyle,
  skipStyle,
  isRightButton,
  isLeftButton,
  leftIcon,
  isExtraSpace,
  rightIcon,
  onLeftClickListener,
  onRightClickListener,
}) => {

  return (
    <SafeAreaView
      forceInset={{ bottom: FSNever, top: FSAlways }}
      style={[styles.saContainer, containerStyle]}>
      <View style={styles.vToolbarContainer}>
        <Pressable
          style={styles.pRightIconContainer}
          onPress={isLeftButton ? onLeftClickListener : null}>
          {isLeftButton ? leftIcon : null}
        </Pressable>
        <Text
          style={[CS.text_black_regular, styles.tTitle, textStyle]}>
          {title}
        </Text>
        {skip? <Text
          style={[CS.text_black_semibold, styles.tTitle, skipStyle]}>
          {skip}
        </Text> : null}
        <Pressable
          style={styles.pLeftIconContainer}
          onPress={isRightButton ? onRightClickListener : null}>
          {isRightButton ? rightIcon : null}
        </Pressable>
      </View>
      {isExtraSpace ? <View style={styles.vExtraContainer} /> : null}
    </SafeAreaView>
  );
};

export default FSCommonToolbar;
