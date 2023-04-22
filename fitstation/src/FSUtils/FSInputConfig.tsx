import {FSKeyboardType, FSRerurnKeyType, FSAutoCapitalize} from './FSConst';
import {MaxLength} from './FSDimensions';
import FSString from './FSString';

const FSInputConfig = {
  //Signup Input
  SignUpInput: [
    {
      PlaceHolder: FSString.name,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.words,
      Length: MaxLength.name,
    },
    {
      PlaceHolder: FSString.email,
      KeyboardType: FSKeyboardType.emailAddress,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.phoneNumber,
      KeyboardType: FSKeyboardType.phonePad,
      ReturnKeyType: FSRerurnKeyType.next,
      Length: MaxLength.phoneNumber,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.password,
      SecureTextEntry: true,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
      Length: MaxLength.password,
    },
    {
      PlaceHolder: FSString.confirmPassword,
      SecureTextEntry: true,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.none,
      Length: MaxLength.password,
    },
  ],

  //SignUp Input Step1(Email Verification)
  SignUpInputStep1: [
    {
      PlaceHolder: FSString.signUpStepOne.email,
      KeyboardType: FSKeyboardType.emailAddress,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.none,
    },
  ],

  //SignUp Input Step2(Password Verification)
  SignUpInputStep2: [
    {
      PlaceHolder: FSString.signUpStepTwo.password,
      SecureTextEntry: true,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.none,
      Length: MaxLength.password,
    },
  ],

  //SignUp Input Step4(UserName)
  SignUpUserDetailInput: [
    {
      PlaceHolder: FSString.firstName,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.words,
      Length: MaxLength.name,
    },
    {
      PlaceHolder: FSString.lastName,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.words,
      Length: MaxLength.name,
    },
    {
      PlaceHolder: FSString.userName,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.words,
      Length: MaxLength.name,
    },
  ],

  //Login input
  LoginInput: [
    {
      PlaceHolder: FSString.email,
      KeyboardType: FSKeyboardType.emailAddress,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.password,
      SecureTextEntry: true,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.none,
      Length: MaxLength.password,
    },
  ],

  ProfileMetricsOnInput: [
    {
      PlaceHolder: FSString.name,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.age,
      KeyboardType: FSKeyboardType.phonePad,
      Length: MaxLength.age,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.weight,
      KeyboardType: FSKeyboardType.phonePad,
      Length: MaxLength.age,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
  ],

  heightInput: {
    PlaceHolder: FSString.height,
    KeyboardType: FSKeyboardType.phonePad,
    ReturnKeyType: FSRerurnKeyType.done,
    AutoCapitalize: FSAutoCapitalize.none,
  },

  ProfileMetricsOffInput: [
    {
      PlaceHolder: FSString.name,
      KeyboardType: FSKeyboardType.default,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.age,
      KeyboardType: FSKeyboardType.phonePad,
      Length: MaxLength.age,
      ReturnKeyType: FSRerurnKeyType.next,
      AutoCapitalize: FSAutoCapitalize.none,
    },
    {
      PlaceHolder: FSString.weight,
      KeyboardType: FSKeyboardType.phonePad,
      Length: MaxLength.age,
      ReturnKeyType: FSRerurnKeyType.done,
      AutoCapitalize: FSAutoCapitalize.none,
    },
  ],
};
export default FSInputConfig;
