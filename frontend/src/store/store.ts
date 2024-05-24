import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/auth/auth.api";
import { stocksApi } from "../services/stocks/stocks.api";
import { watchlistApi } from "../services/watchlist/watchlist.api";
import stocksReducer from "./reducer/stocks.reducer";

export const store = configureStore({
  reducer: {
    stocksStore: stocksReducer,
    [authApi.reducerPath]: authApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
    [watchlistApi.reducerPath]: watchlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(stocksApi.middleware)
      .concat(watchlistApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
