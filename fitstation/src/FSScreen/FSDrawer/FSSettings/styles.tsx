import { StyleSheet } from 'react-native';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';


const styles = StyleSheet.create({
  vContainer: {
    marginHorizontal: Margin.large,
    marginTop: -Margin.large
  },
  tSettings: {
    alignSelf: 'center',
    fontSize: Sizes.text.appBarTitle,
  },
  vMainToggleContainer: {
    flexDirection: "row",
    marginTop: Margin.default
  },
  vWorkOutContainer: {
    flexDirection: "column",
  },
  vVideoContainer: {
    flexDirection: "column",
    marginLeft: Margin.extralarge
  },
  tTitle: {
    textAlign: 'left'
  },
  vRatingContainer: {
    marginTop: Margin.small
  },
  tRopes: {
    textAlign: 'left',
    marginTop: Margin.small
  },
  tVoice: {
    textAlign: 'left',
  },
  tBeep: {
    textAlign: 'left',
  },
  vTopMargin: {
    marginTop: Margin.default
  },
  vBottomMargin: {
    marginBottom: Margin.default
  },
});

export default styles;
