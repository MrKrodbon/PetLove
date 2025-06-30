import axiosInstance from "../../api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFriends = createAsyncThunk(
  "/friends/getFriends",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/friends");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
