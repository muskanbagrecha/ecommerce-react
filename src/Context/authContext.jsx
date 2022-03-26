import { createContext } from "react";
import { useFetch } from "../CustomHooks/useFetch";
import { authReducer } from "../Reducer/authReducer";
import { useReducer, useState } from "react";
import axios from "axios";

const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  user: {},
});

const AuthProvider = ({ children }) => {
  // const [loader, setLoader] = useState(false);
  // const [error, setError] = useState(null);

  const [authState, authDispatch] = useReducer(authReducer, {
    isAuthenticated: localStorage.getItem("user") ? true : false,
    token: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).encodedToken
      : null,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).foundUser
      : {},
  });

  // const loginHandler = async(email, password) => {
  //   setLoader(true);
  //   try {
  //     const response = await axios({
  //       url: "/api/users/login",
  //       method: "POST",
  //       data: {
  //         email,
  //         password,
  //       },
  //     });
  //     if (response.status === 200 || response.status === 201) {
  //       authDispatch({ type: "LOGIN", payload: response.data });
  //       localStorage.setItem("user", JSON.stringify(response.data));
  //       setLoader(false);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     if (error.response.status === 401) {
  //       setError("Invalid email or password. Please try again.");
  //     } else {
  //       setError("Unexpected error. Please try again in some time.");
  //     }
  //   }
  // };

  // const logoutHandler = () => {
  //   authDispatch({ type: "LOGOUT" });
  // };

  return (
    <AuthContext.Provider
      value={{ authState, authDispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
