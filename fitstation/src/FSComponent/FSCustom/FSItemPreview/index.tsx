import React from 'react';
import { Text, View } from 'react-native';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';
import FSString from '../../../FSUtils/FSString';
import FSItemPreviewList from '../FSItemPreviewList';
import { FlatList } from 'react-native-gesture-handler'

interface FSItemPreviewProps {
    previewItem?: any;
    index?: number;
}

const FSItemPreview: React.FC<FSItemPreviewProps> = ({previewItem, index,}) => {

    const renderPreviewList = (props: FSItemPreviewProps) => {
        return (
            <FSItemPreviewList
                {...props}
            />
        )
    }

    return (
        <View style={styles.vContainer}>
            <Text style={[CS.text_black_bold, styles.tCardName]}>{FSString.jumpRopesNeeded}</Text>
            <View style={styles.vCircleContainer}>
                {previewItem.circleColor.map((item: any, index: any) => {
                    return (
                        <View key={index} style={styles.vCircleInnerContainer}>
                            <View style={[styles.vCircles, { backgroundColor: item }]} />
                            <Text style={[CS.text_black_bold, styles.tCardData]}>{previewItem.ropeLB[index]}</Text>
                        </View>
                    )
                })}
            </View>
            <FlatList
                keyExtractor={(item, index) => `previewList-${index}`}
                style={styles.flPreviewList}
                data={previewItem.previewData}
                renderItem={renderPreviewList}
                overScrollMode='never'
                bounces={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default FSItemPreview;

