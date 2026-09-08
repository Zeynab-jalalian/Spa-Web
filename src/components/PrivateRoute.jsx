import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function PrivateRoute({ children }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, []);
  return children;
}

export default PrivateRoute;
