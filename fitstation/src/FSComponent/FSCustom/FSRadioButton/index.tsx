import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';
import FSColors from '../../../FSUtils/FSColors';

interface FSRadioButtonProps {
    item: any;
}

const FSRadioButton: React.FC<FSRadioButtonProps> = ({ item }) => {
    const [value, setValue] = useState(item[0].key);

    return (
        <View style={styles.vContainer}>
            {item.map((item: any, index: number) =>
                <Pressable key={item.key} style={styles.vButtonContainer} onPress={() => setValue(item.key)}>
                    <View style={[styles.pCircle, value === item.key && { backgroundColor: FSColors.secondary, borderColor: FSColors.secondary }]} />
                    <Text style={CS.text_black_bold}>{item.value}</Text>
                </Pressable>
            )}
        </View>

    );
};

export default FSRadioButton;

