import React from 'react'
import { TouchableWithoutFeedback, View, Text } from 'react-native'
import FSColors from '../../FSUtils/FSColors'
import CS from '../../FSUtils/FSStyles'
import styles from './styles'

interface FSBTabItemProps {
    style?: any;
    title?: string;
    active?: boolean;
    onPress?: any;
}

const FSTabItem: React.FC<FSBTabItemProps> = ({
    style, title, active, onPress }) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                {
                    active ?
                        <Text style={[CS.text_black_bold]}>{title}</Text>
                        :
                        <Text style={[CS.text_black_bold, { color: FSColors.white }]}>{title}</Text>
                }
            </View>
        </TouchableWithoutFeedback>
    )
}
export default FSTabItem