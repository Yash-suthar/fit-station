import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import styleconfig from '../../../FSUtils/FSStyleConfig';
import FSColors from '../../../FSUtils/FSColors';

const FSLoader = (props: any) => {
  if (!props.loader) return null;
  return (
    <View style={styles.vContainer}>
      <StatusBar backgroundColor={FSColors.black} />
      <ActivityIndicator color={FSColors.secondary} size="large" />
    </View>
  );

}

const mapStateToProps = (state: any) => ({
  loader: state.commonReducer.isLoading,
});

export default connect(mapStateToProps)(FSLoader);

const styles = StyleSheet.create({
  vContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: FSColors.background_color,
    height: styleconfig.height,
    justifyContent: 'center',
    flex: 1,
  },
});
