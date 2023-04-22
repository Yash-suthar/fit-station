import { StyleSheet } from 'react-native';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';


const styles = StyleSheet.create({
    tDetail: {
        textAlign: 'left',
        marginVertical: Margin.large,
        fontSize: Sizes.text.subtitle,
        marginHorizontal: Margin.default,
    },
    vResendLinkContainer: {
        marginVertical: Margin.default
    },
    tResendLink: {
        fontSize: Sizes.text.subtitle,
        textAlign: 'center',
    },
});

export default styles;
