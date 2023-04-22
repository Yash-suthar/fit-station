import React from 'react';
import { Text, View, Image } from 'react-native';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';

interface FSItemPreviewListProps {
    item?: any;
    index?: number;
}

const FSItemPreviewList: React.FC<FSItemPreviewListProps> = ({
    item,
    index,
}) => {

    return (
        <View>
            <View style={styles.vBlockContainer}>
                <View style={[styles.vCircles, { backgroundColor: item.color }]} />
                <Text style={[CS.text_black_bold, styles.tCardTitle]}>{item.block_name}</Text>
            </View>
            {item.data.map((item: any, index: number) =>
                <View key={index} style={styles.vBlockListContainer}>
                    <Image style={styles.iPreviewGif} source={{ uri: item.url }} />
                    <View style={styles.vBlockListData}>
                        <Text style={[CS.text_black_semibold, styles.tCardData]}>{item.workout_time}</Text>
                        <Text style={[CS.text_black_semibold, styles.tCardDataRest]}>{item.rest_time}</Text>
                    </View>
                </View>
            )}
        </View>
    );
};

export default FSItemPreviewList;

