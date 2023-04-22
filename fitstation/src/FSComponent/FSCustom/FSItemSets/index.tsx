import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';
import FSButton from '../FSButton';
import FSString from '../../../FSUtils/FSString';
import { Sets } from '../../../FSRedux/types';

interface FSItemSetsProps {
    item: Sets;
    index: number;
    onItemClick: any;
}
const FSItemSets: React.FC<FSItemSetsProps> = ({
    item,
    index,
    onItemClick,
}) => {

    const onClickCard = () => {
        onItemClick(item.link, index);
    };

    return (
        <View style={[styles.pCardContainer, CS.shadowEffect]}>
            <Text style={[CS.text_black_bold, styles.tCard]}>{item.name}</Text>
            <Text style={[CS.text_black_regular, styles.tPrice]}>{item.price}</Text>
            <Text style={[styles.tDetails]}>{item.detail}</Text>
            <Image style={styles.cardImage} source={{ uri: item.url }} />
            <FSButton
                name={FSString.shopNow.toUpperCase()}
                handleClick={onClickCard}
                color={CS.text_black_bold}
                extraStyle={styles.cardButton}
            />
        </View>

    );
};

export default FSItemSets;
