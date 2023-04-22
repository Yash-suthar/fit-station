import authService from './auth';
import { Settings, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import FSString from '../FSUtils/FSString';
import auth from '@react-native-firebase/auth'

const facebookSettings = () => {
    Settings.initializeSDK();
}

const facebookLogin = () => new Promise(async(resolve, reject) => {
    try {
        const result = await LoginManager.logInWithPermissions([
            FSString.publicProfile,
            FSString.userEmail,
        ]);
        if (result.isCancelled) {
            throw FSString.loginCancelled;
        }
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw FSString.accessTokenError;
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);            
        authService
            .signInWithCredential(facebookCredential)
            .then((result: any) => {
                const user = result.user;
                var userDetail = {
                    Name: user?.displayName,
                    Mobile: user?.phoneNumber,
                    Email: user?.email,
                    UId: user?.uid,
                };
                authService.addDataInUser(user.uid, userDetail).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
            .catch((error) => {
                reject(error)
            })
    } catch (error) {
        reject(error)
    }
})

const facebookAuth = {
    facebookSettings,
    facebookLogin,
};

export default facebookAuth;