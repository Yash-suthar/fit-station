import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import FSItemPreview from '../../../FSComponent/FSCustom/FSItemPreview';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import { RouteProp } from '@react-navigation/native';
import { ROUTES } from '../../../FSRouter/routes';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSPreviewScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { previewDetails: any,daysDetails:any, screenName: any } }, 'params'>;
}

const FSPreviewScreen: React.FC<FSPreviewScreenProps> = ({ navigation, route }) => {
    const { previewDetails, daysDetails, screenName } = route.params

    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    const onClickStartChallenge = () => {
        navigation.navigate(ROUTES.WarmUp, {
            warmUpData: previewDetails.warmUpData,
            totalTime: daysDetails.minutes,
            screenName: screenName,
        })
    };

    const onClickContinue = () => {
        navigation.navigate(ROUTES.WarmUp, {
            warmUpData: previewDetails.warmUpData,
            totalTime: previewDetails.time,
            screenName: screenName,
        })
    }    

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.preview.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                rightIcon={
                    <Text style={[CS.text_secondary_regular]}>{FSString.preview}</Text>
                }
                leftIcon={
                    <Image source={AppImages.ic_back} style={[CS.iBack,styles.iLeftIcon]} />
                }
            />
            <ScrollView>
                <View style={[styles.vCardContainer, CS.shadowEffect]}>
                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: previewDetails.image }}
                        style={styles.iImageContainer}
                        imageStyle={styles.iImageStyleContainer}
                    >
                        <View style={!daysDetails ? styles.vCardDetailsRightFlex : styles.vCardDetailsCenter}>
                            {!daysDetails ? <Text style={[CS.text_white_regular, styles.tCardData]}>{previewDetails.date}</Text> : null}
                            <Text style={[CS.text_white_bold, styles.tCardName]}>{previewDetails.title}</Text>
                            {!daysDetails ?
                                <Text style={[CS.text_white_regular, styles.tCardData]}>
                                    {previewDetails.time} {FSString.minutes} | {previewDetails.category} | {previewDetails.tag}
                                </Text> :
                                <Text style={[CS.text_white_regular, styles.tCardData]}>
                                    {daysDetails.dayCount} | {daysDetails.minutes} {FSString.minutes}
                                </Text>
                            }
                        </View>
                    </ImageBackground>
                </View>

                <FSItemPreview
                    previewItem={previewDetails}
                />
            </ScrollView>

            <View>
                {!daysDetails ?
                    <FSButton
                        name={FSString.continue.toUpperCase()}
                        handleClick={onClickContinue}
                        color={CS.text_black_bold}
                        extraStyle={styles.bFloatingButton}
                        textStyle={styles.tTextStyle}
                    /> :
                    <FSButton
                        name={FSString.startTodaysChallenge.toUpperCase()}
                        handleClick={onClickStartChallenge}
                        color={CS.text_black_bold}
                        extraStyle={styles.bFloatingButton}
                        textStyle={styles.tTodayChallange}
                    />
                }
            </View>
        </SafeAreaView>
    );
};

export default FSPreviewScreen;
