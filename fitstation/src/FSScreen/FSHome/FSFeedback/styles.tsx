import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { BorderWidth, Icon, Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vFeedbackContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  tHeaderText: {
    fontSize: Sizes.text.title,
    fontWeight: 'bold'
  },
  vTitleText: {
    alignItems: 'center',
    margin: Margin.default,
    paddingBottom: Padding.default,
  },
  vUserIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: Icon.height,
    width: Icon.height,
    backgroundColor: FSColors.blueIcon,
    borderRadius: Sizes.cornerRadius.extralarge
  },
  tUserName: {
    fontSize: Sizes.text.default,
    marginVertical: Margin.small,
    fontWeight: 'bold'
  },
  tRatingContainer: {
    marginVertical: Margin.default,
    fontSize: Sizes.text.subtitle,
    color: '#FFCD3A',
  },
  tRatingCount: {
    fontSize: Sizes.text.default,
  },
  rStartRating: {
    marginBottom: Margin.large,
  },
  vButtonContainer: {
    marginHorizontal: Margin.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bNotNowButton: {
    backgroundColor: FSColors.primary,
    borderWidth: BorderWidth.small,
    borderColor: FSColors.secondary,
    borderRadius: Sizes.cornerRadius.default,
    paddingVertical: Padding.defaultSmall,
    width: Sizes.socialLoginButtons,
    marginHorizontal: 0,
  },
  bSubmitButton: {
    justifyContent: 'center',
    borderRadius: Sizes.cornerRadius.default,
    paddingVertical: Padding.defaultSmall,
    width: Sizes.socialLoginButtons,
    marginHorizontal: 0,
  },
  tTextStyle: {
    fontSize: Sizes.text.detail
  },
});

export default styles;
