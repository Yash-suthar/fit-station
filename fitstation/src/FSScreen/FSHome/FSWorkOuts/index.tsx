import React, {useState, useCallback} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import {RootStackParamList} from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSItemWorkOut from '../../../FSComponent/FSCustom/FSItemWorkOut';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles';
import {ROUTES} from '../../../FSRouter/routes';
import {FSDummyWorkOutData} from '../../../FSUtils/FSDummyString';
import {WorkOut} from '../../../FSRedux/types';
import {FSNever} from '../../../FSUtils/FSConst';
import {DrawerActions, useFocusEffect} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import authService from '../../../FSFirebase/auth';
import {useDispatch} from 'react-redux';
import {updateLoader} from '../../../FSRedux/FSActions/commonactions';
import {showToast} from '../../../FSUtils/FSToast';

interface FSWorkOutScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

interface FSItemWorkOutProps {
  item: WorkOut;
  index: number;
}

const FSWorkOutScreen: React.FC<FSWorkOutScreenProps> = ({navigation}) => {
  const [workOutData, setWorkOutData] = useState(FSDummyWorkOutData);
  const [preferedData, setPreferedData] = useState({});
  const [userId, serUserId] = useState('');
  const [filter, setFilter] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      authService
        .getUser()
        .then((User: any) => {
          if (User) {
            setIsLogin(true);
            serUserId(User.uid);

            authService
              .fetchUserDataById(User.uid)
              .then((result: any) => {
                let prefered = FSDummyWorkOutData.filter(
                  item => item.equipments === result?._data?.Preference,
                );
                console.log('test ::::', result?._data?.Preference);
                if (prefered.length <= 0) {
                  setPreferedData(FSDummyWorkOutData);
                } else {
                  setPreferedData(prefered);
                  authService
                    .fetchFavourites(User.uid)
                    .then((result: any) => {
                      const workOutIds = result?._data.workoutIds;
                      var workoutList = [...prefered];
                      workOutIds.forEach((element: any) => {
                        workoutList.forEach((ele: any) => {
                          if (ele.id === element) {
                            ele.favourite = true;
                          }
                        });
                      });
                      setWorkOutData(workoutList);
                    })
                    .catch(error => {
                      console.log(error);
                    });
                }
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(e => {
          var workoutList = [...workOutData];
          workoutList.forEach(element => {
            element.favourite = false;
          });
          setWorkOutData(workoutList);
        });
    }, []),
  );

  const handleOnLeftClick = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleOnRightClick = () => {
    navigation.navigate(ROUTES.Shop);
  };

  const addToFavourites = (id: any) => {
    authService
      .addFavouriteWorkout(userId, id)
      .then((result: any) => {
        showToast(FSString.favouriteAdded);
      })
      .catch(error => {
        dispatch(updateLoader(false));
        showToast(error.message);
      });
  };

  const removeFromFavourites = (id: any) => {
    authService
      .removeFavouriteWorkout(userId, id)
      .then((result: any) => {
        showToast(FSString.favouriteRemoved);
      })
      .catch(error => {
        dispatch(updateLoader(false));
        showToast(error.message);
      });
  };

  const onFavouriteFilterClick = () => {
    dispatch(updateLoader(true));
    if (isLogin) {
      setFilter(!filter);
      if (!filter) {
        authService
          .fetchFavourites(userId)
          .then((result: any) => {
            const workOutIds = result?._data.workoutIds;
            let favourites = workOutData.filter(item =>
              workOutIds.includes(item.id),
            );
            setWorkOutData(favourites);
            dispatch(updateLoader(false));
          })
          .catch(error => {
            dispatch(updateLoader(false));
            setWorkOutData([]);
          });
      } else {
        setWorkOutData(preferedData);
        dispatch(updateLoader(false));
      }
    } else {
      showToast(FSString.pleaseLoginFirstonFilter);
      dispatch(updateLoader(false));
    }
  };

  const handleCardRating = (rating: number, index: number) => {
    var workoutList = [...workOutData];
    var workoutDetail = workoutList[index];
    workoutDetail.starRating = rating;
    setWorkOutData(workoutList);
  };

  const handleCardItemClick = (previewData: any, index: number) => {
    navigation.navigate(ROUTES.Preview, {
      previewDetails: previewData,
      daysDetails: null,
      screenName: FSString.workout,
    });
  };

  const handleFavouriteClick = (item: any, index: number) => {
    if (isLogin) {
      var workoutList = [...workOutData];
      var workoutDetail = workoutList[index];
      workoutDetail.favourite = !workoutDetail.favourite;
      if (workoutDetail.favourite) addToFavourites(item.id);
      else removeFromFavourites(item.id);
      setWorkOutData(workoutList);
    } else {
      showToast(FSString.pleaseLoginFirstonFavourite);
    }
  };

  const renderWorkOutItem = (props: FSItemWorkOutProps) => {
    return (
      <FSItemWorkOut
        {...props}
        onRatingClick={handleCardRating}
        handleCardClick={handleCardItemClick}
        onFavouriteClick={handleFavouriteClick}
      />
    );
  };

  return (
    <SafeAreaView
      style={CS.saWhiteContainer}
      forceInset={{bottom: FSNever, top: FSNever}}>
      <FSCommonToolbar
        title={FSString.headerTitle.toUpperCase()}
        isLeftButton
        isRightButton
        onLeftClickListener={handleOnLeftClick}
        rightIcon={
          <View style={styles.vHeartIconContainer}>
            <Pressable onPress={onFavouriteFilterClick}>
              {filter ? (
                <Image
                  source={AppImages.ic_heart_filled}
                  style={[CS.iHeart, styles.iHeartIcon]}
                />
              ) : (
                <Image
                  source={AppImages.ic_heart_outlined}
                  style={[CS.iBack, styles.iHeartIcon]}
                />
              )}
            </Pressable>
            <Image
              source={AppImages.ic_shop}
              style={[CS.iBack, styles.iShop]}
            />
          </View>
        }
        leftIcon={<Image style={styles.iLeftIcon} source={AppImages.ic_menu} />}
        onRightClickListener={handleOnRightClick}
      />

      <View style={{flex: 1}}>
        {workOutData?.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => `workoutlist-${index}`}
            style={styles.pFlatlistContainer}
            data={workOutData}
            renderItem={renderWorkOutItem}
            overScrollMode="never"
            bounces={false}
            contentContainerStyle={styles.fContentContainer}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.VEmptyContainer}>
            <Image
              source={AppImages.ic_heart_outlined}
              style={styles.iEmptyIcon}></Image>
            <Text style={[CS.text_black_bold, styles.tEmpty]}>
              {FSString.noFavoriteItems}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default FSWorkOutScreen;
