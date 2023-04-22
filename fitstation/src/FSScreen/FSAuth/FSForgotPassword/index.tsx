import React, { useState } from 'react';
import { View, Text, Keyboard, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
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
import { FSKeyboardType, FSRerurnKeyType } from '../../../FSUtils/FSConst';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSForgotPasswordScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}
const FSForgotPasswordScreen: React.FC<FSForgotPasswordScreenProps> = ({
    navigation,
}) => {

    const [tiEmail, setTiEmail] = useState<string>('');
    const dispatch = useDispatch();

    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    const onChangeTextHandle = (text: any) => {
        setTiEmail(text);
    };

    const onClickSendEmail = () => {
        if (FSValidation.isFieldEmpty2(tiEmail)) {
            showToast(FSString.pleaseEnterEmailAddress)
        }
        else if (FSValidation.isEmailInvalid(tiEmail)) {
            showToast(FSString.pleaseEnterValidEmail)
        }
        else {
            Keyboard.dismiss()
            verifyEmail()
        }
    };

    const verifyEmail = async () => {
        try {
            dispatch(updateLoader(true))
            const allUserData: any = await authService.fetchAllUserData()
            const filterUserBasedOnEmail = allUserData.docs.filter((item: { data: () => { (): any; new(): any; Email: string; }; }) => item.data().Email === tiEmail)
            if (filterUserBasedOnEmail?.length > 0) sendEmail()
            else {
                showToast(FSString.emailNotExist)
                dispatch(updateLoader(false))
            }
        } catch (e) {
            dispatch(updateLoader(false))
            showToast(e)
        }
    }

    const sendEmail = () => {
        authService.sendResetPasswordLink(tiEmail).then((res: any) => {
            dispatch(updateLoader(false))
            navigation.navigate(ROUTES.ResetPassword, { Email: tiEmail })
            clearValue()
        }).catch((e: { message: string; }) => {
            dispatch(updateLoader(false))
            showToast(e.message)
        })
    };

    const clearValue = () => {
        setTiEmail('')
    }

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
                title={FSString.forgotPasswordTitle.toLocaleUpperCase()}
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

                <Text style={[CS.text_black_bold, styles.tDetail]}>
                    {FSString.forgotPasswordDetail}
                </Text>

                <View style={styles.vInputContainer}>
                    <FSTextInput
                        placeholder={FSString.email}
                        onChangeText={(text: any) => onChangeTextHandle(text)}
                        value={tiEmail}
                        keyboardType={FSKeyboardType.emailAddress}
                        returnKeyType={FSRerurnKeyType.done}
                    />
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.vButtonContainer}>
                <FSButton
                    name={FSString.sendEmail.toUpperCase()}
                    handleClick={onClickSendEmail}
                />
            </View>
        </SafeAreaView>

    );
};

export default FSForgotPasswordScreen;
