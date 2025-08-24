import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api", // URL backend của bạn
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để gắn token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý response
// axiosClient.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("userId");
//       window.location.href = "/";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosClient;