import { useReducer } from "react";
import AuthContext from "../context/authContext";
import AuthReducer from "./authReducer";
import clientAxios from "../config/clientAxios";
import authToken from "../config/token";
import {
  SUCCESS_LOGIN,
  LOADING_LOGIN,
  ERROR_LOGIN,
  AUTH_USER_LOADING,
  AUTH_USER_ERROR,
  AUTH_USER_SUCCESS,
} from "../types";

const AuthState = ({ children }) => {
  const INITIAL_STATE = {
    token: localStorage.getItem("token") || null,
    auth: false,
    user: null,
    message: "",
    loading: true,
  };

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const login = async (data) => {
    try {
      dispatch({ type: LOADING_LOGIN });
      const response = await clientAxios.post("/auth/login", data);
      console.log(response.data);
      dispatch({
        type: SUCCESS_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_LOGIN,
        payload: { message: "El usuario no esta registrado" },
      });
    }
  };

  const getAuthUser = async () => {
    const token = localStorage.getItem("token");
    authToken(token);
    try {
      dispatch({ type: AUTH_USER_LOADING });
      const response = clientAxios.get("/auth/renew");
      dispatch({
        type: AUTH_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_USER_ERROR,
        payload: { message: "El usuario no esta autenticado" },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        loading: state.loading,
        login,
        getAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
