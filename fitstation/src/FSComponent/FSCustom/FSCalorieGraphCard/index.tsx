import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import FSColors from '../../../FSUtils/FSColors';
import { BarChart, XAxis, Grid } from 'react-native-svg-charts'
import CS from '../../../FSUtils/FSStyles';

interface FSCalorieGraphCardProps {
    item?: any;
    index?: number;
}
const FSCalorieGraphCard: React.FC<FSCalorieGraphCardProps> = ({ item, index }) => {

    const setFormatLabel = (value: any, index: any) => {
        if (item.calories.length > 20) {
            if (index % 2) return value;
            else return "";
        } else {
            return item.label[index];
        }
    }

    return (
        <View style={styles.vActivityContainer}>
            <View style={styles.vActivityCardTab}>
                <Text style={CS.text_black_bold}>Calories burned</Text>
            </View>
            <View>
                <View style={styles.vBarChart}>
                    <BarChart
                        style={{ flex: 1 }}
                        spacingInner={0.5}
                        data={item.calories}
                        gridMin={0}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{ fill: FSColors.secondary }}
                    >
                        <Grid />
                    </BarChart>
                    <XAxis
                        style={{ marginHorizontal: -10 }}
                        data={item.calories}
                        formatLabel={setFormatLabel}
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fill: FSColors.secondary }}
                    />
                </View>
            </View>
        </View>
    );
};

export default FSCalorieGraphCard;
