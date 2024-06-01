import { useNavigate } from "react-router-dom";
import { signout } from "./auth";
import { useEffect } from "react";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    signout();
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1000); // Redirect after 1 second (optional)
    
    return () => clearTimeout(timer); 
  }, [navigate]);

  return null;
}

export default Logout;
