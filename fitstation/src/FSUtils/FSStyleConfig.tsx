import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';
const widthPer = width / 100;
const heightPer = height / 100;
const deviceType = width < 480 ? 'phone' : 'tablet';
const iPhoneX = Platform.OS === 'ios' && (height === 812 || height === 896);
const ratioCount = Math.sqrt(height * height + width * width) / 1000;

const APP_FONTS = {
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_ITALIC: 'Poppins-Italic',
  POPPINS_SEMIBOLD: 'Poppins-SemiBold',
};

export default {
  countPixelRatio: (size: number) => size * ratioCount,
  responsiveHeight: (size: number) => size * heightPer,
  responsiveWidth: (size: number) => size * widthPer,
  smartScale: (value: number) => {
    const tempHeight =
      Platform.OS === 'ios' ? (iPhoneX ? height - 78 : height) : height - 24;
    if (deviceType == 'phone') {
      return (value * tempHeight) / 667;
    }
    return (value * tempHeight) / 667;
  },
  smartWidthScale: (value: number) => {
    const tempWidth = width;
    if (deviceType == 'phone') {
      return (value * tempWidth) / 375;
    }
    return (value * tempWidth) / 375;
  },
  getFont: (type: string) => {
    switch (type) {
      case 'light':
        return APP_FONTS.POPPINS_LIGHT;
      case 'regular':
        return APP_FONTS.POPPINS_REGULAR;
      case 'medium':
        return APP_FONTS.POPPINS_MEDIUM;
      case 'bold':
        return APP_FONTS.POPPINS_BOLD;
      case 'italic':
        return APP_FONTS.POPPINS_ITALIC;
      case 'semibold':
        return APP_FONTS.POPPINS_SEMIBOLD;
    }
  },
  fontLight: APP_FONTS.POPPINS_LIGHT,
  fontRegular: APP_FONTS.POPPINS_REGULAR,
  fontMedium: APP_FONTS.POPPINS_MEDIUM,
  fontBold: APP_FONTS.POPPINS_BOLD,
  fontItalic: APP_FONTS.POPPINS_ITALIC,
  fontSemibold: APP_FONTS.POPPINS_SEMIBOLD,
  width,
  height,

  isIphone,
  isAndroid,
};
