import { StockService, stockService } from "../service/stocks.service";
import { StockEntityType } from "../types/StockEntityType";
import { StockPriceResponse } from "../types/StockPrice";

class StockController {
  protected stockService: StockService;
  constructor(repo: StockService) {
    this.stockService = repo;
  }

  async getStocks(): Promise<StockPriceResponse[]> {
    return await this.stockService.fetchStockPrices();
  }
}

export const stockController = new StockController(stockService);
