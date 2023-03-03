import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../Components/firebase.confiq';


export const UserContext = createContext()
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user,SetUser] = useState('')
    const [loader,SetLoader] = useState(true)

    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userName, userPhoto) => {
        return updateProfile(auth.currentUser,{
            displayName: userName,
            photoURL: userPhoto
        })
    }

    // useEffect(()=>{
    //     const unsubscribed = onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser)
    //         setLoading(false)
            
    //     })

    //     return ()=>unsubscribed();
    // },[])

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,currentUser=>{
            SetUser(currentUser)
            SetLoader(false)
        })
        return ()=> unsubscribed();
    },[]) 






    const userInfo = {
        registerWithEmailPass,
        logInWithEmailAndPassword,
        updateUser

    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;