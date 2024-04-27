import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../fireBase/firebaseConfig";

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState(null);

  console.log(user);
 //  social provider
 const googleProvider = new GoogleAuthProvider();
 const TwitterProvider = new TwitterAuthProvider();
 const FacebookProvider = new FacebookAuthProvider();


  //create user
  const createUser =(email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)

  }
  //singIn User
  const signInUser = (email, password) => {
    
    return signInWithEmailAndPassword(auth, email, password);
  }

  //google login
     
  
     
  const googleLogin =() =>{
    
      return signInWithPopup(auth, googleProvider);
   }

   const twitterLogin =() =>{
    
    return signInWithPopup(auth, TwitterProvider);
   }

   const FacebookLogin =() =>{
    
    return signInWithPopup(auth, FacebookProvider);
   }
   //logout
   const logout = ()=>{
    setUser(null);
    signOut(auth);
   }
   //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        
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
    twitterLogin,
    FacebookLogin,
    logout
  
  }
  return (
    <AuthContext.Provider value={allValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;