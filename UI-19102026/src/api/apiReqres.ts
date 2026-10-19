import axios from "axios";

const apiReqres = axios.create({
  baseURL: import.meta.env.VITE_REQRES_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
    "X-Reqres-Env": "prod",
  },
});

export default apiReqres;