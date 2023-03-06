import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

export default function PraivetRoute({ children }) {
  const location = useLocation();

  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}
