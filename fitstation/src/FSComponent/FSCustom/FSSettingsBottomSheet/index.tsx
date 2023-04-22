import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableWithoutFeedback } from '@gorhom/bottom-sheet';
import FSSlider from '../../../FSComponent/FSCustom/FSSlider';
import FSRadioButton from '../../../FSComponent/FSCustom/FSRadioButton';
import FSToggleButton from '../../../FSComponent/FSCustom/FSToggleButton';
import { Type_Of_Gender, Type_Of_ToggleButton } from '../../../FSUtils/FSEnum';
import FSString from '../../../FSUtils/FSString';
import CS from '../../../FSUtils/FSStyles';
import { ScrollView } from 'react-native-gesture-handler';

interface FSSettingsBottomSheetProps {
    item?: any;
}

const FSSettingsBottomSheet: React.FC<FSSettingsBottomSheetProps> = ({ item }) => {
    const [isSkill, setIsSkill] = useState(false);
    const [isSound, setSound] = useState(false);
    const [isWarmUp, setIsWarmUp] = useState(false);
    const [isVideos, setVideos] = useState(false);

    const [voiceRange, setVoiceRange] = useState(15);
    const [beepRange, setBeepRange] = useState(5);

    const toggleSwitch = (title: string) => {
        switch (title) {
            case Type_Of_ToggleButton.Skill:
                setIsSkill(!isSkill);
                break;
            case Type_Of_ToggleButton.Sound:
                setSound(!isSound);
                break;
            case Type_Of_ToggleButton.WarmUp:
                setIsWarmUp(!isWarmUp);
                break;
            case Type_Of_ToggleButton.Videos:
                setVideos(!isVideos);
                break;
        }
    }

    return (
        <View style={styles.vSettingsContainer}>
            <Text style={[CS.text_black_bold, styles.tSettingsTitle]}>{FSString.timerSettings}</Text>
            <ScrollView>
                <View>
                    <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.skill}</Text>
                    <TouchableWithoutFeedback onPress={() => toggleSwitch(FSString.skill)}>
                        <FSToggleButton
                            title={FSString.skill}
                            toggleStatus={isSkill}
                            onChangeToggleStatus={toggleSwitch} />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.vMainToggleContainer}>
                    <View style={styles.vToggleContainer}>
                        <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.sound}</Text>
                        <TouchableWithoutFeedback onPress={() => toggleSwitch(FSString.sound)}>
                            <FSToggleButton
                                title={FSString.sound}
                                toggleStatus={isSound}
                                onChangeToggleStatus={toggleSwitch} />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.vVideoContainer}>
                        <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.speech}</Text>
                        <FSRadioButton item={Type_Of_Gender} />
                    </View>
                </View>
                <View style={styles.vMainToggleContainer}>
                    <View style={styles.vToggleContainer}>
                        <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.warmUps}</Text>
                        <TouchableWithoutFeedback onPress={() => toggleSwitch(FSString.warmUps)}>
                            <FSToggleButton
                                title={FSString.warmUps}
                                toggleStatus={isWarmUp}
                                onChangeToggleStatus={toggleSwitch} />
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.vVideoContainer}>
                        <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.videos}</Text>
                        <TouchableWithoutFeedback onPress={() => toggleSwitch(FSString.videos)}>
                            <FSToggleButton
                                title={FSString.videos}
                                toggleStatus={isVideos}
                                onChangeToggleStatus={toggleSwitch} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View>
                    <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.voice}</Text>
                    <FSSlider
                        sliderValue={voiceRange}
                        onChangeSliderValue={(value: number) => setVoiceRange(value)}
                    />
                </View>
                <View style={styles.vBeepContainer}>
                    <Text style={[CS.text_secondary_regular, styles.tTitle]}>{FSString.beep}</Text>
                    <FSSlider
                        sliderValue={beepRange}
                        onChangeSliderValue={(value: number) => setBeepRange(value)}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default FSSettingsBottomSheet;
