import React from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import AppImages from '../../../FSAssets/FSImages';
import SafeAreaView from 'react-native-safe-area-view';
import { showToast } from '../../../FSUtils/FSToast'
import { ROUTES } from '../../../FSRouter/routes';
import { useDispatch } from "react-redux";
import { updateLoader } from '../../../FSRedux/FSActions/commonactions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../FSRouter';
import CS from '../../../FSUtils/FSStyles';
import authService from '../../../FSFirebase/auth';
import { RouteProp } from '@react-navigation/native';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSResetPasswordScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { Email: string } }, 'params'>;
}
const FSResetPasswordScreen: React.FC<FSResetPasswordScreenProps> = ({
    navigation,
    route
}) => {
    const { Email } = route.params
    const dispatch = useDispatch();

    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    const onClickLogin = () => {
        navigation.navigate(ROUTES.Login)
    };

    const handleResendLink = () => {
        dispatch(updateLoader(true))
        authService.sendResetPasswordLink(Email).then((res) => {
            dispatch(updateLoader(false))
            showToast(FSString.resendLinkStatus)

        }).catch((e) => {
            dispatch(updateLoader(false))
            showToast(e.message)
        })
    }

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
                title={FSString.checkYourEmail.toLocaleUpperCase()}
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
                    {FSString.sentEmailInstruction}
                </Text>
            </KeyboardAwareScrollView>
            <View style={styles.vResendLinkContainer}>
                <FSButton
                    name={FSString.backToLogin.toUpperCase()}
                    handleClick={onClickLogin}
                />
                <Text
                    onPress={handleResendLink}
                    style={[CS.text_secondary_semibold, styles.tResendLink]}>
                    {FSString.resendEmail}
                </Text>
            </View>
        </SafeAreaView>

    );
};

export default FSResetPasswordScreen;
