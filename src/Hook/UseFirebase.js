import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged ,signOut,signInWithEmailAndPassword} from "firebase/auth";
import handleInitialize from '../Pages/Login/Firebase/FirebaseInitialize';
handleInitialize();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const GoogleSignin = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError('');
            }).catch((error) => {
                setError(error.message);

            });

    }
    const emailpassRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              
                const user = result.user;
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });

    }
    //Pass sign in
    const passwordSign = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    //cureent User
    useEffect(() => {
        setIsLoading(true);
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('');
            }
            setIsLoading(false);
        });
        return () => Unsubscribe;

    }, [])
    //logout
    const Logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setError('');
        }).catch((error) => {
            setError('error.message');
        }).finally(() => setIsLoading(false));
    }


    return {user, GoogleSignin,Logout,emailpassRegister,passwordSign }
};

export default UseFirebase;