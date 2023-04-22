import {StyleSheet, Platform} from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import {Margin} from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    marginHorizontal: Margin.default,
    marginVertical: Margin.small,
  },
  tiDropdownText: {
    color: FSColors.black,
  },
  dDropdownStyle: {
    // marginTop: Platform.OS === 'ios' ? -50 : 8,
  },
});

export default styles;
