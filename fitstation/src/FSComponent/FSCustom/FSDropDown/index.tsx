import React, { useState } from 'react';
import { View } from 'react-native';
import DropDown from "react-native-paper-dropdown";
import FSColors from '../../../FSUtils/FSColors';
import styles from './styles';
import { Sizes } from '../../../FSUtils/FSDimensions';

interface FSDropDownProps {
    selectedItem: string;
    listOfItem: any
    onSelectingItem: (text: string) => void;
    label?: string;
    multiSelect?: any;
}

const FSDropDown: React.FC<FSDropDownProps> = ({
    selectedItem,
    listOfItem,
    onSelectingItem,
    label,
    multiSelect,
}) => {
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <View style={styles.vContainer}>
            <DropDown
                dropDownStyle={styles.dDropdownStyle}
                label={label}
                mode="outlined"
                visible={showDropDown}
                outlineColor={FSColors.secondary}
                selectionColor={FSColors.secondary}
                theme={{ roundness: Sizes.cornerRadius.large, colors: { primary: FSColors.secondary, background: FSColors.primary, placeholder: FSColors.secondary, text:FSColors.black } }}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={selectedItem}
                setValue={onSelectingItem}
                list={listOfItem}
                dropDownItemTextStyle={styles.tiDropdownText}
                multiSelect={multiSelect}
            />
        </View>
    );
};

export default FSDropDown;