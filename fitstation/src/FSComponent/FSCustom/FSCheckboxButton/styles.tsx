import {StyleSheet} from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import {Icon, Margin} from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  pContainer: {
    height: Icon.defaultHeight,
    width: Icon.defaultHeight,
    borderColor: FSColors.secondary,
    borderWidth: 2,
    margin: Margin.small,
  },
  iTick: {
    alignSelf: 'center',
    backgroundColor: FSColors.secondary,
    height: Icon.defaultHeight,
    width: Icon.defaultHeight,
  },
});

export default styles;
