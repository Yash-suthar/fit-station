import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { BorderWidth, Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vTopContainer: {
    padding: Padding.default,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tPaused: {
    fontSize: Sizes.text.default,
    paddingLeft: Padding.small,
    fontWeight: 'bold'
  },
  tPausedPlay:{
    fontSize: Sizes.text.default,
    fontWeight: 'bold',
    paddingVertical:Padding.small
  },
  vTotalCount: {
    justifyContent: 'center'
  },
  vMainContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  iGifStyle: {
    height: Sizes.imageBackgroundHeight,
    width: Sizes.imageBackgroundHeight,
    marginVertical: Margin.default,
  },
  vButtonContainer: {
    marginTop: Margin.defaultLarge
  },
  bStartButton: {
    justifyContent: 'center',
    borderRadius: Sizes.cornerRadius.default,
    borderWidth: BorderWidth.small,
    borderColor: FSColors.secondary,
    paddingVertical: Padding.defaultSmall,
    width: Sizes.deviceWidth / 3,
  },
  bStopButton: {
    justifyContent: 'center',
    backgroundColor: FSColors.primary,
    borderWidth: BorderWidth.small,
    borderColor: FSColors.secondary,
    borderRadius: Sizes.cornerRadius.default,
    paddingVertical: Padding.defaultSmall,
    width: Sizes.deviceWidth / 3,
  },
  tTextStyle: {
    fontSize: Sizes.text.detail
  },
  aAnimatedText: {
    color: FSColors.secondary,
    fontSize: Sizes.text.title,
  },
  tTitle: {
    fontSize: Sizes.text.title,
    fontWeight: 'bold'
  },
});

export default styles;
