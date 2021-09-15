import clientAxios from "./clientAxios";

const authToken = async (token) => {
  return token
    ? (clientAxios.defaults.headers.common["x-token"] = token)
    : clientAxios.defaults.headers.common["x-token"];
};

export default authToken;
