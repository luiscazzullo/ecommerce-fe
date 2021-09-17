import {
  AUTH_USER_ERROR,
  AUTH_USER_LOADING,
  AUTH_USER_SUCCESS,
  ERROR_LOGIN,
  SUCCESS_LOGIN,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        token: localStorage.getItem("token"),
        auth: true,
        loading: false,
        user: action.payload.user,
      };
    case SUCCESS_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
      };
    case AUTH_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ERROR_LOGIN:
    case AUTH_USER_ERROR:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
