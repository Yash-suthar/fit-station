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
        title: FSString.workout.toUpperCase(),

    },
    {
        title: FSString.challanges.toUpperCase(),

    },
    {
        title: FSString.beginner.toUpperCase(),

    },
]

interface FSHomeTabbarProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSHomeTabbar: React.FC<FSHomeTabbarProps> = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPressHanndle = (index: number) => {
        setActiveIndex(index)
        switch (index) {
            case 0:
                navigation.navigate(ROUTES.WorkOuts)
                break
            case 1:
                navigation.navigate(ROUTES.Challanges)
                break
            case 2:
                navigation.navigate(ROUTES.Beginner)
                break
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                BackHandler.exitApp()
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

    return (<SafeAreaView style={[styles.saContainer]} forceInset={{ top: FSNever, bottom:FSNever }}>
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



export default FSHomeTabbar;

