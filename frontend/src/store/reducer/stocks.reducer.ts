import { createSlice } from "@reduxjs/toolkit";
import { StockPriceResponse } from "../../services/stocks/stocks.types";

export interface CounterState {
  stocks: StockPriceResponse[];
}

const initialState: CounterState = {
  stocks: [],
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    updateStock: (state, payload) => {
      state.stocks = payload.payload;
    },
  },
});

export const { updateStock } = stocksSlice.actions;

export default stocksSlice.reducer;
