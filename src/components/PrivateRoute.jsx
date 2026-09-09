import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

function PrivateRoute() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, []);
  return <Outlet />;
}

export default PrivateRoute;
