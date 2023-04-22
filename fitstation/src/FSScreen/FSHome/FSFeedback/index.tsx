import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { ROUTES } from '../../../FSRouter/routes';
import styles from './styles'
import { FSAlways, FSNever } from '../../../FSUtils/FSConst'
import { Rating } from 'react-native-ratings';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import { showToast } from '../../../FSUtils/FSToast';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FSColors from '../../../FSUtils/FSColors';
import { RouteProp } from '@react-navigation/native';

interface FSFeedbackScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { screenName: any } }, 'params'>;
}

const FSFeedbackScreen: React.FC<FSFeedbackScreenProps> = ({ navigation, route }) => {
    const { screenName } = route.params
    const [rating, setRating] = useState(0);
    const [tiComment, setTiComment] = useState('')

    useEffect(() => {
        console.log(rating);
    }, [rating])

    const handleOnLeftClick = () => {
        console.log(FSString.feedback);
    };

    const handleOnRightClick = () => {
        navigation.navigate(ROUTES.Shop)
    };

    const onClickRating = (rating: number) => {
        setRating(rating);
    };

    const onNotNowClick = () => {
        showToast(FSString.waitingYouForFeedback)
        if(screenName === FSString.workout) {
            navigation.navigate(ROUTES.WorkOuts)
        } else {
        navigation.navigate(ROUTES.Challanges)
        }
    }

    const onSubmitReviewClick = () => {
        showToast(FSString.thankYouForFeedback)
        if(screenName === FSString.workout) {
            navigation.navigate(ROUTES.WorkOuts)
        } else {
        navigation.navigate(ROUTES.Challanges)
        }
    }

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: FSAlways, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.feedback.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                onRightClickListener={handleOnRightClick}
                rightIcon={
                    <Text style={CS.text_secondary_regular}>{FSString.shop}</Text>
                }
                leftIcon={
                    <Text style={CS.text_secondary_regular}>{FSString.no}</Text>
                }
            />
            <KeyboardAwareScrollView
                bounces={false}
                overScrollMode="never"
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={CS.kavContainer}>
                <View style={styles.vFeedbackContainer}>
                        <View style={styles.vTitleText}>
                            <Text style={[CS.text_black_bold, styles.tHeaderText]}>{FSString.fitStationReview}</Text>
                        </View>

                        <View style={styles.vUserIcon}>
                            <Image source={AppImages.ic_user} style={CS.iBack} />
                        </View>

                        <Text style={[CS.text_black_bold, styles.tUserName]}>{FSString.fitStationUser}</Text>
                        <Text style={[CS.text_black_semibold]}>{FSString.howWasTheExperirence}</Text>

                        <Text style={[CS.text_black_semibold, styles.tRatingContainer]}>
                            {FSString.rating}: 
                            {FSString.space}{rating}
                            {FSString.totalCount}
                        </Text>

                        <Rating
                            type='custom'
                            jumpValue={0.5}
                            ratingCount={5}
                            startingValue={0}
                            onFinishRating={onClickRating}
                            style={styles.rStartRating}
                            fractions={2}
                            tintColor={FSColors.primary}
                            ratingBackgroundColor={FSColors.borderColor}
                        />

                        <View>
                            <FSTextInput
                                placeholder={FSString.comments}
                                onChangeText={(text: string) => setTiComment(text)}
                                value={tiComment}
                                multiline={true}
                                numberOfLines={4}
                            />
                        </View>

                        <View style={styles.vButtonContainer}>
                            <FSButton
                                name={FSString.notNow.toUpperCase()}
                                handleClick={onNotNowClick}
                                color={CS.text_secondary_bold}
                                extraStyle={styles.bNotNowButton}
                                textStyle={styles.tTextStyle}
                            />
                            <FSButton
                                name={FSString.submitReview.toUpperCase()}
                                handleClick={onSubmitReviewClick}
                                color={CS.text_black_bold}
                                extraStyle={styles.bSubmitButton}
                                textStyle={styles.tTextStyle}
                            />
                        </View>
                    </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default FSFeedbackScreen;
