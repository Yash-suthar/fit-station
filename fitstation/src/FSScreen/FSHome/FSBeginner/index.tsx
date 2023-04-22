import React from 'react';
import { View, Text, Image, Pressable, ImageBackground, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { DrawerActions } from '@react-navigation/routers';
import { ROUTES } from '../../../FSRouter/routes';
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler';
import { FSDummystring } from '../../../FSUtils/FSDummyString';
import FSItemBeginnerList from '../../../FSComponent/FSCustom/FSItemBeginnerList';
import { Sizes } from '../../../FSUtils/FSDimensions';
import { FSNever } from '../../../FSUtils/FSConst'

interface FSBeginnerScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSBeginnerScreen: React.FC<FSBeginnerScreenProps> = ({ navigation }) => {

    const handleOnLeftClick = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const handleOnRightClick = () => {
        navigation.navigate(ROUTES.Shop)
    };

    const handleOnBegginerItemClick = (item: any, index: number) => {
        navigation.navigate(ROUTES.Tutorial, { videoUrl: item.videoUrl })
    }

    const renderBeginnerTutorialList = (props: any) => {
        return (
            <FSItemBeginnerList
                {...props}
                onBeginnerItemClick={handleOnBegginerItemClick}
            />
        )
    }

    return (
        <SafeAreaView
            style={CS.saWhiteContainer}
            forceInset={{ bottom: FSNever, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.headerTitle.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                rightIcon={
                    <Image source={AppImages.ic_shop} style={[CS.iBack, styles.iShop]} />
                }
                leftIcon={
                    <Image source={AppImages.ic_menu} style={styles.iLeftIcon} />
                }
                onRightClickListener={handleOnRightClick}
            />
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                contentContainerStyle={styles.svContainer}>
                <View style={[styles.pImageContainer, CS.shadowEffect]}>
                    <Pressable>
                        <ImageBackground
                            source={AppImages.ic_boxerStep}
                            style={{
                                height: Sizes.imageBackgroundHeight,
                            }}
                            imageStyle={styles.iBackground}
                            resizeMode="cover"
                        >
                            <View
                                style={styles.vTitleContainer}>
                                <Text style={[CS.text_white_bold, styles.tTitle]}>
                                    {FSString.jumpRopeBeginnerChallange}
                                </Text>
                                <Text style={[CS.text_white_bold, styles.tSteps]}>
                                    {
                                        FSDummystring.ratingList.map((prop, index) => {
                                            return (
                                                <View key={index}>
                                                    <Image source={prop.image} style={CS.iIcon}></Image>
                                                </View>
                                            );
                                        })}
                                    <Text style={[CS.text_white_bold, styles.tSteps]}>{FSString.space}|{FSString.space}</Text>
                                    <Image source={AppImages.ic_user} style={CS.iIcon}></Image>
                                    {FSString.space}{FSString.space}{FSString.stepsCount}
                                </Text>
                            </View>
                        </ImageBackground>
                    </Pressable>
                </View>

                <View>
                    <FlatList
                        keyExtractor={(item, index) => `beginnerList-${index}`}
                        style={styles.flBeginner}
                        data={FSDummystring.begginerTutorialList}
                        renderItem={renderBeginnerTutorialList}
                        overScrollMode='never'
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>

        </SafeAreaView>

    );
};

export default FSBeginnerScreen;
