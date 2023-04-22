import React from 'react';
import { Text, Pressable } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';


interface FSItemDropDownProps {
    item: any;
    index: number;
    onItemClick: (item: any, index: number) => void;
}

const FSItemDropDown: React.FC<FSItemDropDownProps> = ({
    item,
    index,
    onItemClick,
}) => {
    const handleOnItemClick = () => {
        onItemClick(item, index);
    };
    return (
        <Pressable onPress={handleOnItemClick} style={styles.pContainer}>
            <Text
                style={[CS.text_primary_bold]}>
                {item.value}
            </Text>
        </Pressable>

    );
};

export default FSItemDropDown;
