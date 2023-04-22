import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';

interface FSActivityCardProps {
    item?: any;
    index?: number;
}
const FSActivityCard: React.FC<FSActivityCardProps> = ({ item, index }) => {

    return (
        <View style={styles.vActivityContainer}>
            <View style={styles.vActivityCard}>
                <Image style={styles.iActivity} source={{ uri: item.icon }} />
                <Text style={[CS.text_black_medium, styles.tActivityValue]}>{item.value}</Text>
            </View>
            <View style={styles.vActivityCard}>
                <Text style={[CS.text_black_bold, styles.tActivityName]}>{item.name}</Text>
            </View>
        </View>
    );
};

export default FSActivityCard;
