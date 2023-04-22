import { StyleSheet } from 'react-native';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vInputContainer: {
    marginTop: Margin.default,
  },
  tTitle: {
    textAlign: 'left',
    fontSize: Sizes.text.subtitle,
  },
  vMatrixContainer: {
    marginHorizontal: Margin.defaultLarge,
    marginTop: Margin.small
  },
  vSplitDropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  vButtonConatiner:{
    marginVertical:Margin.large
  }
});

export default styles;