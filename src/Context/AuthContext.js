import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
            console.log("user state change",currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> {unsubscribe()};
    }, []);

    const logIn = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile  =(profile)=>{
        return updateProfile(auth.currentUser,profile);
    }
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const googleProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }
    const authInfo = { user, 
        googleProvider,
        logOut,
        logIn,
        login,
        loading,
        updateUserProfile ,
        verifyEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;