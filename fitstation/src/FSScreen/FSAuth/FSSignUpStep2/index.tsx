import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import {useDispatch} from 'react-redux';
import AppImages from '../../../FSAssets/FSImages';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import {signUpPassword} from '../../../FSRedux/FSActions/signupactions';
import {RootStackParamList} from '../../../FSRouter';
import {ROUTES} from '../../../FSRouter/routes';
import {FSAlways, FSNever} from '../../../FSUtils/FSConst';
import {Type_Of_SignUp_Step2} from '../../../FSUtils/FSEnum';
import FSInputConfig from '../../../FSUtils/FSInputConfig';
import FSString from '../../../FSUtils/FSString';
import CS from '../../../FSUtils/FSStyles';
import {showToast} from '../../../FSUtils/FSToast';
import {passwordValidation} from '../../../FSUtils/FSYupValidation';
import styles from './styles';

interface FSSignUpStepTwoProps {
  navigation: StackNavigationProp<RootStackParamList>;
}
const FSSignUpStepTwoScreen: React.FC<FSSignUpStepTwoProps> = ({
  navigation,
}) => {
  const [tiPassword, setTiPassword] = useState<string>('');
  const [passwordValidationError, setPasswordValidationError] =
    useState<object>({});
  const [validPasswordState, setValidPasswordSate] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  const onChangeTextHandle = (text: string, index: number) => {
    switch (index) {
      case Type_Of_SignUp_Step2.Password:
        setTiPassword(text.replace(/ /g, ''));
        break;
    }
  };
  const getInputValue = (index: number) => {
    switch (index) {
      case Type_Of_SignUp_Step2.Password:
        return tiPassword;
    }
  };

  const onContinue = async () => {
    try {
      const validatePassword = await passwordValidation.validate({tiPassword});
      if (validatePassword) {
        dispatch(signUpPassword(tiPassword));
        showToast(FSString.signUpStepTwo.passwordSuccessMessage);
        setValidPasswordSate(false);
        navigation.navigate(ROUTES.SignupStep3);
      }
    } catch (err: any) {
      setValidPasswordSate(true);
      setPasswordValidationError(err?.message);
    }
  };

  return (
    <SafeAreaView
      style={CS.saContainer}
      forceInset={{bottom: FSAlways, top: FSNever}}>
      <ScrollView contentContainerStyle={styles.scrollViewFlex}>
        <FSCommonToolbar
          isLeftButton
          leftIcon={<Image source={AppImages.ic_back} style={CS.iBack} />}
          onLeftClickListener={handleOnLeftClick}
          title={FSString.createAccount}
        />
        <View style={styles.vContainer}>
          <Text style={styles.tTitle}>
            {FSString.signUpStepTwo.askAboutPassword}
          </Text>

          <KeyboardAwareScrollView
            bounces={false}
            overScrollMode="never"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={CS.kavContainer}>
            <View style={styles.vInputContainer}>
              {FSInputConfig.SignUpInputStep2.map((item, index) => {
                return (
                  <FSTextInput
                    key={`SignupInput-${index}`}
                    placeholder={item.PlaceHolder}
                    inputProps={item}
                    onChangeText={(text: string) =>
                      onChangeTextHandle(text, index)
                    }
                    autoComplete="off"
                    value={getInputValue(index)}
                    secureTextEntry={item?.SecureTextEntry}
                    keyboardType={item?.KeyboardType}
                    returnKeyType={item?.ReturnKeyType}
                    maxLength={item?.Length}
                  />
                );
              })}
              {validPasswordState && (
                <Text
                  style={
                    styles.tErrorTextStyle
                  }>{`${passwordValidationError}`}</Text>
              )}
            </View>
            <FSButton
              name={FSString.continue.toLocaleUpperCase()}
              color={CS.text_black_bold}
              handleClick={onContinue}
            />
          </KeyboardAwareScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FSSignUpStepTwoScreen;
