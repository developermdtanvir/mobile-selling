import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
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
  const authInfo = { loginWithGoogle, githubLogin, user, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
