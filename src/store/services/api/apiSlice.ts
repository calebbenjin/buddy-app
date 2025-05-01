// src/store/api/apiSlice.ts
import { RootState } from "@/store/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "api", // optional custom key
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fe-test.revvex.io/api/admin", // 🔁 update with your real base URL
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Message", "Post"], // 🏷️ optional cache tags
  endpoints: () => ({}), // We'll inject endpoints later
});
