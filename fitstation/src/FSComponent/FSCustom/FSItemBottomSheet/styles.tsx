import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { BorderWidth, Icon, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    pCardContainer: {
        padding: Padding.default,
        borderBottomWidth: BorderWidth.extraSmall,
        borderBottomColor: FSColors.background_color,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tTitle: {
        fontSize: Sizes.text.title,
    },
    vIconContainer: {
        alignItems: 'center',
    },
    iIcon: {
        height: Icon.largeHeight,
        width: Icon.largeHeight,
        borderRadius: Sizes.cornerRadius.default,
    }
});

export default styles;
