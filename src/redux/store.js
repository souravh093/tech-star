import { configureStore } from "@reduxjs/toolkit";
import userApi from "./features/user/userApi";
import baseApi from "./baseApi";

export const store = configureStore({
  reducer: {
    userApi: userApi,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
