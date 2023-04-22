import authService from './auth';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import FSConstant from '../FSUtils/FSConst';

const configure = () => {
    GoogleSignin.configure({ webClientId: FSConstant.webClientId });
}

const googleLogin = () => new Promise(async(resolve, reject) => {
    try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        authService
            .signInWithCredential(googleCredential)
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
        reject(error);
    }
})

const googleAuth = {
    configure,
    googleLogin,
};

export default googleAuth;