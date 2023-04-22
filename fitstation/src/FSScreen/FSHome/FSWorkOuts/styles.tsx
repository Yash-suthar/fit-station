import { StyleSheet } from 'react-native';
import { Icon, Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';
import FSStyleConfig from '../../../FSUtils/FSStyleConfig';

const styles = StyleSheet.create({
  pFlatlistContainer: {
    paddingTop: Padding.small,
  },
  fContentContainer: {
    paddingBottom: Padding.small
  },
  vHeartIconContainer: {
    flexDirection: 'row',
  },
  iHeartIcon: {
    marginTop: Margin.extraSmall,
    marginRight: FSStyleConfig.smartScale(12),
  },
  iLeftIcon: {
    marginRight: Margin.large
  },
  iShop: {
    marginTop: Margin.tiny,
    resizeMode: 'contain'
  },
  VEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  tEmpty: {
    fontSize: Sizes.text.appBarTitle,
    fontWeight: "bold"
  },
  iEmptyIcon: {
    height: Icon.commonHeight,
    width: Icon.commonWidth
  }
});

export default styles;
