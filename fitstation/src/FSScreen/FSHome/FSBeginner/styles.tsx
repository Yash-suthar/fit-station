import { StyleSheet } from 'react-native';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';


const styles = StyleSheet.create({
  svContainer: {
    flexGrow: 1,
  },
  flBeginner: {
    marginTop: Margin.small,
  },
  pImageContainer: {
    marginTop: Margin.default,
    marginHorizontal: Margin.default,
  },
  vTitleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iBackground: {
    borderRadius: Sizes.cornerRadius.large
  },
  tTitle: {
    fontSize: Sizes.text.title,
    textAlign: 'left',
  },
  tSteps: {
    fontSize: Sizes.text.detail,
  },
  iShop: {
    marginTop: Margin.tiny,
    resizeMode:'contain'
  },
  iLeftIcon: {
    marginRight: Margin.small
  },

});

export default styles;
