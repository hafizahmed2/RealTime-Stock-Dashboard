import React, { FC } from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { StockPriceResponse } from "../../services/stocks/stocks.types";
import StockListItem from "./StockListItem";

interface StockListPropsType {
  stocks: StockPriceResponse[];
}

const StockList: FC<StockListPropsType> = ({ stocks }) => {
  return (
    <List>
      <ListItem
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}
      >
        <ListItemText style={{ width: "50%" }} primary="Symbol" />
        <ListItemText style={{ width: "50%" }} primary="Price" />
        {<ListItemText style={{ width: "50%" }} primary="Watchlist" />}
      </ListItem>
      <Divider />
      {stocks.map((data, index) => (
        <div key={data.stockId}>
          <StockListItem {...data} />
        </div>
      ))}
    </List>
  );
};

export default StockList;
