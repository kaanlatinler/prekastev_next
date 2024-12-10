import axios from "axios";

const baseURL = "https://kaanlatinler.com/api/";

const api = axios.create({
  baseURL,
});

export default api;
