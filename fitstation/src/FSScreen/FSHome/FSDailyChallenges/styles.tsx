import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes, Padding } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  floatingButton: {
     borderRadius: Sizes.cornerRadius.extralarge,
  },
  flDailyChallenges: {
    flex: 1,
    backgroundColor: FSColors.primary,
    paddingBottom: Padding.extralarge
  },
});

export default styles;
