import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
    apiKey: "AIzaSyCDNrrmmdEPn3rxaFpj_NT2jE6qwdPfF_I",
    authDomain: "crwn-db-f747a.firebaseapp.com",
    databaseURL: "https://crwn-db-f747a.firebaseio.com",
    projectId: "crwn-db-f747a",
    storageBucket: "crwn-db-f747a.appspot.com",
    messagingSenderId: "577193791093",
    appId: "1:577193791093:web:d78f1078673cb8a37ff23c"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData  
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;