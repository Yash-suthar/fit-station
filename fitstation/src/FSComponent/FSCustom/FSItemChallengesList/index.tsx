import React from 'react';
import { Text, Pressable, View, ImageBackground, Image } from 'react-native';
import { Sizes } from '../../../FSUtils/FSDimensions';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { AirbnbRating } from 'react-native-ratings';

interface FSItemChallengesListProps {
    item: any;
    index: number;
    onChallengesItemClick: (item: any, index: number) => void;
    onRatingClick?: any;
}

const FSItemChallengesList: React.FC<FSItemChallengesListProps> = ({
    item,
    index,
    onChallengesItemClick,
    onRatingClick,
}) => {
    const handleOnChallengesItemClick = () => {
        onChallengesItemClick(item, index);
    };

    const onClickRating = (rating: number) => {
        onRatingClick(rating, index);
    };

    return (
        <View style={[styles.vCardContainer, CS.shadowEffect]}>
            <Pressable onPress={handleOnChallengesItemClick}>
                <ImageBackground
                    source={{ uri: item.image }}
                    style={{
                        height: Sizes.imageHeightChallenges,
                    }}
                    imageStyle={styles.iBackground}
                    resizeMode="cover"
                >
                    <View
                        style={styles.vTitleContainer}>
                        <Text style={[CS.text_white_bold, styles.tTitle]}>
                            {item.title}
                        </Text>

                        <Text style={[CS.text_white_bold, styles.tSteps]}>
                            <AirbnbRating
                                showRating={false}
                                size={10}
                                defaultRating={item.starRating}
                                onFinishRating={onClickRating}
                                starContainerStyle={styles.aStarContainer}
                                isDisabled
                            />
                            <Text style={[CS.text_white_bold, styles.tSteps]}>{FSString.space}|{FSString.space}</Text>
                            <Image source={AppImages.ic_user} style={CS.iIcon}></Image>
                            {FSString.space}{FSString.space}{item.count}
                        </Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

export default FSItemChallengesList;

