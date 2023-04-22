import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {ROUTES} from './routes';

//Auth Screen
import FSSplashScreen from '../FSScreen/FSAuth/FSSplash';
import FSSignUpScreen from '../FSScreen/FSAuth/FSSignUp';
import FSSignUpStepOneScreen from '../FSScreen/FSAuth/FSSignUpStep1';
import FSSignUpStepTwoScreen from '../FSScreen/FSAuth/FSSignUpStep2'
import FSSignUpStepThreeScreen from '../FSScreen/FSAuth/FSSignUpStep3';
import FSSignUpUserDetailScreen from '../FSScreen/FSAuth/FSSignUpUserDetailScreen'
import FSLoginScreen from '../FSScreen/FSAuth/FSLogin';
import FSForgotPasswordScreen from '../FSScreen/FSAuth/FSForgotPassword';
import FSResetPasswordScreen from '../FSScreen/FSAuth/FSResetPassword';

//HomeTab Screen
import FSHomeTabbar from './FSHomeTabbar';
import FSWorkOutScreen from '../FSScreen/FSHome/FSWorkOuts';
import FSChallangesScreen from '../FSScreen/FSHome/FSChallanges';
import FSBeginnerScreen from '../FSScreen/FSHome/FSBeginner';
import FSDrawerContent from './FSDrawerContent';

import FSPreviewScreen from '../FSScreen/FSHome/FSPreview';
import FSOverviewScreen from '../FSScreen/FSHome/FSOverview';
import FSDailyChallengesScreen from '../FSScreen/FSHome/FSDailyChallenges';
import FSWorkoutProgressScreen from '../FSScreen/FSHome/FSWorkoutProgress';
import FSFeedbackScreen from '../FSScreen/FSHome/FSFeedback';

//ShopTab Screen
import FSShopTabbar from './FSShopTabbar';
import FSSetsScreen from '../FSScreen/FSShop/FSSets';
import FSRopesHandlesScreen from '../FSScreen/FSShop/FSRopesHandles';
import FSMatsScreen from '../FSScreen/FSShop/FSMats';
import FSApparelScreen from '../FSScreen/FSShop/FSApparel';

import FSProfileScreen from '../FSScreen/FSDrawer/FSProfile';
import FSActivityScreen from '../FSScreen/FSDrawer/FSActivity';
import FSSettingsScreen from '../FSScreen/FSDrawer/FSSettings';
import FSRedeemCodeScreen from '../FSScreen/FSDrawer/FSRedeemCode';

import {useDispatch, useSelector} from 'react-redux';
import {updateLoginStatus} from '../FSRedux/FSActions/signinaction';
import FSMethod from '../FSUtils/FSMethod';
import FSConstant from '../FSUtils/FSConst';
import {store} from '../FSRedux/FSStore';
import FSWarmUpScreen from '../FSScreen/FSHome/FSWarmUp';
import FSTutorialScreen from '../FSScreen/FSHome/FSTutorial';

type RootState = ReturnType<typeof store.getState>;

interface RoutesProps {
  navigation: StackNavigationProp<RootStackParamList>;
  props: StackNavigationProp<RootStackParamList>;
}
export type RootStackParamList = {
  [ROUTES.Splash]: undefined;
  [ROUTES.Signup]: undefined;
  [ROUTES.SignupStep1]: undefined;
  [ROUTES.SignupStep2]: undefined;
  [ROUTES.SignupStep3]: undefined;
  [ROUTES.SignupUserDetailScreen]: undefined;
  [ROUTES.Login]: undefined;
  [ROUTES.ForgotPassword]: undefined;
  [ROUTES.ResetPassword]: {Email: string};

  [ROUTES.Home]: undefined;
  [ROUTES.WorkOuts]: undefined;
  [ROUTES.Challanges]: undefined;
  [ROUTES.Beginner]: undefined;
  [ROUTES.WorkoutProgress]: {workoutData: any; totalTime: any; screenName: any};
  [ROUTES.Feedback]: {screenName: any};

  [ROUTES.Preview]: {previewDetails: any; daysDetails: any; screenName: any};
  [ROUTES.Overview]: {overviewDetails: any};
  [ROUTES.DailyChallenges]: {dailyChallengesDetails: any};
  [ROUTES.WarmUp]: {warmUpData: any; totalTime: any; screenName: any};
  [ROUTES.Tutorial]: {videoUrl: any};

  [ROUTES.Shop]: undefined;
  [ROUTES.Sets]: undefined;
  [ROUTES.RopesHandles]: undefined;
  [ROUTES.Mats]: undefined;
  [ROUTES.Apparel]: undefined;

  [ROUTES.Profile]: undefined;
  [ROUTES.Activity]: undefined;
  [ROUTES.Settings]: undefined;
  [ROUTES.RedeemCode]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const AuthNavigator: React.FC<RoutesProps> = ({navigation}) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={ROUTES.Login}>
      <Stack.Screen name={ROUTES.Signup} component={FSSignUpScreen} />
      <Stack.Screen name={ROUTES.SignupStep1} component={FSSignUpStepOneScreen} />
      <Stack.Screen name={ROUTES.SignupStep2} component={FSSignUpStepTwoScreen} />
      <Stack.Screen name={ROUTES.SignupStep3} component={FSSignUpStepThreeScreen} />
      <Stack.Screen name={ROUTES.SignupUserDetailScreen} component={FSSignUpUserDetailScreen} />
      <Stack.Screen name={ROUTES.Login} component={FSLoginScreen} />
      <Stack.Screen
        name={ROUTES.ForgotPassword}
        component={FSForgotPasswordScreen}
      />
      <Stack.Screen
        name={ROUTES.ResetPassword}
        component={FSResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

const HomeTabNavigator: React.FC<RoutesProps> = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBar={props => {
        return <FSHomeTabbar {...props} navigation={navigation} />;
      }}
      screenOptions={{}}>
      <Tab.Screen name={ROUTES.WorkOuts} component={FSWorkOutScreen} />
      <Tab.Screen name={ROUTES.Challanges} component={FSChallangesScreen} />
      <Tab.Screen name={ROUTES.Beginner} component={FSBeginnerScreen} />
    </Tab.Navigator>
  );
};

