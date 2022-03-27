import { createContext } from "react";
import { useFetch } from "../CustomHooks/useFetch";
import { authReducer } from "../Reducer";
import { useReducer, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  user: {},
});

const AuthProvider = ({ children }) => {

  const [authState, authDispatch] = useReducer(authReducer, {
    isAuthenticated: localStorage.getItem("user") ? true : false,
    token: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).encodedToken
      : null,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).foundUser
      : {},
  });

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
