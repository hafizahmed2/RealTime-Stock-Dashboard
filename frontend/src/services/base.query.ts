import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_API_URL } from "../constants/environment.variables";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  prepareHeaders(headers, api) {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
