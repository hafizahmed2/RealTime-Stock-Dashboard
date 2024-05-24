export interface AddWatchlistRequest {
  stockId: number;
}

export type RemoveWatchlistRequest = AddWatchlistRequest;

export interface WatchList {
  id: number;
  stock_id: number;
  symbol: string;
}
