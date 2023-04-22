import { StyleSheet } from 'react-native';
import FSColors from '../../../FSUtils/FSColors';
import { Margin, Padding, Sizes } from '../../../FSUtils/FSDimensions';

const styles = StyleSheet.create({
    pCardContainer: {
        marginHorizontal: Margin.default,
        marginVertical: Margin.small,
        paddingVertical: Padding.default,
        borderRadius: Sizes.cornerRadius.large,
        backgroundColor: FSColors.white,
        alignItems: 'center',
    },
    tCard: {
        fontSize: Sizes.text.default,
        alignItems: 'center',
        textAlign: 'center',
        display: 'flex',
    },
    tPrice: {
        fontSize: Sizes.text.detail,
        alignItems: 'center',
        textAlign: 'center',
    },
    tDetails: {
        fontSize: Sizes.text.detail,
        marginHorizontal: Margin.default,
        marginTop: Margin.default,
        textAlign: 'center',
    },
    cardImage: {
        height: Sizes.cardImageHeight,
        width: Sizes.cardImageWidth,
        marginVertical: Margin.small,
    },
    cardButton: {
        marginHorizontal: Margin.default,
        marginVertical: Margin.small,
        paddingVertical: Padding.small,
        borderRadius: Sizes.cornerRadius.extralarge,
        paddingHorizontal: Padding.extralarge,
    }
});

export default styles;
