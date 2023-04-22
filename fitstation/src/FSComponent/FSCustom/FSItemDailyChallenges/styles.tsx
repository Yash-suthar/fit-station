import { StyleSheet } from 'react-native';
import { Margin, Sizes, Padding } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vListContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Padding.small,
  },
  tCount: {
    fontSize: Sizes.text.detail,
  },
  tData: {
    fontSize: Sizes.text.detail,
    textAlign: 'left',
  },
  vListData: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iIconStyle: {
    margin: Margin.default,
  },
  iReloadIcon: {
    flex: 1,
    marginRight: Margin.small,
    alignItems: 'flex-end',
  },
});

export default styles;
