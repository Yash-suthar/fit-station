import React from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import FSItemBottomSheet from '../FSItemBottomSheet';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

interface FSWorkoutBottomSheetProps {
    item?: any;
}

const FSWorkoutBottomSheet: React.FC<FSWorkoutBottomSheetProps> = ({ item }) => {

    const renderBottomSheet = (props: any) => {
        return (
            <FSItemBottomSheet
                {...props}
            />
        )
    }

    return (
        <BottomSheet
            snapPoints={['15%', '77%']}
        >
                <FlatList
                    keyExtractor={(item, index) => `BottomSheetList-${index}`}
                    data={item}
                    style={styles.flBottomSheet}
                    renderItem={renderBottomSheet}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                />
        </BottomSheet>
    );
};

export default FSWorkoutBottomSheet;
