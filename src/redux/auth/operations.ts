import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const axiosHeaders = axios.defaults.headers.common;

interface FormData {
  name?: string;
  email: string;
  password: string;
}

export const setToken = (token: string) => {
  axiosHeaders.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axiosHeaders.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (formData: FormData, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", formData);
      console.log("data>>", data);

      setToken(data.token);
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
      const { data } = await axios.post("/users/signin", formData);
      setToken(data.token);
      console.log("data", data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/signout");
    clearToken();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue(
        "Unable to refresh user. Not valid or empty token"
      );
    }

    try {
      setToken(persistToken);
      const { data } = await axios.get("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
