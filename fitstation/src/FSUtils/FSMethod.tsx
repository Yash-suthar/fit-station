import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import {ROUTES} from '../FSRouter/routes';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { LoginManager } from 'react-native-fbsdk-next';
// import authService from '../FSFirebase/auth';

const FSMethod = {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },
  saveStringPref: (key: string, value: string) => {
    AsyncStorage.setItem(key, value, err => {});
  },

  removePref: (key: string) => {
    AsyncStorage.removeItem(key);
  },

  startWithReset: (navigation: { dispatch: (arg0: CommonActions.Action) => void; }, screenName: any) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: screenName}],
      }),
    );
  },

  logOut: async (navigation: { dispatch: (arg0: CommonActions.Action) => void; navigate: (arg0: any) => void; }) => {
    await AsyncStorage.clear();    
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: ROUTES.Home}],
      }),
    );
    navigation.navigate(ROUTES.Home);
    // GoogleSignin.revokeAccess();
    // GoogleSignin.signOut();
    // LoginManager.logOut();
    // authService.signOut();    
  },

  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },

  getStringPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(result);
        } else {
          resolve(null);
        }
      });
    });
  },

  removeNonNumber: (string = '') => string.replace(/[^\d]/g, ''),
};

export default FSMethod;
