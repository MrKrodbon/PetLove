import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

interface FormData {
  name?: string;
  email: string;
  password: string;
}

export const register = createAsyncThunk(
  "auth/register",
  async (formData: FormData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/users/signup", formData);
      const token = data.token;

      localStorage.setItem("token", token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData: FormData, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post("/users/signin", formData);
      const token = data.token;
      localStorage.setItem("token", token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    localStorage.removeItem("token");
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return thunkAPI.rejectWithValue(
        "Unable to refresh user. Not valid or empty token"
      );
    }

    try {
      const { data } = await axiosInstance.get("users/current");
      return data;
    } catch (error) {
      localStorage.removeItem("token");
      return thunkAPI.rejectWithValue(error);
    }
  }
);
