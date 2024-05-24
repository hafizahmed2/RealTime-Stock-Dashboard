import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  useLazyAddToWatchListQuery,
  useLazyGetUserWatchlistQuery,
  useLazyRemoveFromWatchListQuery,
} from "../services/watchlist/watchlist.api";
import {
  AddWatchlistRequest,
  RemoveWatchlistRequest,
} from "../services/watchlist/watchlist.types";
import { toast } from "react-toastify";

interface WatchlistContextType {
  watchlist: number[];
  addToWatch: (data: AddWatchlistRequest) => void;
  removeFromWatch: (data: RemoveWatchlistRequest) => void;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
);

export const WatchlistProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [getWatchList] = useLazyGetUserWatchlistQuery();
  const [removeFromWatchlist] = useLazyRemoveFromWatchListQuery();
  const [addToWatchlist] = useLazyAddToWatchListQuery();

  const updateWatchList = async () => {
    const { data } = await getWatchList();
    if (data?.success) {
      setWatchlist(data.data.map((item) => item.stock_id));
    }
  };

  const addToWatch = async ({ stockId }: AddWatchlistRequest) => {
    const { data, error } = await addToWatchlist({ stockId });
    if (data?.success) {
      toast(data.data);
      updateWatchList();
    } else if (data?.error) {
      toast(data.error);
    } else if (error) {
      toast(error.toString());
    }
  };

  const removeFromWatch = async ({ stockId }: RemoveWatchlistRequest) => {
    const { data, error } = await removeFromWatchlist({ stockId });
    if (data?.success) {
      toast(data.data);
      updateWatchList();
    } else if (data?.error) {
      toast(data.error);
    } else if (error) {
      toast(error.toString());
    }
  };

  useEffect(() => {
    updateWatchList();
  }, []);

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatch, removeFromWatch }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = (): WatchlistContextType => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error("useWatchlist must be used within an WatchlistProvider");
  }
  return context;
};
