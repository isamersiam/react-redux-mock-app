import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAuth } from "../actions/bankingActions";

const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleAuth = () => {
    dispatch({ type: "TOGGLE_AUTH" });
  };
  return (
    <div>
      <button onClick={handleAuth} className="btn btn-info">
        {auth.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Auth;
