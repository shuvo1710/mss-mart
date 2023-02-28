import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Components/firebase.confiq';


export const UserContext = createContext()
const auth = getAuth(app);
const AuthContext = ({children}) => {
    
const registerWithWmailPass = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}





    const userInfo ={}
    return (
        <UserContext.Provider value={userInfo}>
            
        </UserContext.Provider>
    );
};

export default AuthContext;