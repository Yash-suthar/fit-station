import { StyleSheet } from 'react-native';
import { Sizes, Margin } from '../../../FSUtils/FSDimensions';


const styles = StyleSheet.create({
  vContainer: {
    flexDirection: 'row',
  },
  vCardContainer: {
    marginBottom: Margin.small,
    marginHorizontal: Margin.small,
    borderRadius: Sizes.cornerRadius.default,
  },
  cContainer: {
    borderRadius: Sizes.cornerRadius.default,
  }
});

export default styles;
