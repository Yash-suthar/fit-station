import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Sizes, Padding, Margin } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    vActivityContainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: Margin.small,
        padding: Padding.default,
        backgroundColor: FSColors.white,
        borderRadius: Sizes.cornerRadius.default,

    },
    vActivityCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iActivity: {
        height: Sizes.text.title,
        width: Sizes.text.title,
        borderRadius: Sizes.cornerRadius.extralarge,
    },
    tActivityValue: {
        fontSize: Sizes.text.appBarTitle,
        marginLeft: Margin.default,
    },
    tActivityName: {
        fontSize: Sizes.text.detail,
        marginTop: Margin.default
    }

});

export default styles;
