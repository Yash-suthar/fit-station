import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vCardContainer: {
    marginHorizontal: Margin.default,
    marginVertical: Margin.small,
    borderRadius: Sizes.cornerRadius.large,
    backgroundColor: FSColors.black
},
  vTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iBackground: {
    borderRadius: Sizes.cornerRadius.large
  },
  tTitle: {
    fontSize: Sizes.text.title,
    textAlign: 'left',
  },
});

export default styles;
