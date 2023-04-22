import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';
import FSColors from '../../../FSUtils/FSColors';

interface FSDurationButtonProps {
    item: any;
    onButtonPressHandle: (index: number) => void;
    index: number;
    isSelected: any;
}
const FSDurationButton: React.FC<FSDurationButtonProps> = ({ item, onButtonPressHandle, index, isSelected }) => {
    const handleDurationItemClick = () => {
        onButtonPressHandle(index);
    }
    return (
        <Pressable style={styles.pDurationContainer} onPress={handleDurationItemClick}>
            <Text style={[CS.text_black_bold, styles.tDuration, { color: isSelected ? FSColors.secondary : FSColors.black }]}>{item}</Text>
        </Pressable>
    );
};

export default FSDurationButton;
