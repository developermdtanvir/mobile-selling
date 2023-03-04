import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";

// create context
export const AuthContext = createContext();

const auth = getAuth(app);

// providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// login methods

// google Login
const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// Github Login
const githubLogin = () => {
  return signInWithPopup(auth, githubProvider);
};

// create user with email and password
const createUserWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// login user with email and password

const loginUserWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//update user name
const updateUserName = (name) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
  });
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // check current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      return () => {
        return unsubscribe();
      };
    });
  }, []);

  //authInfo  -object scaffolding
  const authInfo = {
    loginWithGoogle,
    githubLogin,
    user,
    loading,
    createUserWithEmail,
    updateUserName,
    loginUserWithEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
