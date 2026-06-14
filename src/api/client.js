import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 30000,
});

export const uploadPDF = async (formData) => {
  const response = await apiClient.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const askQuestion = async (question) => {
  const response = await apiClient.post("/ask", { question });
  return response.data;
};

export default apiClient;
