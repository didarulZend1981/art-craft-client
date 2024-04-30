import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireBase/firebaseConfig";

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const [logError,SetLogError]= useState('');
  const [successError,SetsuccessError]= useState('');


  console.log(loading);
 //  social provider
 const googleProvider = new GoogleAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();


  //create user
  const createUser =(email, password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)

  }

  //update user profile
  const updatUserProfile = (name,image) =>{
      return  updateProfile(auth.currentUser, {
                displayName: name, 
                photoURL: image
              })
              // .then(() => {
              //   // Profile updated!
              //   // ...
              // }).catch((error) => {
              //   // An error occurred
              //   // ...
              // });
  }

  //singIn User
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  //google login
     
  
     
  const googleLogin =() =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider);
   }

   const twitterLogin =() =>{
    setLoading(true)
    return signInWithPopup(auth, TwitterProvider);
   }

   const FacebookLogin =() =>{
    setLoading(true)
    return signInWithPopup(auth, FacebookProvider);
   }
   //logout
   const logout = ()=>{
    setUser(null);
    signOut(auth);
   }
   //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
        //(( console.log('user in the auth state changed', user);
        if(user){
          setUser(user);
          setLoading(false);
        }
       
        
    });
    return () => {
        unSubscribe();
        }
    }, [])

  const allValue ={
    createUser,
    user,
    signInUser,
    googleLogin,
    
    FacebookLogin,
    logout,
    loading,
    updatUserProfile,
    logError,
    SetLogError,
    successError,
    SetsuccessError
  
  }
  return (
    <AuthContext.Provider value={allValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;