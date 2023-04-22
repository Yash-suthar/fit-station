import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { BorderWidth, Margin, Padding, Sizes, Icon } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    vCardContainer: {
        marginHorizontal: Margin.default,
        marginVertical: Margin.small,
        borderRadius: Sizes.cornerRadius.large,
        backgroundColor: FSColors.white,
    },
    iImageContainer: {
        borderRadius: Sizes.cornerRadius.large,
        backgroundColor: FSColors.black,
        paddingTop: Padding.default
    },
    iImageStyleContainer: {
        borderRadius: Sizes.cornerRadius.large,
        opacity: 0.7,
    },
    vCardDetailsContainer: {
        marginTop: Padding.extralarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Padding.small,
    },
    vCardDetailsRightFlex: {
        alignItems: 'flex-start'
    },
    vCardDetailsLeftFlex: {
        alignItems: 'flex-end',
    },
    tCardName: {
        fontSize: Sizes.text.default,
    },
    tCardData: {
        fontSize: Sizes.text.data,
    },
    iCardData: {
        height: Icon.smallHeight,
        width: Icon.smallWidth,
        marginTop: Margin.tiny,
    },
    vCircleContainer: {
        flexDirection: 'row-reverse',
    },
    vCircles: {
        height: Sizes.circleSize,
        width: Sizes.circleSize,
        borderRadius: Sizes.cornerRadius.large,
        borderColor: FSColors.white,
        borderWidth: BorderWidth.extraSmall,
        marginBottom: Margin.extraSmall,
        marginLeft: -Margin.small,
    },
    aStarContainer: {
        marginBottom: -Margin.extraSmall,
    },
    pHeartContainer: {
        marginRight: Margin.small,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default styles;
