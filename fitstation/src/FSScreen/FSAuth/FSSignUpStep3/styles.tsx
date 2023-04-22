import {StyleSheet} from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import {Margin, Padding} from '../../../FSUtils/FSDimensions';
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
  tAskAboutBirthDate: {
    color: FSColors.black,
    fontSize: Sizes.text.title,
    textAlign: 'center',
    margin: Margin.large,
    fontWeight: 'bold',
  },
  tErrorTextStyle: {
    color: FSColors.red,
    marginHorizontal: Margin.defaultLarge,
    marginTop: Margin.small,
  },
  checkBox: {
    flexDirection: 'row',
    marginHorizontal: Margin.defaultLarge,
    marginVertical: Margin.defaultSmall,
  },
  tTermsOfServices: {
    fontWeight: 'bold',
  },
});

export default styles;
