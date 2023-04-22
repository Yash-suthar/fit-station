import { StyleSheet } from 'react-native';
import { Margin, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    vContainer: {
        flexDirection: "row",
        marginVertical: Margin.small
    },
    tStatus: {
        fontSize: Sizes.text.default,
        width: Sizes.text.default * 2,
    },
    sContainer: {
        marginHorizontal: Margin.small,
    }

});

export default styles;
