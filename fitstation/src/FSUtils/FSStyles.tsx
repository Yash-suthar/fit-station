import FSColors from "./FSColors"
import styleconfig from './FSStyleConfig'
import { TextStyle, ViewStyle, Platform } from "react-native"
import { Margin, Padding, Sizes,Icon } from "./FSDimensions"

interface styeleProps {

    text_black_semibold: TextStyle,
    text_black_bold: TextStyle,
    text_black_shop_bold: TextStyle,
    text_black_medium: TextStyle,
    text_black_regular: TextStyle,
    text_white_semibold: TextStyle,
    text_white_bold: TextStyle,
    text_white_medium: TextStyle,
    text_white_regular: TextStyle,
    text_white_small_bold: TextStyle,
    text_secondary_semibold: TextStyle,
    text_secondary_bold: TextStyle,
    text_secondary_medium: TextStyle,
    text_secondary_regular: TextStyle,
    text_primary_semibold: TextStyle,
    text_primary_bold: TextStyle,
    text_primary_medium: TextStyle,
    text_primary_regular: TextStyle,
    text_light_white_semibold: TextStyle,
    text_light_white_bold: TextStyle,
    text_light_white_medium: TextStyle,
    text_light_white_regular: TextStyle,
    text_light_green_semibold: TextStyle,
    text_light_green_bold: TextStyle,
    text_light_green_medium: TextStyle,
    text_light_green_regular: TextStyle,
    saContainer: ViewStyle,
    kavContainer: ViewStyle,
    tTitleContainer: TextStyle,
    iBack: any,
    iBackWhite: any,
    iHeart: any,
    saWhiteContainer: ViewStyle,
    iIcon: any,
    shadowEffect: any,
}

const CS: styeleProps = {
    text_black_semibold: {
        color: FSColors.black,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_black_bold: {
        color: FSColors.black,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_black_shop_bold: {
        color: FSColors.black,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text_black_medium: {
        color: FSColors.black,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_black_regular: {
        color: FSColors.black,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },
    text_white_semibold: {
        color: FSColors.white,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_white_bold: {
        color: FSColors.white,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_white_medium: {
        color: FSColors.white,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_white_regular: {
        color: FSColors.white,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },
    text_white_small_bold: {
        color: FSColors.white,
        fontSize: Sizes.text.small,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },

    text_secondary_semibold: {
        color: FSColors.secondary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_secondary_bold: {
        color: FSColors.secondary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_secondary_medium: {
        color: FSColors.secondary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_secondary_regular: {
        color: FSColors.secondary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },


    text_primary_semibold: {
        color: FSColors.primary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_primary_bold: {
        color: FSColors.primary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_primary_medium: {
        color: FSColors.primary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_primary_regular: {
        color: FSColors.primary,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },


    text_light_white_semibold: {
        color: FSColors.lightWhite,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_light_white_bold: {
        color: FSColors.lightWhite,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_light_white_medium: {
        color: FSColors.lightWhite,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_light_white_regular: {
        color: FSColors.lightWhite,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },


    text_light_green_semibold: {
        color: FSColors.lightGreen,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontSemibold,
    },
    text_light_green_bold: {
        color: FSColors.lightGreen,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontBold,
    },
    text_light_green_medium: {
        color: FSColors.lightGreen,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontMedium,
    },
    text_light_green_regular: {
        color: FSColors.lightGreen,
        fontSize: Sizes.text.detail,
        textAlign: 'center',
        fontFamily: styleconfig.fontRegular,
    },
    saContainer: {
        flex: 1,
        backgroundColor: FSColors.primary,
    },
    saWhiteContainer: {
        flex: 1,
        backgroundColor: FSColors.white,
    },
    kavContainer: {
        flexGrow: 1,
        paddingVertical: Padding.extraSmall,
    },
    tTitleContainer: {
        textAlign: 'left',
        marginVertical: Margin.small,
        fontSize: Sizes.text.title,
        marginHorizontal: Margin.default,
    },
    iBack: {
        tintColor: FSColors.black
    },
    iBackWhite: {
        tintColor: FSColors.white
    },
    iHeart: {
        tintColor: FSColors.red
    },
    iIcon: {
        height: Icon.smallHeight,
        width: Icon.smallHeight
    },

    shadowEffect: {
        shadowColor: FSColors.black,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.9,
        shadowRadius: Sizes.cornerRadius.large,
        elevation: Platform.OS === 'android' ? Sizes.androidElevation : Sizes.iosElevation,
    }

}
export default CS