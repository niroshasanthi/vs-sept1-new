import axios from "axios";

const API_BASE_URL = "http://localhost:8083/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // send cookies (JWT) with requests
  headers: { "Content-Type": "application/json" }
});

export default apiClient;

// Child login API call
export const loginChild = (credentials) => {
  return axios.post(`${API_BASE_URL}/children/login`, credentials, {
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
  });
};
