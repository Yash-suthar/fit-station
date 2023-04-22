import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vCardContainer: {
    marginHorizontal: Margin.default,
    marginVertical: Margin.small,
    borderRadius: Sizes.cornerRadius.large,
    backgroundColor: FSColors.black,
},
  iBackground: {
    borderRadius: Sizes.cornerRadius.large,
    opacity: 0.7
  },
  vTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tTitle: {
    fontSize: Sizes.text.default,
    textAlign: 'left',
  },
  tSteps: {
    fontSize: Sizes.text.detail,
  },
  aStarContainer: {
    marginBottom: -Margin.extraSmall,
  }

});

export default styles;
