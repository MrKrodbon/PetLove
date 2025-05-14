import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// axios.defaults.baseURL = "https://petlove.b.goit.study/api";

// export const getNews = createAsyncThunk(
//   "/news/getNews",
//   async (
//     params: { page?: number; search?: string; limit?: number },
//     thunkAPI
//   ) => {
//     try {
//       const { page = 1, search = "", limit = 10 } = params;
//       const { data } = await axios.get("/news", {
//         params: { page, search, limit },
//       });

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const api = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://petlove.b.goit.study/api" }),
  endpoints: (build) => ({
    getNews: build.query({
      query: ({ page = 1, search = "", limit = 10 }) => ({
        url: "/news",
        params: { page, search, limit },
      }),
    }),
    getFriends: build.query({
      query: () => "/friends",
    }),
  }),
});

export const { useGetNewsQuery, useGetFriendsQuery } = api;
