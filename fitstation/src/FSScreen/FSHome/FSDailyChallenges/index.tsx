import React, { useState } from 'react';
import { View, Image, FlatList, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import FSItemDailyChallenges from '../../../FSComponent/FSCustom/FSItemDailyChallenges';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import { RouteProp } from '@react-navigation/native';
import { ROUTES } from '../../../FSRouter/routes';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSDailyChallengesScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { dailyChallengesDetails: any } }, 'params'>;
}

const FSDailyChallengesScreen: React.FC<FSDailyChallengesScreenProps> = ({ navigation, route }) => {
    const { dailyChallengesDetails } = route.params
    const [selected, setSelected] = useState(0)

    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    const handleOnRightClick = () => {
        Alert.alert(
            FSString.noSpace,
            FSString.restartChallenge,
            [
                {
                    text: FSString.no,
                    onPress: () => console.log(FSString.no),
                },
                {
                    text: FSString.yes, onPress: () => {
                        handleDailyChallenge(0)
                    }
                }
            ]
        );
    }

    const onClickContinue = () => {
        var dailyChallengesList = [...dailyChallengesDetails.dailyChallenges]
        var dailyChallengesDaysDetail = dailyChallengesList[selected]
        navigation.navigate(ROUTES.Preview, {
            previewDetails: dailyChallengesDetails,
            daysDetails: dailyChallengesDaysDetail,
            screenName: FSString.challanges
        });
    };

    const handleDailyChallenge = (id: any) => {
        setSelected(id)
    };

    const handleDailyChallengeClick = (item: any) => {
        setSelected(item.id)
    }

    const renderDailyChallenges = (props: any) => {
        return (
            <FSItemDailyChallenges
                {...props}
                selected={selected}
                onDailyChallengesItemClick={handleDailyChallengeClick}
            />
        )
    }

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.dailyChallenges.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                onRightClickListener={handleOnRightClick}
                rightIcon={
                    <Image source={AppImages.ic_restart} style={CS.iBack} />
                }
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
            />

            <FlatList
                keyExtractor={(item, index) => `DailyChallengesList-${index}`}
                style={styles.flDailyChallenges}
                data={dailyChallengesDetails.dailyChallenges}
                renderItem={renderDailyChallenges}
                overScrollMode='never'
                bounces={false}
                showsVerticalScrollIndicator={false}
            />

            <View>
                <FSButton
                    name={FSString.continue.toUpperCase()}
                    handleClick={onClickContinue}
                    color={CS.text_black_bold}
                    extraStyle={styles.floatingButton}
                />
            </View>
        </SafeAreaView>
    );
};

export default FSDailyChallengesScreen;
