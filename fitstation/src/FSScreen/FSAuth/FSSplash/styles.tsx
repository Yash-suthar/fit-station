import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes } from '../../../FSUtils/FSDimensions';


const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: FSColors.primary
  },
  tSplash: {
    alignSelf: 'center',
    fontSize: Sizes.toolBarHeight,
  },
});

export default styles;
