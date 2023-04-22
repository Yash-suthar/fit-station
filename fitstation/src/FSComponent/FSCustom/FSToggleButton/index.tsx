import React from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './styles';
import CS from '../../../FSUtils/FSStyles';
import FSString from '../../../FSUtils/FSString';
import FSColors from '../../../FSUtils/FSColors';

interface FSToggleButtonProps {
    title: string;
    toggleStatus?: boolean;
    onChangeToggleStatus: (title: string) => void;
}

const FSToggleButton: React.FC<FSToggleButtonProps> = ({ title, toggleStatus, onChangeToggleStatus }) => {
    return (
        <View style={styles.vContainer}>
            <Text
                style={[
                    CS.text_black_semibold,
                    styles.tStatus,
                ]}>
                {toggleStatus ? FSString.on : FSString.off}
            </Text>
            <Switch
                trackColor={{ false: FSColors.borderColor, true: FSColors.secondary }}
                thumbColor={FSColors.thumbOff}
                ios_backgroundColor={FSColors.iosToggleBg}
                onValueChange={() => onChangeToggleStatus(title)}
                value={toggleStatus}
                style={styles.sContainer}
            />
        </View>
    );
};

export default FSToggleButton;

