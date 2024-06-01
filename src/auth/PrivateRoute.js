import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./auth";

const PrivateRoute = () => {
  let auth = isAuthenticated();
  let navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return auth ? <Outlet /> : null;
};

export default PrivateRoute;

