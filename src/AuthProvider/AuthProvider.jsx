import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import auth from "../firebase/firebase.config";


export  const AuthContext = createContext(null);
// social auth prroviders
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading ] = useState(true);
    console.log(loading);

    
    //create user with email and password
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    /// update user profile 
    const updateUserProfile = (name, image) =>{
      return  updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image })  
    }
    
    // sign in user with email and password
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // github login
    const githubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
      
       

    }

    // logout user
    const logout = () =>{
        setUser(null)
        signOut(auth)
         // Show toast notification
         toast.success('Log Out successfully');
    }

    // observer
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (user) => {
        console.log(user)
            if (user) {
              setUser(user);
              setLoading(false);
            } else{
            setLoading(false);
                
            }
          });
          return () =>unSubscribe();
          
         
    },[]);


const autInfo ={
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logout,
    updateUserProfile,
    user,
    loading,

    
    
}

    return (
        <AuthContext.Provider value={autInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;