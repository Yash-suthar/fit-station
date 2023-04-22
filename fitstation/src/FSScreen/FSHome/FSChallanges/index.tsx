import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { DrawerActions } from '@react-navigation/native';
import { ROUTES } from '../../../FSRouter/routes';
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler';
import { challengesList } from '../../../FSUtils/FSDummyString';
import FSItemChallengesList from '../../../FSComponent/FSCustom/FSItemChallengesList';
import { FSNever } from '../../../FSUtils/FSConst'

interface FSChallangesScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSChallangesScreen: React.FC<FSChallangesScreenProps> = ({ navigation }) => {
    const [challenges, setChallenges] = useState(challengesList)

    const handleOnLeftClick = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const handleOnRightClick = () => {
        navigation.navigate(ROUTES.Shop)
    };

    const handleOnChallengesItemClick = (item: any, index: number) => {
        navigation.navigate(ROUTES.Overview, {
            overviewDetails: item,
        });
    }

    const handleChallengesRatingItem = (rating: number, index: number) => {
        // var challengesList = [...challenges]
        // var challengesDetail = challengesList[index]
        // challengesDetail.starRating = rating
        // setChallenges(challengesList)
    }

    const renderChallengesTutorialList = (props: any) => {
        return (
            <FSItemChallengesList
                {...props}
                onChallengesItemClick={handleOnChallengesItemClick}
                onRatingClick={handleChallengesRatingItem}
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

            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item, index) => `ChallengesList-${index}`}
                    style={styles.flChallenges}
                    data={challengesList}
                    renderItem={renderChallengesTutorialList}
                    overScrollMode='never'
                    bounces={false}
                    contentContainerStyle={styles.fContentContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default FSChallangesScreen;
