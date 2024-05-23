import WebSocket from "ws";
import { stockService } from "./stocks/service";
let wss = new WebSocket.Server({ port: 8080 });

async function sendStockPrices() {
  const stockPrices = await stockService.fetchStockPrices();
  console.log(stockPrices);
  const data = JSON.stringify(stockPrices);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

setInterval(sendStockPrices, 10000);
