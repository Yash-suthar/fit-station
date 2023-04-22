import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes, Margin, Padding } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vCardContainer: {
    marginBottom: Margin.small,
    backgroundColor: FSColors.white,
  },
  iImageContainer: {
    backgroundColor: FSColors.black,
  },
  iImageStyleContainer: {
    opacity: 0.7,
  },
  vCardDetailsRightFlex: {
    marginTop: Margin.extralarge + Margin.default,
    padding: Padding.default,
    alignItems: 'flex-start'
  },
  vCardDetailsCenter: {
    marginVertical: Margin.extralarge - Margin.extraSmall,
    alignItems: 'center'
  },
  tCardName: {
    fontSize: Sizes.text.default,
  },
  tCardData: {
    fontSize: Sizes.text.data,
  },
  bFloatingButton: {
    borderRadius: Sizes.cornerRadius.extralarge,
  },
  tTextStyle: {
    fontSize: Sizes.text.detail
  },
  tTodayChallange: {
    fontSize: Sizes.text.detail - 2
  },
  iLeftIcon: {
    marginRight: Margin.small
  },
});

export default styles;
