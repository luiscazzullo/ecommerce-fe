import { ERROR_LOGIN, SUCCESS_LOGIN } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SUCCESS_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        user: action.payload.user,
        loading: false,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
