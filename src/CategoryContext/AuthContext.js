import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Components/firebase.confiq';


export const UserContext = createContext()
const auth = getAuth(app);
const AuthContext = ({ children }) => {
    const [user,SetUser] = useState()
    const [loader,SetLoader] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const FaceBookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerWithEmailPass = (email, password) => {
        SetLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInWithEmailAndPassword = (email, password) => {
        SetLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        SetLoader(true)
        return signOut(auth)
    }

    const googleLogIn = ()=>{
        SetLoader(true)
        return signInWithPopup(auth,GoogleProvider)
    }

    const FaceBookLogin=()=>{
        SetLoader(true)
        return signInWithPopup(auth,FaceBookProvider)
    }
    const githubLogIn=()=>{
        SetLoader(true)
        return signInWithPopup(auth,githubProvider)
    }

    const updateUser = (userName, userPhoto) => {
        SetLoader(true)
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
        user,
        loader,
        registerWithEmailPass,
        logInWithEmailAndPassword,
        updateUser,
        googleLogIn,
        FaceBookLogin,
        githubLogIn,
        logOut
        

    }


    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;