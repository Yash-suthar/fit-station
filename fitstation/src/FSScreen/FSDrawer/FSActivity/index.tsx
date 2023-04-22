import React, { useRef, useState } from 'react'
import { View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CS from '../../../FSUtils/FSStyles';
import { RootStackParamList } from '../../../FSRouter';
import SafeAreaView from 'react-native-safe-area-view';
import FSCommonToolbar from '../../../FSComponent/FSCustom/FSCommonToolbar';
import FSString from '../../../FSUtils/FSString';
import AppImages from '../../../FSAssets/FSImages';
import styles from './styles'
import FSDurationButton from '../../../FSComponent/FSCustom/FSDurationButton';
import PagerView from 'react-native-pager-view';
import FSItemActivity from '../../../FSComponent/FSCustom/FSItemActivity';
import { FSDummyDaysData, FSDummyMonthsData, FSDummyYearData } from '../../../FSUtils/FSDummyString';
import { FSActivityBarTitle } from '../../../FSUtils/FSConst';
import { FSAlways, FSNever } from '../../../FSUtils/FSConst';

interface FSActivityScreenProps {
    navigation: StackNavigationProp<RootStackParamList>;
}

const FSActivityScreen: React.FC<FSActivityScreenProps> = ({ navigation }) => {
    const [selectedIndex, setselectedIndex] = useState(0)

    const viewPagerRef = useRef(null)
    const onButtonPressHandle = (index: number) => {
        viewPagerRef.current.setPage(index)
    }

    const onPageSelecteHandle = (e: any) => {
        setselectedIndex(e.nativeEvent.position)
    }


    const DurationBar = () => {
        return (
            <View style={styles.vDurationContainer}>
                {FSActivityBarTitle.map((item, index) => {
                    return (<FSDurationButton
                        item={item}
                        key={`FSDurationButton-${index.toString()}`}
                        index={index}
                        onButtonPressHandle={onButtonPressHandle}
                        isSelected={selectedIndex === index} />)
                })}
            </View>)
    }

    const handleOnLeftClick = () => {
        navigation.goBack()
    };

    return (
        <SafeAreaView
            style={CS.saContainer}
            forceInset={{ bottom: 'always', top: 'never' }}>
            <FSCommonToolbar
                title={FSString.activity.toUpperCase()}
                isLeftButton
                isRightButton
                onLeftClickListener={handleOnLeftClick}
                rightIcon={
                    <Text style={[CS.text_secondary_regular]}>{FSString.activity}</Text>
                }
                leftIcon={
                    <Image source={AppImages.ic_back} style={CS.iBack} />
                }
            />

            <View style={styles.vContainer}>
                <DurationBar />
                <PagerView
                    onPageSelected={onPageSelecteHandle}
                    ref={viewPagerRef}
                    style={styles.vpMain}
                >
                    <FSItemActivity graphList={FSDummyDaysData} key='FSThisWeek' />
                    <FSItemActivity graphList={FSDummyMonthsData} key='FSThisMonth' />
                    <FSItemActivity graphList={FSDummyYearData} key='FSThisYear' />
                    <FSItemActivity graphList={FSDummyDaysData} key='FSAllTime' />
                </PagerView>
            </View>
        </SafeAreaView>
    );
};

export default FSActivityScreen;
