import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
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
    const emailpassRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              
                const user = result.user;
              
            })
            .catch((error) => {
                
            });

    }


    return { GoogleSignin,emailpassRegister }
};

export default UseFirebase;