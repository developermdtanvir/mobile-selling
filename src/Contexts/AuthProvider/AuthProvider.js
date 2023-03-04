import React, { createContext } from "react";

// create context
export const AuthContext = createContext();

//authInfo  -object scaffolding
const authInfo = {};

export default function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
