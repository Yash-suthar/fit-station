import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import FSConstant from '../FSUtils/FSConst'
import FSString from '../FSUtils/FSString'
import firebase from "@react-native-firebase/app"
import FSMethod from '../FSUtils/FSMethod'

const createUserWithEmailAndPassword = (email: string, password: string) => new Promise((resolve, reject) => {

    auth().createUserWithEmailAndPassword(email, password).then(result => {
        resolve(result)
    }).catch(error => {
        reject(error)
    })

})

const getUser = () => new Promise((resolve, reject) => {
    FSMethod.getPref(FSConstant.IsLogin).then((response) => {
        if (response) {
            let User = auth().currentUser;
            resolve(User)
        }
    })
        .catch((e) => {
            reject(e);
            console.log('getUser' + e)
        });
})

const signOut = () => new Promise((resolve, reject) => {
    auth()
        .signOut()
})

const addDataInUser = (uID: string, userData: any) => new Promise((resolve, reject) => {
    firestore()
        .collection(FSConstant.Users)
        .doc(uID)
        .set(userData).then((result: any) => {
            resolve(result)
        }).catch((error: any) => {
            reject(error)
        });
})

const updateDataInUser = (uID: string, userData: any) => new Promise((resolve, reject) => {
    firestore()
        .collection(FSConstant.Users)
        .doc(uID)
        .update(userData).then((result: any) => {
            resolve(result)
        }).catch((error: any) => {
            reject(error)
        });
})


const signInWithEmailAndPassword = (email: string, password: string) => new Promise((resolve, reject) => {
    auth().signInWithEmailAndPassword(email, password).then(result => {
        resolve(result)
    }).catch(error => { reject(error) })
})

const signInWithCredential = (Credential: any) => new Promise((resolve, reject) => {
    auth().signInWithCredential(Credential).then(result => {
        resolve(result)
    }).catch(error => { reject(error) })
})

const fetchAllUserData = () => new Promise((resolve, reject) => {
    firestore()
        .collection(FSConstant.Users)
        .get().then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        });
})

const fetchUserDataById = (uID: string,) => new Promise((resolve, reject) => {
    firestore()
        .collection(FSConstant.Users)
        .doc(uID)
        .get().then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        });
})

const addFavouriteWorkout = (uID: string, favourites: any) => new Promise((resolve, reject) => {
    firestore()
        .collection(FSString.favourites)
        .doc(uID)
        .set(
            {
                workoutIds: firebase.firestore.FieldValue.arrayUnion(favourites),
            }, { merge: true }
        ).then((result: any) => {
            resolve(result)
        }).catch((error: any) => {
            reject(error)
        });
})

const removeFavouriteWorkout = (uID: string, favourites: any) => new Promise((resolve, reject) => {
    firestore()
        .collection(FSString.favourites)
        .doc(uID)
        .update(
            {
                workoutIds: firebase.firestore.FieldValue.arrayRemove(favourites),
            }
        ).then((result: any) => {
            resolve(result)
        }).catch((error: any) => {
            reject(error)
        });
})

const fetchFavourites = (uID: string) => new Promise((resolve, reject) => {
    firestore()
        .collection(FSString.favourites)
        .doc(uID)
        .get().then(result => {
            resolve(result)
        }).catch(error => {
            reject(error)
        });
})

const sendResetPasswordLink = (email: string) => new Promise((resolve, reject) => {
    auth().sendPasswordResetEmail(email).then((res) => {
        resolve(res)
    }).catch((error) => {
        reject(error)
    })
})

const authService = {
    createUserWithEmailAndPassword,
    addDataInUser,
    updateDataInUser,
    signInWithEmailAndPassword,
    signInWithCredential,
    signOut,
    fetchAllUserData,
    fetchUserDataById,
    addFavouriteWorkout,
    removeFavouriteWorkout,
    fetchFavourites,
    sendResetPasswordLink,
    getUser,
};

export default authService;