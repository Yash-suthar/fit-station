import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Padding } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    pContainer: {
        paddingVertical: Padding.small,
        backgroundColor: FSColors.white,
        flexDirection: "row",
        paddingHorizontal: Padding.small,
        marginRight: Margin.large,
    },
});

export default styles;
