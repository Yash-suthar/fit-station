import { StyleSheet } from 'react-native'
import FSColors from '../../FSUtils/FSColors'
import { Sizes } from '../../FSUtils/FSDimensions'

const styles = StyleSheet.create({
    saContainer: {
        backgroundColor: FSColors.primary,
        flexDirection: 'row',
        height: Sizes.tabBarHeight,
        overflow: 'hidden',
    },
    item: {
        flex: 1,
    },
})

export default styles