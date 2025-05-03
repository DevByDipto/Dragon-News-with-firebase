import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [loding,setLoding] = useState(true)
    const [user,setUse] = useState(null)


  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn=(email,password)=>{
    // console.log("4");
    
    return signInWithEmailAndPassword(auth, email, password)
  }

const profileUpdate=({displayName,photoURL})=>{
  return updateProfile(auth.currentUser, {
    displayName: displayName, photoURL: photoURL
  })
}


const LogOut =()=>{   
 return   signOut(auth)
}


useEffect(()=>{
const unSuscribe=onAuthStateChanged(auth, (user) => {
        setUse(user);
        
        setLoding(false)
        })
return ()=> unSuscribe()

},[])

  const userInfo = {
    signUp,
    logIn,
    LogOut,
    user,
    loding,
    profileUpdate
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
