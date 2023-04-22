import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import styleconfig from '../FSUtils/FSStyleConfig';
import FSLoader from '../FSComponent/FSCustom/FSReduxComponent/FSLoader';
import FSColors from '../FSUtils/FSColors';
import { Padding, Sizes } from '../FSUtils/FSDimensions';

class MainContainer extends React.PureComponent {
  render() {
    return (
      <View
        style={styles.vContainer}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor={FSColors.black}
          translucent={false}
        />
        <FSLoader />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    position: 'absolute',
    right: Padding.none,
    left: Padding.none,
    width: styleconfig.width,
    zIndex: Sizes.zIndex,
  },
})


export default MainContainer;
