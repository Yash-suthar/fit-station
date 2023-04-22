import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';
import { RootStackParamList } from '../../../FSRouter';
import FSString from '../../../FSUtils/FSString';
import { ROUTES } from '../../../FSRouter/routes';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSSplashScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const FSSplashScreen: React.FC<FSSplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToScreen()
    }, 2500)
  }, [])

  const navigateToScreen = async () => {
    // try {
    //   const isLogin = await FSMethod.getPref(FSConstant.IsLogin)
    //   if (isLogin) {
    //     navigation.navigate(ROUTES.Home)
    //   }
    // }
    // catch (error) {
    //   navigation.navigate(ROUTES.Login);
    // }
    navigation.navigate(ROUTES.Home)
  }

  return (
    <View style={styles.vContainer}>
      <Text style={[CS.text_secondary_regular, styles.tSplash]}>
        {FSString.splashScreen}
      </Text>
    </View>

  );
};

export default FSSplashScreen;
