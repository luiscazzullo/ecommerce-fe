import { SUCCESS_LOGIN, LOADING_LOGIN, ERROR_LOGIN } from "../types";

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
    default:
      return state;
  }
};
