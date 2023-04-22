import React, { useState } from 'react';
import { Text, Keyboard, Image, View, BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
import FSInputConfig from '../../../FSUtils/FSInputConfig';
import { Type_Of_Login } from '../../../FSUtils/FSEnum';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import AppImages from '../../../FSAssets/FSImages';
import SafeAreaView from 'react-native-safe-area-view';
import FSValidation from '../../../FSUtils/FSValidation'
import { showToast } from '../../../FSUtils/FSToast'
import { ROUTES } from '../../../FSRouter/routes';
import { useDispatch } from "react-redux";
import { updateLoader } from '../../../FSRedux/FSActions/commonactions';
import { updateLoginStatus } from '../../../FSRedux/FSActions/signinaction';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../FSRouter';
import CS from '../../../FSUtils/FSStyles';
import authService from '../../../FSFirebase/auth';
import FSMethod from '../../../FSUtils/FSMethod';
import FSConstant, { FSAlways, FSNever } from '../../../FSUtils/FSConst';
import { FSHardwareBackPress } from '../../../FSUtils/FSConst';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import facebookAuth from '../../../FSFirebase/facebookAuth';
import googleAuth from '../../../FSFirebase/googleAuth';

interface FSLoginScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}
const FSLoginScreen: React.FC<FSLoginScreenProps> = ({
    navigation,
}) => {

    googleAuth.configure()
    facebookAuth.facebookSettings()

    const [tiEmail, setTiEmail] = useState<string>('');
    const [tiPassword, setTiPassword] = useState<string>('');

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

    const onFacebookLogIn = () => {
        dispatch(updateLoader(true))
        facebookAuth
            .facebookLogin()
            .then((result) => {
                dispatch(updateLoader(false))
                dispatch(updateLoginStatus(true))
                FSMethod.savePref(FSConstant.IsLogin, true)
                showToast(FSString.loginSuccess)
                navigation.navigate(ROUTES.Home)
                clearValue()
            }).catch((error) => {
                dispatch(updateLoader(false))
                showToast(error)
            })
    }

    const onGoogleLogIn = () => {
        dispatch(updateLoader(true))
        googleAuth
            .googleLogin()
            .then((result) => {
                dispatch(updateLoader(false))
                dispatch(updateLoginStatus(true))
                FSMethod.savePref(FSConstant.IsLogin, true)
                showToast(FSString.loginSuccess)
                navigation.navigate(ROUTES.Home)
                clearValue()
            }).catch((error) => {
                dispatch(updateLoader(false))
                showToast(error.message)
            })
    }

    const onChangeTextHandle = (text: string, index: number) => {
        switch (index) {
            case Type_Of_Login.Email:
                setTiEmail(text);
                break;
            case Type_Of_Login.Password:
                let Txt = text.replace(FSConstant.regex, FSString.noSpace)
                setTiPassword(Txt);
                break;
        }
    };

    const getInputValue = (index: number) => {
        switch (index) {
            case Type_Of_Login.Email:
                return tiEmail;
            case Type_Of_Login.Password:
                return tiPassword;
        }
    };

    const onClickLogin = () => {
        if (FSValidation.isFieldEmpty2(tiEmail)) {
            showToast(FSString.pleaseEnterEmailAddress)
        }
        else if (FSValidation.isEmailInvalid(tiEmail)) {
            showToast(FSString.pleaseEnterValidEmail)
        }
        else if (FSValidation.isFieldEmpty2(tiPassword)) {
            showToast(FSString.pleaseEnterPassword)
        }
        else {
            Keyboard.dismiss()
            handleLogin()
        }
    };

    const handleLogin = () => {
        dispatch(updateLoader(true))
        authService
            .signInWithEmailAndPassword(tiEmail, tiPassword)
            .then((result: any) => {
                dispatch(updateLoader(false))
                dispatch(updateLoginStatus(true))
                FSMethod.savePref(FSConstant.IsLogin, true)
                showToast(FSString.loginSuccess)
                navigation.navigate(ROUTES.Home)
                clearValue()
            })
            .catch((error) => {
                dispatch(updateLoader(false))
                if (error.code == FSConstant.noUser) {
                    showToast(FSString.noUser)
                } else {
                    showToast(FSString.wrongPass)
                }
            })
    }

    const clearValue = () => {
        setTiEmail('')
        setTiPassword('')
    }

    const handleForgotPassword = () => {
        clearValue()
        navigation.navigate(ROUTES.ForgotPassword)
    };

    const handleOnLeftClick = () => {
        clearValue()
        navigation.goBack()
    };

    const handleSignup = () => {
        clearValue()
        navigation.navigate(ROUTES.SignupStep1)
        // navigation.navigate(ROUTES.Signup)
    };

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: 'always', top: FSNever }}>
            <FSCommonToolbar
                isLeftButton
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
                onLeftClickListener={handleOnLeftClick}
                title={FSString.login.toLocaleUpperCase()}
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

                    <View style={styles.vLoginButtonContainer}>
                        <FSButton
                            name={FSString.facebook}
                            color={CS.text_white_bold}
                            handleClick={onFacebookLogIn}
                            icon={AppImages.ic_facebook}
                            extraStyle={styles.tiFacebookLoginButton}
                            iconStyle={styles.tiFacebookIcon}
                        />
                        <FSButton
                            name={FSString.google}
                            color={CS.text_black_bold}
                            handleClick={onGoogleLogIn}
                            icon={AppImages.ic_google}
                            extraStyle={styles.tiGoogleLoginButton}
                        />
                    </View>

                    {FSInputConfig.LoginInput.map((item, index) => {
                        return (
                            <FSTextInput
                                key={`LoginInput-${index}`}
                                placeholder={item.PlaceHolder}
                                inputProps={item}
                                onChangeText={(text: string) => onChangeTextHandle(text, index)}
                                value={getInputValue(index)}
                                keyboardType={item?.KeyboardType}
                                returnKeyType={item?.ReturnKeyType}
                                maxLength={item?.Length}
                                secureTextEntry={item.SecureTextEntry}
                            />
                        )
                    })}
                </View>
                <FSButton
                    name={FSString.login.toUpperCase()}
                    color={CS.text_black_bold}
                    handleClick={onClickLogin}
                />
                <Text style={styles.tInfo} onPress={handleSignup}>
                    <Text style={[CS.text_black_bold, styles.tNoAccount]}>
                        {FSString.noAccount}
                        {FSString.space}
                    </Text>
                    <Text
                        style={[CS.text_secondary_regular, styles.tNoAccount]}>
                        {FSString.space}
                        {FSString.createNow}
                    </Text>
                </Text>
                <Text
                    style={[CS.text_secondary_regular, styles.tForgotPassword]}
                    onPress={handleForgotPassword}>
                    {FSString.forgotPassword}
                </Text>
            </KeyboardAwareScrollView>
        </SafeAreaView>

    );
};

export default FSLoginScreen;
