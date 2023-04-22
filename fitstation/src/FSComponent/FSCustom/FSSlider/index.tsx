import React from 'react';
import { Slider } from "@miblanchard/react-native-slider";
import FSColors from '../../../FSUtils/FSColors';

interface FSSliderProps {
    sliderValue: number;
    onChangeSliderValue: (value:any) => void;
}

const FSSlider: React.FC<FSSliderProps> = ({
    sliderValue,
    onChangeSliderValue
}) => {

    return (
        <Slider
            maximumValue={100}
            minimumValue={0}
            minimumTrackTintColor={FSColors.secondary}
            maximumTrackTintColor={FSColors.borderColor}
            step={1}
            value={sliderValue}
            onValueChange={onChangeSliderValue}
            thumbTintColor={FSColors.secondary}
        />
    );
};

export default FSSlider;

