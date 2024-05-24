import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { WEBSOCKET_SERVER_URL } from "../constants/environment.variables";
import { updateStock } from "../store/reducer/stocks.reducer";
import { useDispatch } from "react-redux";

interface StockContextType {}

const StockContext = createContext<StockContextType | undefined>(undefined);

export const StockProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(WEBSOCKET_SERVER_URL); // Replace with your WebSocket URL

    // Set up event listeners
    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      dispatch(updateStock(JSON.parse(event.data)));
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (
        socket.readyState === WebSocket.OPEN ||
        socket.readyState === WebSocket.CONNECTING
      ) {
        socket.close();
      }
    };
  }, []);

  return <StockContext.Provider value={{}}>{children}</StockContext.Provider>;
};

export const useStocks = (): StockContextType => {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
