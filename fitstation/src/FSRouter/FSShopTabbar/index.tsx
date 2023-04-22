import React, { useState } from 'react'
import { BackHandler } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native';
import { ROUTES } from '../routes'
import FSTabItem from '../FSTabItem'
import styles from './styles'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '..';
import FSString from '../../FSUtils/FSString'
import { FSHardwareBackPress, FSNever } from '../../FSUtils/FSConst';

const items = [
    {
        title: FSString.sets.toUpperCase(),
    },
    {
        title: FSString.ropesHandles.toUpperCase(),
    },
    {
        title: FSString.apparel.toUpperCase(),
    },
    {
        title: FSString.mats.toUpperCase(),

    },
]

interface FSShopTabbarProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSShopTabbar: React.FC<FSShopTabbarProps> = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                navigation.navigate(ROUTES.Home)
                return true;
            };
            BackHandler.addEventListener(
                FSHardwareBackPress, onBackPress
            );
            return () =>
                BackHandler.removeEventListener(
                    FSHardwareBackPress, onBackPress
                );
        }, [])
    );

    const onPressHanndle = (index: number) => {
        setActiveIndex(index)
        switch (index) {
            case 0:
                navigation.navigate(ROUTES.Sets)
                break
            case 1:
                navigation.navigate(ROUTES.RopesHandles)
                break
            case 2:
                navigation.navigate(ROUTES.Apparel)
                break
            case 3:
                navigation.navigate(ROUTES.Mats)
                break
        }
    }

    return (<SafeAreaView style={[styles.saContainer]} forceInset={{ top: FSNever, bottom: FSNever }}>
        {items.map((it, index) => (
            <FSTabItem
                key={index}
                style={styles.item}
                title={it.title}
                active={index === activeIndex}
                onPress={() => onPressHanndle(index)}
            />
        ))}
    </SafeAreaView>)
}



export default FSShopTabbar;

