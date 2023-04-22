import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes, Padding, Margin } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    vActivityContainer: {
        padding: Padding.default,
        backgroundColor: FSColors.white,
        borderRadius: Sizes.cornerRadius.default,
        marginTop: Margin.small
    },
    vActivityCardTab: {
        alignItems: 'center',
    },
    vBarChart: {
        height: Sizes.graphHeight,
        padding: Padding.small,
    },
});

export default styles;
