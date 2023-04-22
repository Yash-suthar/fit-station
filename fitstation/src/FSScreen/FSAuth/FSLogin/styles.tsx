import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Sizes, Padding } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    vInputContainer: {
        marginTop: Margin.extralarge,
    },
    vLoginButtonContainer: {
        marginHorizontal: Margin.default,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tiFacebookLoginButton: {
        flexDirection: 'row',
        backgroundColor: FSColors.blue,
        width: Sizes.socialLoginButtons,
        marginHorizontal: 0,
        justifyContent: 'center',
    },
    tiFacebookIcon: {
        backgroundColor: FSColors.white,
        tintColor: FSColors.blue,
    },
    tiGoogleLoginButton: {
        flexDirection: 'row',
        backgroundColor: FSColors.white,
        width: Sizes.socialLoginButtons,
        marginHorizontal: 0,
        justifyContent: 'center',
    },
    tInfo: {
        alignSelf: 'center',
        marginVertical: Margin.small,
    },
    tNoAccount: {
        fontSize: Sizes.text.subtitle,
    },
    tForgotPassword: {
        fontSize: Sizes.text.subtitle,
        textAlign: 'center',
    },
});

export default styles;
