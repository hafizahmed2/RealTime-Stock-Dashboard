import React from "react";
import { Box, CssBaseline } from "@mui/material";
import StockList from "../StockList/StockList";
import { useAppSelector } from "../../store/hooks";

function App() {
  const { stocks } = useAppSelector((selector) => selector.stocksStore);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <StockList stocks={stocks} />
      </Box>
    </Box>
  );
}

export default App;
