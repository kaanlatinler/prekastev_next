import axios from "axios";

const baseURL = "https://www.kaanlatinler.online/api";

const api = axios.create({
  baseURL,
});

export default api;
