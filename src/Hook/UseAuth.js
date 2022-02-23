import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';


const UseAuth = () => {
    const authh = useContext(AuthContext);
    return authh;
};

export default UseAuth;