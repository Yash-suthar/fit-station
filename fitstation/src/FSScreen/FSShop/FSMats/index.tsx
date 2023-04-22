import React from 'react';
import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { ROUTES } from '../../../FSRouter/routes';
import styles from './styles';
import { FSNever } from '../../../FSUtils/FSConst';

interface FSMatsScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSMatsScreen: React.FC<FSMatsScreenProps> = ({ navigation }) => {

    const handleOnLeftClick = () => {
        navigation.navigate(ROUTES.Home)
    };

    const onClickShopAll = () => {
        Linking.openURL(FSString.shopAll)
    };

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSNever, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.shop.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                rightIcon={
                    <Text style={[CS.text_secondary_regular]}>{FSString.shop}</Text>
                }
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
            />
            <ScrollView>
                <View style={styles.vShopAllContainer}>
                    <Pressable onPress={onClickShopAll}>
                        <Text style={[CS.text_black_bold,styles.tShopAll]}>{FSString.shopAllProducts}</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default FSMatsScreen;
