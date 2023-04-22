import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import { RouteProp } from '@react-navigation/native';
import FSColors from '../../../FSUtils/FSColors';
import { ROUTES } from '../../../FSRouter/routes';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSOverviewScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { overviewDetails: any } }, 'params'>;
}

const FSOverviewScreen: React.FC<FSOverviewScreenProps> = ({ navigation, route }) => {
    const { overviewDetails } = route.params

    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    const onTakeChallengeClick = () => {
        navigation.navigate(ROUTES.DailyChallenges, {
            dailyChallengesDetails: overviewDetails
        })
    };

    return (
        <SafeAreaView
            style={[CS.saContainer]}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                textStyle={{ color: FSColors.black }}
                title={FSString.overview.toUpperCase()}
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

            <Image
                source={{ uri: overviewDetails.image }}
                style={styles.iBackground}
                resizeMode="cover"
            />

            <View style={styles.vOverviewContent}>
                <Text style={[CS.text_black_bold, styles.tTitle]}>
                    {overviewDetails.title}
                </Text>
                <Text style={[CS.text_black_regular, styles.tData]}>
                    {overviewDetails.overview}
                </Text>
                <Text style={[CS.text_black_regular, styles.tData]}>
                    {overviewDetails.premiumText}
                </Text>
            </View>

            <View style={styles.vOverviewContainer}>
                    <FSButton
                        name={FSString.takeTheChallenge.toUpperCase()}
                        handleClick={onTakeChallengeClick}
                        color={CS.text_black_bold}
                        extraStyle={styles.bFloatingButton}
                        textStyle={styles.tTextStyle}
                    />
            </View>
        </SafeAreaView>
    );
};

export default FSOverviewScreen;
