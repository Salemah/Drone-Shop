import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged ,signOut,signInWithEmailAndPassword,updateProfile,getIdToken} from "firebase/auth";
import handleInitialize from '../Pages/Login/Firebase/FirebaseInitialize';
handleInitialize();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [token, setToken] = useState('');
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const GoogleSignin = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT');
                setUser(user);
                const locationurl = location?.state?.from || '/home';
                history.replace(locationurl);
                setError('');
            }).catch((error) => {
                setError(error.message);

            }).finally(() => setIsLoading(false));

    }
    const emailpassRegister = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                saveUser(email,name,'POST');
                const newUser = { email, displayName: name };
               setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                }).catch((error) => {

                })
               
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));

    }
    //Pass sign in
    const passwordSign = (email, password,location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const locationurl = location?.state?.from || '/home';
                history.replace(locationurl);
                
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
                getIdToken(user)
                .then(idToken=> {
                    setToken(idToken);
                  })
                setUser(user);
            } else {
                setUser('');
            }
            setIsLoading(false);
        });
        return () => Unsubscribe;

    }, [])

    //save databse
    const saveUser = (email,displayName,method)=>{
        const user = {email, displayName}
        fetch('https://morning-citadel-41858.herokuapp.com/adduser',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)

        }).then()


    };
    //admin check
    useEffect(()=>{
        fetch(`https://morning-citadel-41858.herokuapp.com/adduser/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])
    //logout
    const Logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setError('');
        }).catch((error) => {
            setError('error.message');
        }).finally(() => setIsLoading(false));
    }


    return {user,error,admin,token, GoogleSignin,Logout,emailpassRegister,passwordSign,isLoading }
};

export default UseFirebase;