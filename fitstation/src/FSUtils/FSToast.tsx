import FSToast from 'react-native-simple-toast';

export const showToast = (msg: string) => {
    FSToast.show(msg, FSToast.SHORT, [
        'UIAlertController',
    ])
};