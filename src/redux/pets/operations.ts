import axiosInstance from "@/api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPets = createAsyncThunk(
  "pets/getNews",
  async (params: { page?: number; perPage?: number }, thunkAPI) => {
    try {
      const { page = 1, perPage = 2 } = params;
      const { data } = await axiosInstance.get("/notices", {
        params: { page, perPage },
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
