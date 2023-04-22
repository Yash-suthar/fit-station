import React, { useState } from 'react';
import { Text, Image, View, BackHandler, Linking, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import AppImages from '../../../FSAssets/FSImages';
import SafeAreaView from 'react-native-safe-area-view';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../FSRouter';
import CS from '../../../FSUtils/FSStyles';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';
import { FSHardwareBackPress } from '../../../FSUtils/FSConst';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';

interface FSRedeemCodeScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}
const FSRedeemCodeScreen: React.FC<FSRedeemCodeScreenProps> = ({
    navigation,
}) => {

    const [tiCode, setTiCode] = useState<string>('');

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

    const onClickRedeem = () => {
        Alert.alert('In development')
    };

    const clearValue = () => {
        setTiCode('')
    }

    const onClickContact = () => {
        Linking.openURL(FSString.contactTeamUrl);
    };

    const handleOnLeftClick = () => {
        clearValue()
        navigation.goBack()
    };

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                isLeftButton
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
                onLeftClickListener={handleOnLeftClick}
                title={FSString.redeemCode.toLocaleUpperCase()}
                isRightButton
            />
            <KeyboardAwareScrollView
                bounces={false}
                overScrollMode={FSNever}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={CS.kavContainer}>
                <View style={styles.vRedeemContainer}>
                    <Text style={[CS.text_black_bold, styles.tRedeemText]}>
                        {FSString.redeemCodeHeading}
                    </Text>
                    <View style={styles.vInputContainer}>
                        <View style={styles.vActivationText}>
                            <Text style={[CS.text_secondary_semibold, styles.tRedeemText]}>
                                {FSString.activationCode.toUpperCase()}
                            </Text>
                        </View>
                        <FSTextInput
                            placeholder={FSString.code}
                            onChangeText={(text: string) => setTiCode(text)}
                            value={tiCode}
                        />
                    </View>
                    <FSButton
                        name={FSString.redeem.toUpperCase()}
                        handleClick={onClickRedeem}
                    />
                    <Text style={styles.tInfo}>
                        <Text style={[CS.text_black_bold, styles.tRedeemText]}>
                            {FSString.needHelp}
                            {FSString.space}
                        </Text>
                        <Text
                            style={[CS.text_secondary_bold, styles.tRedeemText]}
                            onPress={onClickContact}>
                            {FSString.space}
                            {FSString.contactSupportTeam}
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default FSRedeemCodeScreen;
