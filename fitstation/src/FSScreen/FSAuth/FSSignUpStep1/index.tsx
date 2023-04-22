import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import AppImages from '../../../FSAssets/FSImages';
import {RootStackParamList} from '../../../FSRouter';
import FSString from '../../../FSUtils/FSString';
import CS from '../../../FSUtils/FSStyles';
import FSInputConfig from '../../../FSUtils/FSInputConfig';
import {Type_Of_SignUp_Step1} from '../../../FSUtils/FSEnum';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ROUTES} from '../../../FSRouter/routes';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import {emailValidation} from '../../../FSUtils/FSYupValidation';
import {FSAlways, FSNever} from '../../../FSUtils/FSConst';
import SafeAreaView from 'react-native-safe-area-view';
import {showToast} from '../../../FSUtils/FSToast';
import {useDispatch} from 'react-redux';
import {signUpEmail} from '../../../FSRedux/FSActions/signupactions';

interface FSSignUpStepOneProps {
  navigation: StackNavigationProp<RootStackParamList>;
}
const FSSignUpStepOneScreen: React.FC<FSSignUpStepOneProps> = ({
  navigation,
}) => {
  const [tiEmail, setTiEmail] = useState<string>('');
  const [emailValidationError, setEmailValidationError] = useState<object>({});
  const [validEmailState, setValidEmailState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  const onChangeTextHandle = (text: string, index: number) => {
    switch (index) {
      case Type_Of_SignUp_Step1.Email:
        setTiEmail(text);
        break;
    }
  };
  const getInputValue = (index: number) => {
    switch (index) {
      case Type_Of_SignUp_Step1.Email:
        return tiEmail;
    }
  };
  const onContinue = async () => {
    try {
      const validateEmail = await emailValidation.validate({tiEmail});
      if (validateEmail) {
        dispatch(signUpEmail(tiEmail));
        showToast(FSString.signUpStepOne.emailSuccessMessage);
        setValidEmailState(false);
        navigation.navigate(ROUTES.SignupStep2);
      }
    } catch (err: any) {
      setValidEmailState(true);
      setEmailValidationError(err?.message);
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
            {FSString.signUpStepOne.askAboutEmail}
          </Text>

          <KeyboardAwareScrollView
            bounces={false}
            overScrollMode="never"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={CS.kavContainer}>
            <View style={styles.vInputContainer}>
              {FSInputConfig.SignUpInputStep1.map((item, index) => {
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
                    keyboardType={item?.KeyboardType}
                    returnKeyType={item?.ReturnKeyType}
                  />
                );
              })}
              {validEmailState && (
                <Text
                  style={
                    styles.tErrorTextStyle
                  }>{`${emailValidationError}`}</Text>
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

export default FSSignUpStepOneScreen;
