import axios from "axios";

// Create a default axios instance
const axiosInstance = axios.create({
  baseURL: "https://payroll-backend-phi.vercel.app/", // Replace with your API base URL
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json", // Default content type
  },
  withCredentials: true,
});

export default axiosInstance;
