import {StyleSheet} from 'react-native';
import {Margin, Padding} from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  pContainer: {
    marginHorizontal: Margin.default,
  },
  vContainerFlex: {flex: 1},
  vIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    bottom: 5,
  },
  iIcon: {
    marginRight: Padding.default,
  },
  pTextInput: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default styles;
