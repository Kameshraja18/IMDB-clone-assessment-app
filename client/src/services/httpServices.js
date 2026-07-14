import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_APP_API_URL || "http://localhost:3000/api";

const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 500000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  };
});
const responseBody = (response) => response.data;

const requests = {
  get: (url, body) => instance.get(url, body).then(responseBody),
  post: (url, body) => instance.post(url, body).then(responseBody),
  put: (url, body) => instance.put(url, body).then(responseBody),
  delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default requests;
