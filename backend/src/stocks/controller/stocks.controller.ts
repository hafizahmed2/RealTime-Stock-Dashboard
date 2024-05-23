import { StockService, stockService } from "../service";
import { StockEntityType } from "../types/StockEntityType";

class StockController {
  protected stockService: StockService;
  constructor(repo: StockService) {
    this.stockService = repo;
  }

  async getStocks(): Promise<StockEntityType[]> {
    return await this.stockService.getStocks();
  }
}

export const stockController = new StockController(stockService);
