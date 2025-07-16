import axiosInstance from "@/api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPets = createAsyncThunk(
  "pets/getPets",
  async (
    params: {
      page?: number;
      perPage?: number;
      keyword?: string;
      category?: string;
      species?: string;
      locationId?: string;
      byDate?: boolean;
      byPrice?: boolean;
      byPopularity?: boolean;
      limit?: number;
      sex?: string;
    },
    thunkAPI
  ) => {
    try {
      const defaultParams = {
        page: params.page ?? 1,
        perPage: params.perPage ?? 2,
      };
      const { data } = await axiosInstance.get("/notices", {
        params: { defaultParams, ...params },
      });
      console.log(data, "!!!!");

      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPetsCategories = createAsyncThunk(
  "pets/getPetsCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/notices/categories");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPetsSex = createAsyncThunk(
  "pets/getPetsSex",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/notices/sex");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getPetsSpecies = createAsyncThunk(
  "pets/getPetsSpecies",
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get("/notices/species");
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUkrainianCities = createAsyncThunk(
  "pets/getUkrainianCities",
  async (params: { keyword?: string }, thunkAPI) => {
    try {
      const { keyword = "Ode" } = params;
      const { data } = await axiosInstance.get("/cities", {
        params: { keyword },
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
