import axios from "axios";

const ApiRequest = axios.create({
  baseURL: "https://quizu-backend-1.onrender.com/api/v1",
  withCredentials: true,
});

export default ApiRequest;
