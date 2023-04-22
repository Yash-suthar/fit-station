import { StyleSheet } from 'react-native';
import { Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
  vSettingsContainer: {
    padding: Padding.default,
  },
  tSettingsTitle: {
    fontSize: Sizes.text.default,
    alignItems: 'center',
    marginBottom: Padding.default
  },
  vMainToggleContainer: {
    flexDirection: "row",
  },
  vToggleContainer: {
    flexDirection: "column",
  },
  vVideoContainer: {
    flexDirection: "column",
    marginLeft: Margin.extralarge
  },
  tTitle: {
    textAlign: 'left'
  },
  vBeepContainer: {
    marginBottom: Margin.default
  },
});

export default styles;
