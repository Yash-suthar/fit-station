import {StyleSheet} from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import {Margin} from '../../../FSUtils/FSDimensions';
import {Sizes} from '../../../FSUtils/FSDimensions';
const styles = StyleSheet.create({
  scrollViewFlex: {
    flex: 1,
  },
  vContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  vInputContainer: {
    flex: 1,
  },
  tTitle: {
    color: FSColors.black,
    fontSize: Sizes.text.title,
    textAlign: 'center',
    margin: Margin.large,
    fontWeight: 'bold',
  },
  tErrorTextStyle: {
    color: FSColors.red,
    marginHorizontal: Margin.default,
  },
});

export default styles;
