import { StyleSheet } from 'react-native'
import styleconfig from '../../../FSUtils/FSStyleConfig';
import FSColors from '../../../FSUtils/FSColors';

const styles = StyleSheet.create({
    vContainer: {
        flex: 1,
        backgroundColor: FSColors.primary
    },
    vpMain: {
        flex: 1,
    },
    vDurationContainer: {
        marginVertical: styleconfig.smartScale(5),
        paddingVertical: styleconfig.smartScale(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default styles