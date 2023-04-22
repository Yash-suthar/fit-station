import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes, Margin } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vOverviewContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
  },

  bFloatingButton: {
     borderRadius: Sizes.cornerRadius.extralarge,
  },
  tTextStyle: {
    fontSize: Sizes.text.detail
  },
  iBackground: {
    height: Sizes.imageBackgroundHeight * 1.5,
    backgroundColor: FSColors.black,
    opacity: 0.7,
  },
  vOverviewContent: {
    marginTop: Margin.large,
  },
  tTitle: {
    fontSize: Sizes.text.default,
    marginBottom: Margin.default,
  },
  tData: {
    fontSize: Sizes.text.detail,
    marginBottom: Margin.default,
    marginHorizontal: Margin.default
  },
});

export default styles;
