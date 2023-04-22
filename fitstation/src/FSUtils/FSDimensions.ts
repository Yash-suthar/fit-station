import styleconfig from "./FSStyleConfig";

export const Margin = {
    huge: styleconfig.smartScale(128),
    extralarge: styleconfig.smartScale(64),
    large: styleconfig.smartScale(32),
    defaultLarge: styleconfig.smartScale(25),
    default: styleconfig.smartScale(20),
    defaultSmall: styleconfig.smartScale(14),
    small: styleconfig.smartScale(8),
    extraSmall: styleconfig.smartScale(4),
    tiny: styleconfig.smartScale(2)
};

export const Padding = {
    huge: styleconfig.smartScale(128),
    extralarge: styleconfig.smartScale(64),
    large: styleconfig.smartScale(32),
    default: styleconfig.smartScale(16),
    defaultSmall: styleconfig.smartScale(12),
    small: styleconfig.smartScale(8),
    extraSmall: styleconfig.smartScale(4),
    none: styleconfig.smartScale(0)
};

export const Sizes = {
    appBarBackSize: styleconfig.countPixelRatio(24),
    text: {
        appBarTitle: styleconfig.countPixelRatio(30),
        header: styleconfig.countPixelRatio(28),
        title: styleconfig.countPixelRatio(25),
        default: styleconfig.countPixelRatio(22),
        subtitle: styleconfig.countPixelRatio(18),
        detail: styleconfig.countPixelRatio(16),
        data: styleconfig.countPixelRatio(12),
        small: styleconfig.countPixelRatio(6),
    },
    cornerRadius: {
        extralarge: styleconfig.smartScale(24),
        large: styleconfig.smartScale(16),
        default: styleconfig.smartScale(8),
        small: styleconfig.smartScale(4),
        extraSmall: styleconfig.smartScale(2)
    },
    loadingDialogHeight: styleconfig.smartScale(80),
    practiceProblemThumbHeight: styleconfig.smartScale(180),
    toolBarHeight: styleconfig.smartScale(55),
    extraContainer: styleconfig.smartScale(10),
    circleSize: styleconfig.smartScale(16),
    zIndex: 9999,
    tabBarHeight: styleconfig.smartScale(60),
    logo: styleconfig.smartScale(50),
    imageBackgroundHeight: styleconfig.height / 4,
    imageHeightChallenges: styleconfig.smartScale(150),
    androidElevation: 10,
    iosElevation: 5,
    responsiveDropdownWidth: styleconfig.smartWidthScale(137),
    gifHeight: styleconfig.smartScale(120),
    gifWidth: styleconfig.smartWidthScale(100),
    deviceHeight: styleconfig.height,
    deviceWidth: styleconfig.width,
    graphHeight: styleconfig.smartScale(200),
    socialLoginButtons: styleconfig.smartWidthScale(160),

    cardImageHeight: styleconfig.responsiveHeight(38),
    cardImageWidth: styleconfig.responsiveWidth(70),
};

export const BorderWidth = {
    extralarge: styleconfig.smartScale(5),
    large: styleconfig.smartScale(4),
    default: styleconfig.smartScale(3),
    small: styleconfig.smartScale(2),
    extraSmall: styleconfig.smartScale(1)
};

export const Icon = {
    height: styleconfig.smartScale(50),
    width: styleconfig.smartWidthScale(45),
    largeHeight: styleconfig.smartScale(35),
    largeWidth: styleconfig.smartWidthScale(38),
    defaultHeight: styleconfig.smartScale(15),
    defaultWidth: styleconfig.smartWidthScale(15),
    smallHeight: styleconfig.smartScale(10),
    smallWidth: styleconfig.smartWidthScale(10),
    commonHeight: styleconfig.smartScale(50),
    commonWidth: styleconfig.smartWidthScale(50),
}

export const MaxLength = {
    name: 45,
    phoneNumber: 10,
    password: 15,
    age: 3,
}
