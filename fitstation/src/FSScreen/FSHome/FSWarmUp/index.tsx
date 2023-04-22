import React, { useRef, useMemo } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSWorkoutBottomSheet from '../../../FSComponent/FSCustom/FSWorkoutBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import FSSettingsBottomSheet from '../../../FSComponent/FSCustom/FSSettingsBottomSheet';
import { ROUTES } from '../../../FSRouter/routes';
import { RouteProp } from '@react-navigation/native';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSWarmUpScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { warmUpData: any, totalTime: any, screenName: any } }, 'params'>;
}

const FSWarmUpScreen: React.FC<FSWarmUpScreenProps> = ({ navigation, route }) => {
    const { warmUpData, totalTime, screenName } = route.params;
    
    const settingsBottomSheetRef = useRef(null);

    const handleOnLeftClick = () => {
        navigation.goBack()
    };    

    const handleOnRightClick = () => {
        settingsBottomSheetRef.current?.snapTo(1)
    };

    const onClickStartWarmUp = () => {
        navigation.navigate(ROUTES.WorkoutProgress, {
            workoutData: warmUpData,
            totalTime: totalTime,
            screenName: screenName
        })
    };

    const onClickSkipWarmUp = () => {
        Alert.alert('In development')
    };

    const snapPoints = useMemo(() => ['0%', '65%'], []);

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.warmUp.toUpperCase()}
                textStyle={styles.tToolbarTitle}
                skip={FSString.skip.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                onRightClickListener={handleOnRightClick}
                rightIcon={
                    <Image source={AppImages.ic_settings} style={CS.iBack} />
                }
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
            />

            <View style={{ flex: 1 }}>
                <View style={styles.vContainer}>
                    <Text style={[CS.text_black_bold, styles.tMainTitle]}>{FSString.getYourRopeReady}</Text>
                    <Text style={[CS.text_black_bold, styles.tSubtitle]}>{FSString.useLightRope}</Text>
                </View>

                <View>
                    <View style={styles.vImageContainer}>
                        <Image source={AppImages.ic_ropeLB} style={styles.iRopeImage} />
                        <Text style={styles.tLBText}>{FSString.RopeLB.toUpperCase()}</Text>
                        <FSButton
                            name={FSString.startWarmUp.toUpperCase()}
                            handleClick={onClickStartWarmUp}
                            color={CS.text_black_bold}
                            extraStyle={styles.bStartButton}
                        />
                        <FSButton
                            name={FSString.skipWarmUp.toUpperCase()}
                            handleClick={onClickSkipWarmUp}
                            color={CS.text_secondary_bold}
                            extraStyle={styles.bSkipButton}
                        />
                    </View>
                </View>

                <FSWorkoutBottomSheet
                    item={warmUpData}
                />

                <BottomSheet
                    ref={settingsBottomSheetRef}
                    snapPoints={snapPoints}
                >
                    <FSSettingsBottomSheet />
                </BottomSheet>

            </View>
        </SafeAreaView>
    );
};

export default FSWarmUpScreen;
