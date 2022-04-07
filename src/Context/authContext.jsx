import { createContext, useReducer } from "react";
import { authReducer } from "../Reducer";

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
