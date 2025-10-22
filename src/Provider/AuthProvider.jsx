import React, { useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext';


const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return () => unsubscribe();
    },[])
    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
    
    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;