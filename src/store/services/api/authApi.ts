// src/store/api/endpoints/authApi.ts

import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      {
        data: { token: any; user: any; }; token: string; user: any 
},
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    signup: builder.mutation<
      { user: any },
      { email: string; password: string; first_name: string; last_name: string }
    >({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),

    verifyOtp: builder.mutation<{ success: boolean }, { email: string; otp: string }>({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    resendOtp: builder.mutation<{ success: boolean }, { email: string }>({
      query: (data) => ({
        url: "/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    getCurrentUser: builder.query<any, void>({
      query: () => "/me",
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useVerifyOtpMutation, useResendOtpMutation, useGetCurrentUserQuery } = authApi;
