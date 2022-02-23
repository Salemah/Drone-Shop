import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import handleInitialize from '../Pages/Login/Firebase/FirebaseInitialize';
handleInitialize();
const UseFirebase = () => {
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const GoogleSignin = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
            }).catch((error) => {

            });

    }



    return{GoogleSignin}
};

export default UseFirebase;