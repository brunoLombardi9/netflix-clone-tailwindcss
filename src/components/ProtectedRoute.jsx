import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userMethods = UserAuth();
  
  if (!userMethods?.user?.email) {
    return <Navigate to="/login"/>
  } else {
    return children;
  }
};

export default ProtectedRoute;
