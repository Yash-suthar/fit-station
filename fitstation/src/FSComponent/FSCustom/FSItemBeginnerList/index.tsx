import React from 'react';
import { Text, Pressable, View, ImageBackground } from 'react-native';
import { Sizes } from '../../../FSUtils/FSDimensions';
import CS from '../../../FSUtils/FSStyles';
import styles from './styles';

interface FSItemBeginnerListProps {
    item: any;
    index: number;
    onBeginnerItemClick: (item: any, index: number) => void;
}

const FSItemBeginnerList: React.FC<FSItemBeginnerListProps> = ({
    item,
    index,
    onBeginnerItemClick,
}) => {
    const handleOnBeginnerItemClick = () => {
        onBeginnerItemClick(item, index);
    };
    return (
        <View style={[styles.vCardContainer, CS.shadowEffect]}>
            <Pressable onPress={handleOnBeginnerItemClick}>
                <ImageBackground
                    source={item?.bgImage}
                    style={{
                        height: Sizes.imageBackgroundHeight,
                    }}
                    imageStyle={styles.iBackground}
                    resizeMode="cover"
                >
                    <View
                        style={styles.vTitleContainer}>
                        <Text style={[CS.text_white_bold, styles.tTitle]}>
                            {item?.title}
                        </Text>
                    </View>
                </ImageBackground>
            </Pressable>
        </View>
    );
};

export default FSItemBeginnerList;

