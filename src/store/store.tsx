// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./services/auth/authSlice";
import { apiSlice } from "./services/api/apiSlice";
import sidebarReducer from "./slices/sidebarSlice";


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
