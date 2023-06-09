import axios from "./axios";
import { BASE_URL } from "./constant";
import { flashMessage } from "../utils/flash";
const token = sessionStorage.getItem("token");

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
});

// Log user out if token expire
const onResponse = (response) => {
  return response;
};

const onResponseError = (error) => {
  // detect the current HTTP status code
  const statusCode = error?.response?.status;
  // 401 means unAuthorized
  if (statusCode === 401) {
    // reset state
    flashMessage("error", "Your session has expired");
    setTimeout(() => {
      // window.location.reload()
      // useNavigate('/login')
      window.location.href = "/login";
    }, 500);
    return;
  }
  return Promise.reject(error);
};

axiosPrivate.interceptors.response.use(onResponse, onResponseError);

// Set deaults headers
axiosPrivate.interceptors.request.use((config) => {
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  config.headers["Content-Type"] = "application/json";
  config.headers["signatures"] = "oihcoiwcdbcwcuqdqwiudhduhubw";

  return config;
});

export default axiosPrivate;
