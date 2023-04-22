import { StyleSheet } from 'react-native';
import { Margin, Sizes, Padding, BorderWidth } from '../../../FSUtils/FSDimensions';
import FSColors from '../../../FSUtils/FSColors';

const styles = StyleSheet.create({
  vContainer: {
    marginBottom: Sizes.gifHeight
  },
  tCardName: {
    fontSize: Sizes.text.default,
  },
  tCardData: {
    fontSize: Sizes.text.data,
  },
  vCircleContainer: {
    flexDirection: 'row-reverse',
    margin: Margin.default,
    justifyContent: 'center',
    paddingBottom: Padding.default,
    borderBottomColor: FSColors.white,
    borderBottomWidth: BorderWidth.small,
  },
  vCircleInnerContainer: {
    flexDirection: 'row',
    marginHorizontal: Margin.default,
  },
  vCircles: {
    height: Sizes.circleSize,
    width: Sizes.circleSize,
    borderRadius: Sizes.cornerRadius.large,
    borderColor: FSColors.white,
    borderWidth: BorderWidth.extraSmall,
    marginRight: Margin.small,
  },
  flPreviewList: {
    marginHorizontal: Margin.default,
  },
});

export default styles;
