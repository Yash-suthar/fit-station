import React from 'react'
import { Provider } from 'react-redux';
import { store } from './src/FSRedux/FSStore'
import { View, StyleSheet } from 'react-native'
import AppNavigator from './src/FSRouter'
import MainContainer from './src/FSContainers'
import FSColors from './src/FSUtils/FSColors';

const App = (props: any) => {
  return (
    <Provider store={store}>
      <View style={styles.vContainer}>
        <View style={styles.vContainer}>
          <AppNavigator {...props} />
        </View>
        <MainContainer />
      </View>
    </Provider>
  )
};



const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: FSColors.primary
  },
})
export default App;
