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
  tAskAboutName: {
    fontSize: Sizes.text.title,
    margin: Margin.large,
  },
  tErrorTextStyle: {
    color: FSColors.red,
    marginHorizontal: Margin.defaultLarge,
    textAlign: 'left',
  },
  tInfoForUserName: {
    margin: Margin.large,
  },
});

export default styles;
