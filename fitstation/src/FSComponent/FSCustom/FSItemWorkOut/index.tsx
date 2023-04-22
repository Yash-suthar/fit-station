import React from 'react';
import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';
import { WorkOut } from '../../../FSRedux/types';
import { AirbnbRating } from 'react-native-ratings';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';

interface FSItemWorkOutProps {
    item: WorkOut;
    index: number;
    onRatingClick: any;
    handleCardClick: any;
    onFavouriteClick: any;
}
const FSItemWorkOut: React.FC<FSItemWorkOutProps> = ({
    item,
    index,
    onRatingClick,
    handleCardClick,
    onFavouriteClick,
}) => {
    
    const onClickRating = (rating: number) => {
        onRatingClick(rating, index);
    };

    const handleItemCardClick = () => {
        handleCardClick(item, index);
    }

    const onClickFavorite = () => {        
        onFavouriteClick(item, index);
    }

    return (
        <View style={[styles.vCardContainer, CS.shadowEffect]}>
            <Pressable onPress={handleItemCardClick}>
                <ImageBackground
                    resizeMode="cover"
                    source={{ uri: item.image }}
                    style={styles.iImageContainer}
                    imageStyle={styles.iImageStyleContainer}
                >
                    <Pressable onPress={onClickFavorite} style={styles.pHeartContainer}>
                        {!item.favourite ?
                            <Image source={AppImages.ic_heart_outlined} style={CS.iBackWhite} />
                            :
                            <Image source={AppImages.ic_heart_filled} style={CS.iHeart} />
                        }
                    </Pressable>
                    <View style={styles.vCardDetailsContainer}>
                        <View style={styles.vCardDetailsRightFlex}>
                            <Text style={[CS.text_white_bold, styles.tCardData]}>{item.date}</Text>
                            <Text style={[CS.text_white_bold, styles.tCardName]}>{item.title}</Text>
                            <Text style={[CS.text_white_bold, styles.tCardData]}>
                                {item.time} {FSString.minutes} | {item.category} | {item.equipments}
                            </Text>
                        </View>
                        <View style={styles.vCardDetailsLeftFlex}>
                            <View style={styles.vCircleContainer}>
                                {item.circleColor.map((item, index) => {
                                    return (
                                        <View key={index} style={[styles.vCircles, { backgroundColor: item }]} />
                                    )
                                })}
                            </View>
                            <View style={styles.vCircleContainer}>
                                <Image source={AppImages.ic_user} style={styles.iCardData} />
                                <Text style={[CS.text_white_regular, styles.tCardData]}>
                                    {item.count}{FSString.space}
                                </Text>
                            </View>
                            <Text style={[CS.text_white_bold, styles.tCardData]}>
                                {FSString.space}
                                <AirbnbRating
                                    isDisabled
                                    showRating={false}
                                    size={10}
                                    defaultRating={item.starRating}
                                    onFinishRating={onClickRating}
                                    starContainerStyle={styles.aStarContainer}
                                />
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

export default FSItemWorkOut;
