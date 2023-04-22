import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import styles from './styles';

interface FSButtonProps {
    name?: string;
    extraStyle?: any;
    color?: any;
    textStyle?: any;
    icon?: any;
    iconStyle?: any;
    handleClick?: (link?: any) => void;
}

const FSButton: React.FC<FSButtonProps> = ({ name, extraStyle, color, textStyle, icon, iconStyle, handleClick }) => {
    return (
        <Pressable
            style={[styles.pButtonContainer,extraStyle && extraStyle]}
            onPress={handleClick}>
                <Image style={[styles.iIcon, iconStyle]} source={icon}/>
            <Text
                style={[
                    color,
                    styles.tButton,
                    textStyle
                ]}>
                {name}
            </Text>
        </Pressable>

    );
};

export default FSButton;
