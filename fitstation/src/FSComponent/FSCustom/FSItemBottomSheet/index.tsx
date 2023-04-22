import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';

interface FSItemBottomSheetProps {
    item: any;
    index: number;
}
const FSItemBottomSheet: React.FC<FSItemBottomSheetProps> = ({
    item,
    index,
}) => {

    return (
        <View style={styles.pCardContainer}>
            <View>
                <Text style={[CS.text_black_bold, styles.tTitle]}>{item.title}</Text>
                <Text>{item.subtitle}</Text>
            </View>
            <View style={styles.vIconContainer}>
                <Image style={[styles.iIcon, {backgroundColor: item.background}]} source={item.icon} />
                <Text>00.{item.time}</Text>
            </View>
        </View>
    );
};

export default FSItemBottomSheet;
