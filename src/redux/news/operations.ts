import axiosInstance from "../../api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "/news/getNews",
  async (
    params: { page?: number; search?: string; limit?: number },
    thunkAPI
  ) => {
    try {
      const { page = 1, search = "", limit = 10 } = params;
      const { data } = await axiosInstance.get("/news", {
        params: { page, search, limit },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
