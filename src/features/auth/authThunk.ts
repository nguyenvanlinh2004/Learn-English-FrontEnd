import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Đăng nhập thất bại");
    }
  }
);