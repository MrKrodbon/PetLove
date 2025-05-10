import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const getNews = createAsyncThunk(
  "/news/getNews",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/news");
      console.log("newsData", data.results);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
