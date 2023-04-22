import {Platform, StyleSheet} from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import {Icon, Margin, Sizes} from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  saContainer: {
    flexDirection: 'row',
    backgroundColor: FSColors.secondary,
  },
  vExtraContainer: {
    height: Sizes.extraContainer,
  },
  vToolbarContainer: {
    height: Sizes.toolBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  pRightIconContainer: {
    flex: 1.5,
    marginHorizontal: Margin.small,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pLeftIconContainer: {
    flex: 1.5,
    marginHorizontal: Margin.small,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  iBack: {
    width: Icon.width,
    height: Icon.height,
    resizeMode: 'contain',
  },
  tTitle: {
    flex: 6,
    fontSize: Sizes.text.subtitle,
    fontWeight: Platform.OS === 'android' ? 'bold' : '600',
  },
});

export default styles;
