import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ApiResponse } from "../services.types";
import { AddWatchlistRequest, WatchList } from "./watchlist.types";

// Define a service using a base URL and expected endpoints
export const watchlistApi = createApi({
  reducerPath: "watchlistApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getUserWatchlist: builder.query<ApiResponse<WatchList[]>, void>({
      query: (data) => {
        return { url: "watchlist/", method: "GET", body: data };
      },
    }),
    addToWatchList: builder.query<ApiResponse<string>, AddWatchlistRequest>({
      query: (data) => {
        return { url: "watchlist/", method: "PUT", body: data };
      },
    }),
    removeFromWatchList: builder.query<
      ApiResponse<string>,
      AddWatchlistRequest
    >({
      query: (data) => {
        return { url: "watchlist/", method: "DELETE", body: data };
      },
    }),
  }),
});

export const {
  useLazyAddToWatchListQuery,
  useLazyRemoveFromWatchListQuery,
  useLazyGetUserWatchlistQuery,
} = watchlistApi;
