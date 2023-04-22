import { StyleSheet } from 'react-native';
import styleconfig from '../../../FSUtils/FSStyleConfig';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vRedeemContainer: {
    marginTop: Margin.default,
  },
  vInputContainer: {
    marginTop: Margin.default,
  },
  tInfo: {
    alignSelf: 'center',
    marginVertical: Margin.small,
  },
  tRedeemText: {
    fontSize: Sizes.text.subtitle,
    marginHorizontal:Margin.small
  },
  vActivationText: {
    alignItems: 'flex-start',
    marginLeft: Margin.default,
    marginTop: Margin.default,
  },
  pButtonContainer: {
    marginHorizontal: Margin.default,
    marginVertical: Margin.small,
    paddingVertical: Padding.default,
    borderRadius: styleconfig.countPixelRatio(10),
    backgroundColor: FSColors.secondary
  },
});

export default styles;
