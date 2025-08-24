import axiosClient from "./axiosConfig";

const authApi ={
    login: (data: { email: string; password: string }) =>
    axiosClient.post("/auth/login", data),
}
export default authApi;