import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    tiContainer: {
        flex: 1,
        color: FSColors.black,
        marginHorizontal: Margin.default,
        marginVertical: Margin.small,
        fontSize: Sizes.text.subtitle,
        backgroundColor: FSColors.primary
    },
});

export default styles;


