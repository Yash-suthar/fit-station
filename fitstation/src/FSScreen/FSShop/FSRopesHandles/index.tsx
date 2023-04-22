import React from 'react';
import { ScrollView, View, FlatList, Text, Image, Pressable, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSItemSets from '../../../FSComponent/FSCustom/FSItemSets';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import { ROUTES } from '../../../FSRouter/routes';
import { FSDummyRopesHandlesData } from '../../../FSUtils/FSDummyString';
import { Sets } from '../../../FSRedux/types';
import { FSNever } from '../../../FSUtils/FSConst';

interface FSRopesHandlesScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSRopesHandlesScreen: React.FC<FSRopesHandlesScreenProps> = ({ navigation }) => {
    interface FSItemRopesHandlesProps {
        item: Sets;
        index: number;
    };

    const handleOnLeftClick = () => {
        navigation.navigate(ROUTES.Home)
    };

    const onClickShopAll = () => {
        Linking.openURL(FSString.shopAll)
    };

    const handleSetsCardItem = (link: string, index: number) => {
        Linking.openURL(link)
    };

    const renderRopesHanldesItem = (props: FSItemRopesHandlesProps) => {
        return (
            <FSItemSets {...props}
                onItemClick={handleSetsCardItem}
            />
        );
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
                <FlatList
                    style={styles.pFlatlistContainer}
                    numColumns={1}
                    data={FSDummyRopesHandlesData}
                    keyExtractor={(item, index) => `ropesHandles-${index}`}
                    renderItem={renderRopesHanldesItem}
                    overScrollMode='never'
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.vShopAllContainer}>
                    <Pressable onPress={onClickShopAll}>
                        <Text style={[CS.text_black_bold, styles.tShopAll]}>{FSString.shopAllProducts}</Text>
                    </Pressable>
                </View>
            </ScrollView>

        </SafeAreaView>

    );
};

export default FSRopesHandlesScreen;
