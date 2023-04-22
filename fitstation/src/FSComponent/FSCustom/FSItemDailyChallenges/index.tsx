import React from 'react';
import { Text, Pressable, View, Image } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';
import AppImages from '../../../FSAssets/FSImages';
import FSString from '../../../FSUtils/FSString';

interface FSItemDailyChallengesProps {
    item: any;
    index: number;
    selected?: any,
    onDailyChallengesItemClick: (item: any, index: number) => void;
}

const FSItemDailyChallenges: React.FC<FSItemDailyChallengesProps> = ({
    item,
    index,
    selected,
    onDailyChallengesItemClick,
}) => {

    const handleDailyChallengesItemClick = () => {
        onDailyChallengesItemClick(item, index);
    };

    return (
        <Pressable onPress={handleDailyChallengesItemClick}>
            <View key={index} style={[styles.vListContainer, { backgroundColor: item.id === selected.toString() ? FSColors.black : FSColors.primary }]}>
                <Image style={[styles.iIconStyle, item.id === selected.toString() ? CS.iBackWhite : CS.iBack ]} source={AppImages.ic_rope} />
                <View style={styles.vListData}>
                    <Text style={[item.id === selected.toString() ? CS.text_white_regular : CS.text_black_regular, styles.tCount]}>{item.dayCount}</Text>
                    <Text style={[item.id === selected.toString() ? CS.text_white_regular : CS.text_black_regular, styles.tData]}>{item.name}</Text>
                    <Text style={[item.id === selected.toString() ? CS.text_white_regular : CS.text_black_regular, styles.tData]}>{item.minutes} {FSString.minutes}</Text>
                </View>
                <View style={styles.iReloadIcon}>
                    <Image style={item.id === selected.toString() ? CS.iBackWhite : CS.iBack} source={AppImages.ic_circle} />
                </View>
            </View>
        </Pressable>
    );
};

export default FSItemDailyChallenges;