const HomeStackNavigator: React.FC<RoutesProps> = ({navigation}) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={ROUTES.Home}>
      <Stack.Screen name={ROUTES.Home} component={HomeTabNavigator} />
      <Stack.Screen name={ROUTES.Preview} component={FSPreviewScreen} />
      <Stack.Screen name={ROUTES.Overview} component={FSOverviewScreen} />
      <Stack.Screen
        name={ROUTES.DailyChallenges}
        component={FSDailyChallengesScreen}
      />
      <Stack.Screen name={ROUTES.WarmUp} component={FSWarmUpScreen} />
      <Stack.Screen
        name={ROUTES.WorkoutProgress}
        component={FSWorkoutProgressScreen}
      />
      <Stack.Screen name={ROUTES.Feedback} component={FSFeedbackScreen} />
      <Stack.Screen name={ROUTES.Tutorial} component={FSTutorialScreen} />
    </Stack.Navigator>
  );
};

const ShopTabNavigator: React.FC<RoutesProps> = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBar={props => {
        return <FSShopTabbar {...props} navigation={navigation} />;
      }}
      screenOptions={{}}>
      <Tab.Screen name={ROUTES.Sets} component={FSSetsScreen} />
      <Tab.Screen name={ROUTES.RopesHandles} component={FSRopesHandlesScreen} />
      <Tab.Screen name={ROUTES.Apparel} component={FSApparelScreen} />
      <Tab.Screen name={ROUTES.Mats} component={FSMatsScreen} />
    </Tab.Navigator>
  );
};

const MainStackNavigator: React.FC<RoutesProps> = ({navigation, props}) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={ROUTES.Home}>
      <Stack.Screen name={ROUTES.Home} component={HomeStackNavigator} />
      <Stack.Screen name={ROUTES.Shop} component={ShopTabNavigator} />
      <Stack.Screen name={ROUTES.Profile} component={FSProfileScreen} />
      <Stack.Screen
        {...props}
        name={ROUTES.Activity}
        component={FSActivityScreen}
      />
      <Stack.Screen name={ROUTES.Settings} component={FSSettingsScreen} />
      <Stack.Screen name={ROUTES.RedeemCode} component={FSRedeemCodeScreen} />
    </Stack.Navigator>
  );
};

const AppContainer: React.FC<RoutesProps> = ({}) => {
  useEffect(() => {
    navigateToScreen();
  }, []);

  const isUserLogin = useSelector(
    (state: RootState) => state.signinReducer.isLogin,
  );
  const dispatch = useDispatch();

  const handleUpdateLoginStatus = (status: boolean) => {
    dispatch(updateLoginStatus(status));
  };

  const navigateToScreen = async () => {
    try {
      var login: any;
      login = await FSMethod.getPref(FSConstant.IsLogin);
      if (login) {
        dispatch(updateLoginStatus(login));
      }
    } catch (error) {}
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={ROUTES.Splash}
        drawerContent={props => (
          <FSDrawerContent
            {...props}
            loginStatus={isUserLogin}
            updateLoginStatus={handleUpdateLoginStatus}
          />
        )}>
        <Drawer.Screen name={ROUTES.Splash} component={FSSplashScreen} />
        <Drawer.Screen name={ROUTES.Home} component={MainStackNavigator} />
        <Drawer.Screen name={ROUTES.Login} component={AuthNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
