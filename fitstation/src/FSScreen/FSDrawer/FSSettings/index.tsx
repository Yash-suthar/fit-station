import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import {RootStackParamList} from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import FSToggleButton from '../../../FSComponent/FSCustom/FSToggleButton';
import {Type_Of_Dropdown, Type_Of_ToggleButton} from '../../../FSUtils/FSEnum';
import FSDropDown from '../../../FSComponent/FSCustom/FSDropDown';
import FSSlider from '../../../FSComponent/FSCustom/FSSlider';
import {Provider} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {FSAlways, FSNever} from '../../../FSUtils/FSConst';

interface FSSettingsScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const FSSettingsScreen: React.FC<FSSettingsScreenProps> = ({navigation}) => {
  const [isWarmUp, setIsWarmUp] = useState(false);
  const [isVideos, setVideos] = useState(false);
  const [isReview, setReview] = useState(false);
  const [isSound, setSound] = useState(false);

  const [selectedRopesItem, setSelectedRopesItem] = useState<any>(
    FSString.ropesList[0].value,
  );
  const [selectedWorkoutsItem, setSelectedWorkoutsItem] = useState<any>(
    FSString.workoutsList[0].value,
  );
  const [selectedVoiceItem, setSelectedVoiceItem] = useState<any>(
    FSString.voiceList[0].value,
  );

  const [voiceRange, setVoiceRange] = useState(15);
  const [beepRange, setBeepRange] = useState(5);

  const handleSelectedItem = (text: string, type: string) => {
    switch (type) {
      case Type_Of_Dropdown.Ropes:
        setSelectedRopesItem(text);
        break;
      case Type_Of_Dropdown.Workouts:
        setSelectedWorkoutsItem(text);
        break;
      case Type_Of_Dropdown.Voices:
        setSelectedVoiceItem(text);
        break;
    }
  };

  const toggleSwitch = (title: string) => {
    switch (title) {
      case Type_Of_ToggleButton.WarmUp:
        setIsWarmUp(!isWarmUp);
        break;
      case Type_Of_ToggleButton.Videos:
        setVideos(!isVideos);
        break;
      case Type_Of_ToggleButton.WorkoutRatingsAndReviews:
        setReview(!isReview);
        break;
      case Type_Of_ToggleButton.Sound:
        setSound(!isSound);
        break;
    }
  };

  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={CS.saContainer}
      forceInset={{bottom: FSAlways, top: FSNever}}>
      <FSCommonToolbar
        title={FSString.settings.toUpperCase()}
        isLeftButton
        isRightButton
        onLeftClickListener={handleOnLeftClick}
        rightIcon={
          <Text style={[CS.text_secondary_regular]}>{FSString.shop}</Text>
        }
        leftIcon={<Image source={AppImages.ic_back} style={CS.iBack} />}
      />
      <Provider>
        <ScrollView
          style={{flex: 1}}
          bounces={false}
          showsVerticalScrollIndicator={false}
          overScrollMode="never">
          <View style={styles.vTopMargin} />
          <FSDropDown
            label={FSString.ropes}
            selectedItem={selectedRopesItem}
            listOfItem={FSString.ropesList}
            onSelectingItem={(text: string) =>
              handleSelectedItem(text, Type_Of_Dropdown.Ropes)
            }
          />

          <FSDropDown
            label={FSString.workouts}
            selectedItem={selectedWorkoutsItem}
            listOfItem={FSString.workoutsList}
            onSelectingItem={(text: string) =>
              handleSelectedItem(text, Type_Of_Dropdown.Workouts)
            }
          />

          <FSDropDown
            label={FSString.voices}
            selectedItem={selectedVoiceItem}
            listOfItem={FSString.voiceList}
            onSelectingItem={(text: string) =>
              handleSelectedItem(text, Type_Of_Dropdown.Voices)
            }
          />
          <View style={styles.vBottomMargin} />

          <View style={styles.vContainer}>
            <View style={styles.vMainToggleContainer}>
              <View style={styles.vWorkOutContainer}>
                <Text style={[CS.text_secondary_regular, styles.tTitle]}>
                  {FSString.warmUps}
                </Text>
                <FSToggleButton
                  title={FSString.warmUps}
                  toggleStatus={isWarmUp}
                  onChangeToggleStatus={toggleSwitch}
                />
              </View>

              <View style={styles.vVideoContainer}>
                <Text style={[CS.text_secondary_regular, styles.tTitle]}>
                  {FSString.videos}
                </Text>
                <FSToggleButton
                  title={FSString.videos}
                  toggleStatus={isVideos}
                  onChangeToggleStatus={toggleSwitch}
                />
              </View>
            </View>

            <View style={styles.vRatingContainer}>
              <Text style={[CS.text_secondary_regular, styles.tTitle]}>
                {FSString.workoutRatingsAndReviews}
              </Text>
              <FSToggleButton
                title={FSString.workoutRatingsAndReviews}
                toggleStatus={isReview}
                onChangeToggleStatus={toggleSwitch}
              />
            </View>
            <View style={styles.vRatingContainer}>
              <Text style={[CS.text_secondary_regular, styles.tTitle]}>
                {FSString.sound}
              </Text>
              <FSToggleButton
                title={FSString.sound}
                toggleStatus={isSound}
                onChangeToggleStatus={toggleSwitch}
              />
            </View>
            <View>
              <Text style={[CS.text_secondary_regular, styles.tVoice]}>
                {FSString.voice}
              </Text>
              <FSSlider
                sliderValue={voiceRange}
                onChangeSliderValue={(value: number) => setVoiceRange(value)}
              />
            </View>
            <View>
              <Text style={[CS.text_secondary_regular, styles.tBeep]}>
                {FSString.beep}
              </Text>
              <FSSlider
                sliderValue={beepRange}
                onChangeSliderValue={(value: number) => setBeepRange(value)}
              />
            </View>
          </View>
        </ScrollView>
      </Provider>
    </SafeAreaView>
  );
};

export default FSSettingsScreen;
