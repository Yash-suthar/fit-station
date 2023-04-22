import React, { useState } from 'react';
import { View, Text, Keyboard, Image, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
import FSInputConfig from '../../../FSUtils/FSInputConfig';
import { Type_Of_SignUp } from '../../../FSUtils/FSEnum';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import AppImages from '../../../FSAssets/FSImages';
import SafeAreaView from 'react-native-safe-area-view';
import FSValidation from '../../../FSUtils/FSValidation'
import { showToast } from '../../../FSUtils/FSToast'
import { ROUTES } from '../../../FSRouter/routes';
import { useDispatch } from "react-redux";
import { updateLoader } from '../../../FSRedux/FSActions/commonactions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../FSRouter';
import CS from '../../../FSUtils/FSStyles';
import authService from '../../../FSFirebase/auth';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import FSConstant from '../../../FSUtils/FSConst';
import { FSHardwareBackPress } from '../../../FSUtils/FSConst';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSSignUpScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const FSSignUpScreen: React.FC<FSSignUpScreenProps> = ({
  navigation
}) => {

  const [tiName, setTiName] = useState<string>('');
  const [tiEmail, setTiEmail] = useState<string>('');
  const [tiPhNo, setTiPhNo] = useState<string>('');
  const [tiPassword, setTiPassword] = useState<string>('');
  const [tiCpassword, setTiCpassword] = useState<string>('');
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        handleOnLeftClick()
        return true;
      };
      BackHandler.addEventListener(
        FSHardwareBackPress, onBackPress
      );
      return () =>
        BackHandler.removeEventListener(
          FSHardwareBackPress, onBackPress
        );
    }, [])
  );

  const onChangeTextHandle = (text: any, index: any) => {
    switch (index) {
      case Type_Of_SignUp.Name:
        setTiName(text);
        break;
      case Type_Of_SignUp.Email:
        setTiEmail(text);
        break;
      case Type_Of_SignUp.PhoneNumber:
        setTiPhNo(text);
        break;
      case Type_Of_SignUp.Password:
        let Txt = text.replace(FSConstant.regex, FSString.noSpace)
        setTiPassword(Txt);
        break;
      case Type_Of_SignUp.ConfirmPassword:
        let TxtC = text.replace(FSConstant.regex, FSString.noSpace)
        setTiCpassword(TxtC);
        break;
    }
  };

  const getInputValue = (index: any) => {
    switch (index) {
      case Type_Of_SignUp.Name:
        return tiName;
      case Type_Of_SignUp.Email:
        return tiEmail;
      case Type_Of_SignUp.PhoneNumber:
        return tiPhNo;
      case Type_Of_SignUp.Password:
        return tiPassword;
      case Type_Of_SignUp.ConfirmPassword:
        return tiCpassword;
    }
  };


  const onCreateAccount = () => {
    if (FSValidation.isFieldEmpty2(tiName)) {
      showToast(FSString.pleaseEnterName)
    }
    else if (FSValidation.isNameInvalid(tiName)) {
      showToast(FSString.yourName + FSString.space + FSString.pleaseEnterValidName)
    }
    else if (FSValidation.isFieldEmpty2(tiEmail)) {
      showToast(FSString.pleaseEnterEmailAddress)
    }
    else if (FSValidation.isEmailInvalid(tiEmail)) {
      showToast(FSString.pleaseEnterValidEmail)
    }
    else if (FSValidation.isFieldEmpty2(tiPhNo)) {
      showToast(FSString.pleaseEnterPhoneNumber)
    }
    else if (FSValidation.isNumber(tiPhNo)) {
      showToast(FSString.pleaseEnterDigitOnly)
    }
    else if (tiPhNo.length < 10) {
      showToast(FSString.pleaseEnterTenDigit)
    }
    else if (FSValidation.isNumberInvalid(tiPhNo)) {
      showToast(FSString.pleaseEnterValidPhoneNumber)
    }
    else if (FSValidation.isFieldEmpty2(tiPassword)) {
      showToast(FSString.pleaseEnterPassword)
    }
    else if (FSValidation.isPasswordInvalid(tiPassword)) {
      showToast(FSString.pleaseEnterValidPassword)
    }
    else if (FSValidation.isFieldEmpty2(tiCpassword)) {
      showToast(FSString.pleaseEnterConfirmationPassword)
    }
    else if (tiPassword != tiCpassword) {
      showToast(FSString.passwordNotMatch)
    }

    else {
      Keyboard.dismiss()
      handleSignup()
    }
  };

  const handleSignup = () => {
    dispatch(updateLoader(true))
    authService
      .createUserWithEmailAndPassword(tiEmail, tiPassword)
      .then((result: any) => {
        var uID = result.user.uid;
        var userDetail = {
          Name: tiName,
          Email: tiEmail,
          Mobile: tiPhNo,
          UId: uID,
        };
        authService.addDataInUser(uID, userDetail).then((res) => {
          dispatch(updateLoader(false))
          showToast(FSString.signupSuccess)
          navigation.navigate(ROUTES.Login)
          clearValue()
        }).catch((error) => {
          dispatch(updateLoader(false))
          showToast(error.message)
        })
      })
      .catch((error) => {
        dispatch(updateLoader(false))
        showToast(error.message)
      })
  }

  const clearValue = () => {
    setTiName('')
    setTiEmail('')
    setTiPhNo('')
    setTiPassword('')
    setTiCpassword('')
  }
  const handleOnLeftClick = () => {
    clearValue()
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={CS.saContainer}
      forceInset={{ bottom: 'always', top: 'never' }}>
      <FSCommonToolbar
        isLeftButton
        leftIcon={
          <Image source={AppImages.ic_back} style={CS.iBack} />
        }
        onLeftClickListener={handleOnLeftClick}
        title={FSString.createAnAccount.toLocaleUpperCase()}
        isRightButton
        rightIcon={
          <Text style={[CS.text_secondary_regular]}>{FSString.shop}</Text>
        }
      />
      <KeyboardAwareScrollView
        bounces={false}
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={CS.kavContainer}>
        <View style={styles.vInputContainer}>
          {FSInputConfig.SignUpInput.map((item, index) => {
            return (
              <FSTextInput
                key={`SignupInput-${index}`}
                placeholder={item.PlaceHolder}
                inputProps={item}
                onChangeText={(text: string) => onChangeTextHandle(text, index)}
                value={getInputValue(index)}
                maxLength={item?.Length}
                secureTextEntry={item.SecureTextEntry}
                keyboardType={item?.KeyboardType}
                returnKeyType={item?.ReturnKeyType}
              />
            )
          })}
        </View>
        <FSButton
          name={FSString.createAccount}
          color={CS.text_black_bold}
          handleClick={onCreateAccount}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>

  );
};

export default FSSignUpScreen;
