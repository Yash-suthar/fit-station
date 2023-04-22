import React from 'react';
import { View, ScrollView } from 'react-native';
import CS from '../../../FSUtils/FSStyles';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
import FSActivityCard from '../FSActivityCard';
import FSCalorieGraphCard from '../FSCalorieGraphCard';
import { FSDummyWorkoutsData, FSDummyChallengesData, nextDate } from '../../../FSUtils/FSDummyString';
import { Calendar } from 'react-native-calendars';
import FSColors from '../../../FSUtils/FSColors';

interface FSItemActivityProps {
    graphList:any
}

const FSItemActivity: React.FC<FSItemActivityProps> = ({graphList}) => {

    let mark: any = {};

    nextDate.forEach(day => {
        mark[day] = {
            marked: true,
            selected: true,
            selectedColor: FSColors.secondary
        };
    });

    return (
        <ScrollView>
            <SafeAreaView
                style={CS.saContainer}
                forceInset={{ bottom: 'always', top: 'never' }}>
                <View style={styles.vContainer}>
                    <FSActivityCard
                        item={FSDummyWorkoutsData}
                    />
                    <FSActivityCard
                        item={FSDummyChallengesData}
                    />
                </View>

                <View style={styles.vCardContainer}>
                    <FSCalorieGraphCard
                        item={graphList}
                    />
                </View>

                <View style={styles.vCardContainer}>
                    <Calendar
                        onDayPress={(day) => { console.log(day) }}
                        current={new Date()}
                        onMonthChange={(month) => { console.log(month) }}
                        hideArrows={false}
                        hideExtraDays={true}
                        disableMonthChange={false}
                        firstDay={1}
                        hideDayNames={false}
                        showWeekNumbers={false}
                        onPressArrowLeft={substractMonth => substractMonth()}
                        onPressArrowRight={addMonth => addMonth()}
                        markedDates={mark}
                        style={styles.cContainer}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default FSItemActivity;
