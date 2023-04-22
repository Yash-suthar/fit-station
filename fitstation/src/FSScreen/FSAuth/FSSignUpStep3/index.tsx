import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import AppImages from '../../../FSAssets/FSImages';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import {RootStackParamList} from '../../../FSRouter';
import {ROUTES} from '../../../FSRouter/routes';
import FSString from '../../../FSUtils/FSString';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';
import {birthDateValidation} from '../../../FSUtils/FSYupValidation';
import {FSAlways, FSNever} from '../../../FSUtils/FSConst';
import {showToast} from '../../../FSUtils/FSToast';
import FSBirthDatePicker from '../../../FSComponent/FSCustom/FSBirthDatePicker';
import FSCheckboxButton from '../../../FSComponent/FSCustom/FSCheckboxButton';
import FSDateTimePicker from '../../../FSComponent/FSCustom/FSDateTimePicker';
import {useDispatch} from 'react-redux';
import {SignUpBirthDate} from '../../../FSRedux/FSActions/signupactions';

interface FSSignUpStepThreeProps {
  navigation: StackNavigationProp<RootStackParamList>;
}
const FSSignUpStepThreeScreen: React.FC<FSSignUpStepThreeProps> = ({
  navigation,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>(
    FSString.signUpStepThree.placeholderString,
  );
  const [isSelectedDate, setIsSelectedDate] = useState<Date>();
  const [birthDateError, setBirthDateError] = useState<boolean>(false);
  const [isCheckboxSelected, setIsCheckboxSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const dateString = new Date(date).toISOString().split('T');
    const fullDate = dateString[0].split('-');
    const formatedDate = `${fullDate[2]}/${fullDate[1]}/${fullDate[0]}`;
    hideDatePicker();
    setSelectedDate(formatedDate);
    setIsSelectedDate(date);
  };

  const onContinue = async () => {
    try {
      await birthDateValidation.validate({
        BirthDate: isSelectedDate,
      });
      setBirthDateError(false);
      if (isCheckboxSelected) {
        dispatch(SignUpBirthDate(selectedDate));
        showToast(FSString.signUpStepThree.dobSuccessMessage);
        setIsCheckboxSelected(false);
        navigation.navigate(ROUTES.SignupUserDetailScreen);
      } else {
        Alert.alert(FSString.signUpStepThree.buttonCheckRequired);
      }
    } catch (err: any) {
      setBirthDateError(true);
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
          <Text style={styles.tAskAboutBirthDate}>
            {FSString.signUpStepThree.askAboutBirthDate}
          </Text>

          <KeyboardAwareScrollView
            bounces={false}
            overScrollMode="never"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={CS.kavContainer}>
            <View style={styles.vInputContainer}>
              <FSBirthDatePicker
                placeholder={FSString.signUpStepThree.placeholderString}
                value={selectedDate}
                handleClick={showDatePicker}
                icon={AppImages.ic_calendar}
              />
              <FSDateTimePicker
                isVisible={isDatePickerVisible}
                date={isSelectedDate}
                maximumDate={new Date()}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              {birthDateError && (
                <Text style={styles.tErrorTextStyle}>
                  {FSString.signUpStepThree.birthDateRequired}
                </Text>
              )}
              <View style={styles.checkBox}>
                <FSCheckboxButton
                  selected={isCheckboxSelected}
                  handleClick={() => {
                    setIsCheckboxSelected(!isCheckboxSelected);
                  }}
                />
                <Text>
                  {FSString.signUpStepThree.agreeTermsAndServices} {'\n'}
                  <Text style={styles.tTermsOfServices}>
                    {FSString.signUpStepThree.termsOfSerivesAndPrivacy}
                  </Text>
                </Text>
              </View>
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

export default FSSignUpStepThreeScreen;
