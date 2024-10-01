import axios from "axios";

const baseURL = "http://localhost:7007/api";

const api = axios.create({
  baseURL,
});

export default api;
