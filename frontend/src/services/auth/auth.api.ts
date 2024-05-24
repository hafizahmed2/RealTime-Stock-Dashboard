import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ApiResponse } from "../services.types";
import { LoginRequest } from "./auth.types";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.query<ApiResponse<string>, LoginRequest>({
      query: (data) => {
        return { url: "auth/login", method: "POST", body: data };
      },
    }),
    register: builder.query<ApiResponse<string>, LoginRequest>({
      query: (data) => {
        return { url: "auth/register", method: "POST", body: data };
      },
    }),
  }),
});

export const { useLazyLoginQuery, useLazyRegisterQuery } = authApi;
