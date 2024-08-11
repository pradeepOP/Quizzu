import axios from "axios";
import { toast } from "react-toastify";

const ApiRequest = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to handle responses
ApiRequest.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("Network Error Details:", error);

    const originalRequest = error.config;

    if (error.response && error.response.status === 429) {
      toast.error("Too many requests. Please try again later.");
      return Promise.reject(error);
    }
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
          throw new Error("No refresh token available.");
        }

        const refreshToken = JSON.parse(storedToken);

        const res = await axios.post(
          "http://localhost:4000/api/v1/user/refresh-token",
          { refreshToken },
          {
            withCredentials: true,
          }
        );

        if (res.status === 200) {
          const newToken = res.data.token;
          localStorage.setItem("token", JSON.stringify(newToken));

          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

          return ApiRequest(originalRequest);
        }
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        toast.error("Session expired. Please log in again.");
      }
    }

    // Handle other errors (like network issues)
    if (error.code === "ERR_NETWORK") {
      toast.error("Too many requests. Please try again later in 1 minutes.");
    }

    return Promise.reject(error);
  }
);

export default ApiRequest;
