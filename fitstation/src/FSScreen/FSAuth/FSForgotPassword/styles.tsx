import { StyleSheet } from 'react-native';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    tDetail: {
        textAlign: 'left',
        marginVertical: Margin.large,
        fontSize: Sizes.text.subtitle,
        marginHorizontal: Margin.default,
    },
    vInputContainer: {
        marginTop: Margin.tiny
    },
    vButtonContainer: {
        marginVertical: Margin.small
    },

});

export default styles;
