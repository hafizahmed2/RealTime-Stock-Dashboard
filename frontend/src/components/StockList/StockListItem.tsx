import { FC } from "react";
import { StockPriceResponse } from "../../services/stocks/stocks.types";
import { Button, ListItem, ListItemText } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { useWatchlist } from "../../context/WatchlistContext";

const StockListItem: FC<StockPriceResponse> = ({ symbol, price, stockId }) => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  const { watchlist, removeFromWatch, addToWatch } = useWatchlist();

  console.log(watchlist);

  let watchlistButton;

  if (!accessToken)
    watchlistButton = (
      <Button onClick={() => navigate("/login")}>Add to WatchList</Button>
    );
  else if (watchlist.includes(stockId))
    watchlistButton = (
      <Button onClick={() => removeFromWatch({ stockId })}>
        Remove from Watchlist
      </Button>
    );
  else
    watchlistButton = (
      <Button onClick={() => addToWatch({ stockId })}>Add to WatchList</Button>
    );

  return (
    <ListItem
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <ListItemText style={{ width: "50%" }} primary={symbol} />
      <ListItemText style={{ width: "50%" }} primary={price.toFixed(2)} />
      <ListItemText style={{ width: "50%" }}>
        {watchlistButton ?? <></>}
      </ListItemText>
    </ListItem>
  );
};

export default StockListItem;
