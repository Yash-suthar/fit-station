import React, {useState, useEffect} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CS from '../../../FSUtils/FSStyles';
import {RootStackParamList} from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import FSToggleButton from '../../../FSComponent/FSCustom/FSToggleButton';
import FSDropDown from '../../../FSComponent/FSCustom/FSDropDown';
import {
  Type_Of_Profile,
  Type_Of_Profile_Dropdown,
} from '../../../FSUtils/FSEnum';
import FSInputConfig from '../../../FSUtils/FSInputConfig';
import FSTextInput from '../../../FSComponent/FSCustom/FSTextInput';
import authService from '../../../FSFirebase/auth';
import firestore from '@react-native-firebase/firestore';
import FSButton from '../../../FSComponent/FSCustom/FSButton';
import FSValidation from '../../../FSUtils/FSValidation';
import {showToast} from '../../../FSUtils/FSToast';
import {Provider} from 'react-native-paper';
import {updateLoader} from '../../../FSRedux/FSActions/commonactions';
import {useDispatch} from 'react-redux';
import {FSAlways, FSNever} from '../../../FSUtils/FSConst';
import {ROUTES} from '../../../FSRouter/routes';

interface FSProfileScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const FSProfileScreen: React.FC<FSProfileScreenProps> = ({navigation}) => {
  const [tiUid, setTiUid] = useState<string>('');
  const [tiName, setTiName] = useState<string>('');
  const [tiAge, setTiAge] = useState<string>('');
  const [tiWeight, setTiWeight] = useState<string>('');
  const [tiHeight, setTiHeight] = useState<string>('');

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isMertics, setMetrics] = useState(false);

  const [selectedHeightInFeet, setSelectedHeightInFeet] = useState<any>();
  const [selectedHeightInInches, setSelectedHeightInInches] = useState<any>();
  const [selectedGenderItem, setSelectedGenderItem] = useState<any>();
  const [selectedPreferenceItem, setSelectedPreferenceItem] = useState<any>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLoader(true));
    authService
      .getUser()
      .then((User: any) => {
        dispatch(updateLoader(false));
        setIsLogin(true);
        setTiUid(User.uid);
        fetchUserDetail(User.uid);
      })
      .catch(e => {
        dispatch(updateLoader(false));
        console.log('no user found', e);
      });
  }, []);

  const fetchUserDetail = (uid: string) => {
    dispatch(updateLoader(true));
    authService
      .fetchUserDataById(uid)
      .then((result: any) => {
        dispatch(updateLoader(false));
        setTiName(result?._data?.Name);
        setTiAge(result?._data?.Age);
        setTiWeight(result?._data?.Weight);
        setTiHeight(result?._data?.Height);
        setMetrics(
          result?._data.Mertics === undefined
            ? isMertics
            : result?._data.Mertics,
        );
        setSelectedHeightInFeet(result?._data?.HeightInFeet);
        setSelectedHeightInInches(result?._data?.HeightInInches);
        setSelectedGenderItem(result?._data?.Gender);
        setSelectedPreferenceItem(result?._data?.Preference);
      })
      .catch(error => {
        dispatch(updateLoader(false));
        console.log(error);
      });
  };

  const onChangeTextHandle = (text: string, index: number) => {
    switch (index) {
      case Type_Of_Profile.Name:
        setTiName(text);
        break;
      case Type_Of_Profile.Age:
        setTiAge(text);
        break;
      case Type_Of_Profile.Weight:
        setTiWeight(text);
        break;
    }
  };

  const getInputValue = (index: number) => {
    switch (index) {
      case Type_Of_Profile.Name:
        return tiName;
      case Type_Of_Profile.Age:
        return tiAge;
      case Type_Of_Profile.Weight:
        return tiWeight;
    }
  };

  const handleSelectedItem = (text: string, type: string) => {
    switch (type) {
      case Type_Of_Profile_Dropdown.HeightInFeet:
        setSelectedHeightInFeet(text);
        break;
      case Type_Of_Profile_Dropdown.HeightInInches:
        setSelectedHeightInInches(text);
        break;
      case Type_Of_Profile_Dropdown.Gender:
        setSelectedGenderItem(text);
        break;
      case Type_Of_Profile_Dropdown.Preference:
        setSelectedPreferenceItem(text);
        break;
    }
  };

  const toggleSwitch = () => {
    setMetrics(!isMertics);
  };

  const handleOnLeftClick = () => {
    navigation.goBack();
  };

  const checkValidation = () => {
    if (isLogin) {
      if (FSValidation.isFieldEmpty2(tiName)) {
        showToast(FSString.pleaseEnterName);
      } else if (FSValidation.isNameInvalid(tiName)) {
        showToast(
          FSString.name + FSString.space + FSString.pleaseEnterValidName,
        );
      } else if (FSValidation.isFieldEmpty2(tiAge)) {
        showToast(FSString.pleaseEnterAge);
      } else if (FSValidation.isNumber(tiAge)) {
        showToast(
          FSString.age + FSString.space + FSString.pleaseEnterDigitOnly,
        );
      } else if (FSValidation.isAgeInvalid(tiAge)) {
        showToast(FSString.pleaseEnterValidAge);
      } else if (FSValidation.isFieldEmpty2(tiWeight)) {
        showToast(FSString.pleaseEnterWeight);
      } else if (FSValidation.isNumber(tiWeight)) {
        showToast(
          FSString.weight + FSString.space + FSString.pleaseEnterDigitOnly,
        );
      } else if (
        !isMertics &&
        FSValidation.isSelectionNull(selectedHeightInFeet)
      ) {
        showToast(
          FSString.pleaseSelect + FSString.space + FSString.heightInFeet,
        );
      } else if (
        !isMertics &&
        FSValidation.isSelectionNull(selectedHeightInInches)
      ) {
        showToast(
          FSString.pleaseSelect + FSString.space + FSString.heightInInches,
        );
      } else if (isMertics && tiHeight === undefined) {
        showToast(FSString.pleaseEnterHeight);
      } else if (isMertics && FSValidation.isFieldEmpty2(tiHeight)) {
        showToast(FSString.pleaseEnterHeight);
      } else if (isMertics && FSValidation.isHeightInvalid(tiHeight)) {
        showToast(FSString.pleaseEnterValidHeight);
      } else if (FSValidation.isSelectionNull(selectedGenderItem)) {
        showToast(FSString.pleaseSelect + FSString.space + FSString.gender);
      } else if (FSValidation.isSelectionNull(selectedPreferenceItem)) {
        showToast(FSString.pleaseSelect + FSString.space + FSString.preference);
      } else {
        onUpdateClick();
      }
    } else {
      Alert.alert(FSString.pleaseLoginFirst, FSString.wantToLogin, [
        {
          text: FSString.no,
          onPress: () => console.log(FSString.no),
        },
        {
          text: FSString.yes,
          onPress: () => {
            navigation.navigate(ROUTES.Login);
          },
        },
      ]);
    }
  };

  const onUpdateClick = () => {
    dispatch(updateLoader(true));
    if (isMertics === true) {
      let userData = {
        Name: tiName,
        Age: tiAge,
        Weight: tiWeight,
        Height: tiHeight,
        Mertics: isMertics,
        Gender: selectedGenderItem,
        Preference: selectedPreferenceItem,
        HeightInFeet: firestore.FieldValue.delete(),
        HeightInInches: firestore.FieldValue.delete(),
      };
      authService
        .updateDataInUser(tiUid, userData)
        .then(res => {
          dispatch(updateLoader(false));
          showToast(FSString.profileUpdated);
          handleOnLeftClick();
        })
        .catch(error => {
          console.log(error);
          dispatch(updateLoader(false));
        });
    } else {
      let userData = {
        Name: tiName,
        Age: tiAge,
        Weight: tiWeight,
        Mertics: isMertics,
        Gender: selectedGenderItem,
        Preference: selectedPreferenceItem,
        HeightInFeet: selectedHeightInFeet,
        HeightInInches: selectedHeightInInches,
        Height: firestore.FieldValue.delete(),
      };
      authService
        .updateDataInUser(tiUid, userData)
        .then(res => {
          dispatch(updateLoader(false));
          showToast(FSString.profileUpdated);
          handleOnLeftClick();
        })
        .catch(error => {
          dispatch(updateLoader(false));
          console.log(error);
        });
    }
  };

  return (
    <SafeAreaView
      style={CS.saContainer}
      forceInset={{bottom: FSAlways, top: FSNever}}>
      <FSCommonToolbar
        title={FSString.profile.toUpperCase()}
        isLeftButton
        isRightButton
        onLeftClickListener={handleOnLeftClick}
        rightIcon={
          <Text style={[CS.text_secondary_regular]}>{FSString.shop}</Text>
        }
        leftIcon={<Image source={AppImages.ic_back} style={CS.iBack} />}
      />

      <Provider>
        <KeyboardAwareScrollView
          bounces={false}
          overScrollMode="never"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={CS.kavContainer}>
          <View style={styles.vInputContainer}>
            {FSInputConfig.ProfileMetricsOnInput.map((item, index) => {
              return (
                <FSTextInput
                  key={`ProfileInput-${index}`}
                  placeholder={item.PlaceHolder}
                  inputProps={item}
                  onChangeText={(text: string) =>
                    onChangeTextHandle(text, index)
                  }
                  value={getInputValue(index)}
                  maxLength={item?.Length}
                  keyboardType={item?.KeyboardType}
                  returnKeyType={item?.ReturnKeyType}
                />
              );
            })}
          </View>

          {!isMertics ? (
            <View style={styles.vSplitDropdownContainer}>
              <FSDropDown
                label={FSString.feet}
                selectedItem={selectedHeightInFeet}
                listOfItem={FSString.feetList}
                onSelectingItem={(text: string) =>
                  handleSelectedItem(
                    text,
                    Type_Of_Profile_Dropdown.HeightInFeet,
                  )
                }
              />
              <FSDropDown
                label={FSString.inches}
                selectedItem={selectedHeightInInches}
                listOfItem={FSString.inchesList}
                onSelectingItem={(text: string) =>
                  handleSelectedItem(
                    text,
                    Type_Of_Profile_Dropdown.HeightInInches,
                  )
                }
              />
            </View>
          ) : (
            <FSTextInput
              placeholder={FSInputConfig.heightInput.PlaceHolder}
              inputProps={FSInputConfig.heightInput}
              onChangeText={(text: string) => setTiHeight(text)}
              value={tiHeight}
              keyboardType={FSInputConfig.heightInput?.KeyboardType}
              returnKeyType={FSInputConfig.heightInput?.ReturnKeyType}
            />
          )}

          <View style={styles.vMatrixContainer}>
            <Text style={[CS.text_secondary_regular, styles.tTitle]}>
              {FSString.metrics}
            </Text>
            <FSToggleButton
              title={FSString.metrics}
              toggleStatus={isMertics}
              onChangeToggleStatus={toggleSwitch}
            />
          </View>

          <View style={styles.vSplitDropdownContainer}>
            <FSDropDown
              label={FSString.gender}
              selectedItem={selectedGenderItem}
              listOfItem={FSString.genderList}
              onSelectingItem={(text: string) =>
                handleSelectedItem(text, Type_Of_Profile_Dropdown.Gender)
              }
            />
            <FSDropDown
              label={FSString.preference}
              selectedItem={selectedPreferenceItem}
              listOfItem={FSString.preferenceList}
              onSelectingItem={(text: string) =>
                handleSelectedItem(text, Type_Of_Profile_Dropdown.Preference)
              }
              multiSelect={false}
            />
          </View>

          <View style={styles.vButtonConatiner}>
            <FSButton
              name={FSString.updateProfile.toUpperCase()}
              handleClick={checkValidation}
            />
          </View>
        </KeyboardAwareScrollView>
      </Provider>
    </SafeAreaView>
  );
};

export default FSProfileScreen;
