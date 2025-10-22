import React from "react";
import { Navigate } from "react-router-dom";
import type { Props } from "../../interface";

// Simulate auth status
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" replace />;
};

export default PrivateRoute;
