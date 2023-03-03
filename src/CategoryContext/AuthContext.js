import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Components/firebase.confiq';


export const UserContext = createContext()
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user,SetUser] = useState('')
    const [loader,SetLoader] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const FaceBookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = ()=>{
        return signInWithPopup(auth,GoogleProvider)
    }

    const FaceBookLogin=()=>{
        return signInWithPopup(auth,FaceBookProvider)
    }
    const githubLogIn=()=>{
        return signInWithPopup(auth,githubProvider)
    }

    const updateUser = (userName, userPhoto) => {
        return updateProfile(auth.currentUser,{
            displayName: userName,
            photoURL: userPhoto
        })
    }

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
        updateUser,
        googleLogIn,
        FaceBookLogin,
        githubLogIn

    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;