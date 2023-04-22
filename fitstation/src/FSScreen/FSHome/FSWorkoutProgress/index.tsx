import React, { useState } from 'react';
import { Text, Image, View, Animated, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { ROUTES } from '../../../FSRouter/routes';
import styles from './styles'
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';
import FSColors from '../../../FSUtils/FSColors';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import { RouteProp } from '@react-navigation/native';

interface FSWorkoutProgressScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { workoutData: any, totalTime: any, screenName: any } }, 'params'>;
}

const FSWorkoutProgressScreen: React.FC<FSWorkoutProgressScreenProps> = ({ navigation, route }) => {
    const { workoutData, totalTime, screenName } = route.params;
    const [workout, setWorkout] = useState(workoutData[0])
    const [isPlaying, setIsPlaying] = useState(true)
    const [duration, setDuration] = useState(workoutData[0].time)
    const [index, setIndex] = useState(0)
    const [key, setKey] = useState(0);
    const [next, setNext] = useState(false);

    const handleOnLeftClick = () => {
        navigation.goBack();
    };

    const handleOnRightClick = () => {
        navigation.navigate(ROUTES.Shop)
    };

    const onTimerButtonClick = () => {
        setIsPlaying(!isPlaying)
    }

    const onComplete = (item: any) => {
        setNext(!next)
        setIndex(index + 1);
        if (index < workoutData.length - 1)
            setWorkout(workoutData[index + 1])
        else navigation.navigate(ROUTES.Feedback, {
            screenName: screenName,
        });
    }

    const onNextClick = () => {
        setNext(!next)
        if (index < workoutData.length) {
            setDuration(workoutData[index].time)
            setKey(prevKey => prevKey + 1)
        }
    }

    const timeFormatter = ({ remainingTime }) => {
        let minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }

        return (
            <Animated.Text style={styles.aAnimatedText}>
                {minutes} : {seconds}
            </Animated.Text>)
    }

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.workoutProgress.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                onRightClickListener={handleOnRightClick}
                rightIcon={
                    <Text style={[CS.text_secondary_regular]}>{FSString.shop}</Text>
                }
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
            />

            <View style={styles.vTopContainer}>
                <View>
                    {!next &&
                        <>
                            {isPlaying ? (
                                <Pressable onPress={onTimerButtonClick}>
                                    <Image source={AppImages.ic_pause} />
                                </Pressable>
                            ) : (
                                <Pressable style={styles.pButtonContainer} onPress={onTimerButtonClick}>
                                    <Image source={AppImages.ic_play} />
                                </Pressable>
                            )}
                        </>
                    }
                </View>
                <View style={styles.vTotalCount}>
                    <Text style={[CS.text_black_bold, styles.tPaused]}>{totalTime}.00</Text>
                </View>
            </View>

            <View style={styles.vMainContainer}>

                <View>
                    <Text style={[CS.text_black_bold, styles.tTitle]}>{workout.title}</Text>
                    <Image style={styles.iGifStyle} source={{ uri: workout.gif }} />
                    {!next &&
                        <Text style={[CS.text_black_bold, styles.tPausedPlay]}>{!isPlaying ? FSString.paused : FSString.playing}</Text>
                    }
                </View>
                <CountdownCircleTimer
                    key={key}
                    isPlaying={isPlaying}
                    duration={duration}
                    rotation='clockwise'
                    colors={FSColors.secondary}
                    onComplete={onComplete}
                    children={timeFormatter}
                />

                <View style={styles.vButtonContainer}>
                    {next ? (
                        <FSButton
                            name={FSString.startNext.toUpperCase()}
                            handleClick={onNextClick}
                            color={CS.text_black_bold}
                            extraStyle={styles.bStartButton}
                            textStyle={styles.tTextStyle}
                        />
                    ) : null}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default FSWorkoutProgressScreen;
