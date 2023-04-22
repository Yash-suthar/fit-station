import { Platform, StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    pButtonContainer: {
        marginHorizontal: Margin.default,
        marginVertical: Margin.small,
        paddingVertical: Padding.default,
        borderRadius: Sizes.cornerRadius.default,
        backgroundColor: FSColors.secondary
    },
    tButton: {
        fontSize: Sizes.text.subtitle,
        alignSelf: 'center',
        fontWeight: Platform.OS === 'android' ? 'bold' : '600'
    },
    iIcon: {
        marginRight: Padding.small,
    }
});

export default styles;
