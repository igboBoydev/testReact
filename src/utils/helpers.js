import jwt from "jwt-decode";

export const decodeJwt = () => {
  const token = sessionStorage.getItem("token");
  const data = jwt(token);

  return Date.now() < Date.parse(data);
};
