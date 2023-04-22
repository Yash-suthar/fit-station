import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import {useDispatch} from 'react-redux';
import {ValidationError} from 'yup';
import AppImages from '../../../FSAssets/FSImages';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import {signUpName} from '../../../FSRedux/FSActions/signupactions';
import {RootStackParamList} from '../../../FSRouter';
import {ROUTES} from '../../../FSRouter/routes';
import {FSAlways, FSNever} from '../../../FSUtils/FSConst';
import {Type_Of_SignUp_User_Detail} from '../../../FSUtils/FSEnum';
import FSInputConfig from '../../../FSUtils/FSInputConfig';
import FSString from '../../../FSUtils/FSString';
import CS from '../../../FSUtils/FSStyles';
import {signUpStepFourValidation} from '../../../FSUtils/FSYupValidation';
import styles from './styles';

interface FSSignUpUserDetailProps {
  navigation: StackNavigationProp<RootStackParamList>;
}
const FSSignUpUserDetailScreen: React.FC<FSSignUpUserDetailProps> = ({
  navigation,
}) => {
  const [tiFirstName, setTiFirstName] = useState<string>('');
  const [tiLastName, setTiLastName] = useState<string>('');
  const [tiUserName, setTiUserName] = useState<string>('');
  const [nameValidationError, setNameValidationError] = useState<
    Array<Array<string>>
  >([[]]);
  const dispatch = useDispatch();
  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  const onChangeTextHandle = (text: string, index: number) => {
    switch (index) {
      case Type_Of_SignUp_User_Detail.FirstName:
        setTiFirstName(text);
        break;
      case Type_Of_SignUp_User_Detail.LastName:
        setTiLastName(text);
        break;
      case Type_Of_SignUp_User_Detail.UserName:
        setTiUserName(text);
        break;
    }
  };
  const getInputValue = (index: number) => {
    switch (index) {
      case Type_Of_SignUp_User_Detail.FirstName:
        return tiFirstName;
      case Type_Of_SignUp_User_Detail.LastName:
        return tiLastName;
      case Type_Of_SignUp_User_Detail.UserName:
        return tiUserName;
    }
  };
  const validateUserName = async () => {
    try {
      const userValidation = await signUpStepFourValidation.validate(
        {
          FirstName: tiFirstName,
          LastName: tiLastName,
          UserName: tiUserName,
        },
        {abortEarly: false},
      );
      return userValidation;
    } catch (err: InstanceType<ValidationError>) {
      const errors: Array<Array<string>> = [[], [], []];

      err.inner.forEach((error: {path: string; message: string}) => {
        const path = error.path;

        if (path === FSString.firstName) {
          errors[0].push(error.message);
        } else if (path === FSString.lastName) {
          errors[1].push(error.message);
        } else if (path === FSString.userName) {
          errors[2].push(error.message);
        }
      });

      setNameValidationError(errors);
    }
  };
  const onContinue = async () => {
    if (await validateUserName()) {
      dispatch(signUpName(await validateUserName()));
      navigation.navigate(ROUTES.Login);
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
          <Text style={[CS.text_black_shop_bold, styles.tAskAboutName]}>
            {FSString.signUpUserDetail.askAboutName}
          </Text>

          <KeyboardAwareScrollView
            bounces={false}
            overScrollMode="never"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={CS.kavContainer}>
            <View style={styles.vInputContainer}>
              {FSInputConfig.SignUpUserDetailInput.map((item, index) => {
                return (
                  <View key={index}>
                    <FSTextInput
                      key={`SignUpInput-${index}`}
                      placeholder={item.PlaceHolder}
                      inputProps={item}
                      onChangeText={(text: string) =>
                        onChangeTextHandle(text, index)
                      }
                      value={getInputValue(index)}
                      keyboardType={item?.KeyboardType}
                      returnKeyType={item?.ReturnKeyType}
                    />
                    {nameValidationError[index]?.length > 0 && (
                      <Text
                        style={[
                          CS.text_black_regular,
                          styles.tErrorTextStyle,
                        ]}>{`${nameValidationError[index][0]}`}</Text>
                    )}
                  </View>
                );
              })}
              <Text style={[CS.text_black_regular, styles.tInfoForUserName]}>
                {FSString.signUpUserDetail.userNameInformation}
              </Text>
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

export default FSSignUpUserDetailScreen;
