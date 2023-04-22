import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Sizes, Icon, BorderWidth } from '../../../FSUtils/FSDimensions';
import FSStyleConfig from '../../../FSUtils/FSStyleConfig';

const styles = StyleSheet.create({
    vContainer: {
        flexDirection: "row",
        marginVertical: Margin.small
    },
    vButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: Margin.small,
    },
    pCircle: {
        height: FSStyleConfig.countPixelRatio(20),
        width: FSStyleConfig.countPixelRatio(20),
        borderRadius: FSStyleConfig.countPixelRatio(10),
        borderWidth: BorderWidth.extraSmall,
        marginRight: Margin.extraSmall,
        borderColor: FSColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
