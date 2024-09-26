import axios from "axios";

const baseURL = "https://prekastev-api.onrender.com/api";

const api = axios.create({
  baseURL,
});

export default api;
