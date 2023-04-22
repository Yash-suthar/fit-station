import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes, Margin, Padding, BorderWidth } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  tToolbarTitle: {
    padding: Padding.small,
    borderWidth: BorderWidth.extraSmall,
    borderColor: FSColors.black,
    borderRadius: Sizes.cornerRadius.small,
    marginRight: -Margin.large
  },
  vContainer: {
    padding: Padding.default,
  },
  tMainTitle: {
    fontSize: Sizes.text.title,
    padding: Padding.default,
  },
  tSubtitle: {
    fontSize: Sizes.text.subtitle,
  },
  vImageContainer: {
    alignItems:'center',
  },
  iRopeImage: {
    height: Sizes.practiceProblemThumbHeight,
    width: Sizes.practiceProblemThumbHeight,
  },
  tLBText: {
    backgroundColor: FSColors.white,
    marginTop: -Margin.large,
    borderWidth: BorderWidth.extraSmall,
    borderColor: FSColors.primary,
    paddingHorizontal: Padding.small,
    paddingVertical: Padding.extraSmall
  },
  bStartButton: {
    borderRadius: Sizes.cornerRadius.extralarge,
    paddingVertical: Padding.defaultSmall,
    paddingHorizontal: Padding.large,
    marginTop: Margin.default,
  },
  bSkipButton: {
    borderRadius: Sizes.cornerRadius.extralarge,
    paddingVertical: Padding.defaultSmall,
    paddingHorizontal: Padding.large,
    backgroundColor: FSColors.primary,
  },
  
});

export default styles;
