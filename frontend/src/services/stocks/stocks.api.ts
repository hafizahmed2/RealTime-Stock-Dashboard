import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../base.query";
import { ApiResponse } from "../services.types";
import { StockPriceResponse } from "./stocks.types";

// Define a service using a base URL and expected endpoints
export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    fetchStocks: builder.query<ApiResponse<StockPriceResponse>, void>({
      query: (data) => {
        return { url: "stocks/", method: "POST", body: data };
      },
    }),
  }),
});

export const { useFetchStocksQuery } = stocksApi;
