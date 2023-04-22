import { StyleSheet } from 'react-native';
import { Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    pDurationContainer: {
        flex: 1,
        marginHorizontal: Margin.extraSmall,
        paddingVertical: Padding.small,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tDuration: {
        fontSize: Sizes.text.detail,
    },

});

export default styles;
