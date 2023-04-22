import { StyleSheet } from 'react-native';
import { Margin, Sizes, Padding, BorderWidth } from '../../../FSUtils/FSDimensions';
import FSColors from '../../../FSUtils/FSColors';

const styles = StyleSheet.create({
  vBlockContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Padding.small,
  },
  tCardTitle: {
    fontSize: Sizes.text.default,
  },
  tCardData: {
    fontSize: Sizes.text.subtitle,
  },
  tCardDataRest: {
    fontSize: Sizes.text.detail,
  },
  vCircles: {
    height: Sizes.circleSize,
    width: Sizes.circleSize,
    borderRadius: Sizes.cornerRadius.large,
    borderColor: FSColors.white,
    borderWidth: BorderWidth.extraSmall,
    marginRight: Margin.small,
  },
  vBlockListContainer: {
    flexDirection: 'row',
    marginVertical: -Margin.extraSmall,
  },
  vBlockListData: {
    padding: Padding.default,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iPreviewGif: {
    height: Sizes.gifHeight,
    width: Sizes.gifWidth,
    marginVertical: Margin.small,
  },
});

export default styles;
