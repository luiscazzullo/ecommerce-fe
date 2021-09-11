import { useReducer } from "react";
import AuthContext from "../context/authContext";
import AuthReducer from "./authReducer";
import clientAxios from "../config/clientAxios";
import { SUCCESS_LOGIN, LOADING_LOGIN, ERROR_LOGIN } from "../types";

const AuthState = ({ children }) => {
  const INITIAL_STATE = {
    token: localStorage.getItem("token") || null,
    auth: false,
    user: null,
    message: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const login = async (data) => {
    try {
      dispatch({ type: LOADING_LOGIN });
      const response = await clientAxios.post("/auth/login", data);
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

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        message: state.message,
        loading: state.loading,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
