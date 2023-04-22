import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import { ROUTES } from '../../../FSRouter/routes';
import styles from './styles'
import { FSAlways, FSNever } from '../../../FSUtils/FSConst'
import { WebView } from 'react-native-webview';
import { RouteProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { updateLoader } from '../../../FSRedux/FSActions/commonactions';

interface FSTutorialScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<{ params: { videoUrl: any } }, 'params'>;
}

const FSTutorialScreen: React.FC<FSTutorialScreenProps> = ({ navigation, route }) => {
    const { videoUrl } = route?.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateLoader(true));
        setTimeout(() => {
            dispatch(updateLoader(false))
        }, 3000)
    }, [])

    const handleOnLeftClick = () => {
        navigation.navigate(ROUTES.Beginner);
    };

    const handleOnRightClick = () => {
        navigation.navigate(ROUTES.Shop)
    };

    return (
        <SafeAreaView
            style={CS.saWhiteContainer}
            forceInset={{ bottom: FSNever, top: FSNever }}>
            <FSCommonToolbar
                title={FSString.tutorial.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                rightIcon={
                    <Text style={[CS.text_secondary_regular]}>{FSString.shop}</Text>
                }
                leftIcon={
                    <Image style={CS.iBack} source={AppImages.ic_back} />
                }
                onRightClickListener={handleOnRightClick}
            />
            <View style={styles.vWebViewContainer}>
                <WebView
                    startInLoadingState={true}
                    source={{ uri: videoUrl }}
                    allowsFullscreenVideo
                    allowsInlineMediaPlayback
                    mixedContentMode={FSAlways}
                    androidLayerType={'hardware'}
                    javaScriptEnabled
                    automaticallyAdjustContentInsets
                />
            </View>
        </SafeAreaView>
    );
};

export default FSTutorialScreen;
