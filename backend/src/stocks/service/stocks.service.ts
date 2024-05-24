import { StocksRepository, stocksRepo } from "../repository/stocks.repository";
import { StockEntityType } from "../types/StockEntityType";
import { StockPriceResponse } from "../types/StockPrice";

export class StockService {
  protected stocksRepo: StocksRepository;
  public stocks: StockEntityType[] = [];
  constructor(usersRepo: StocksRepository) {
    this.stocksRepo = usersRepo;
  }

  async getStocks(): Promise<StockEntityType[]> {
    if (this.stocks.length > 0) return this.stocks;
    const data = await this.stocksRepo.findAll();
    this.stocks = data;

    return this.stocks;
  }

  async fetchStockPrices(): Promise<StockPriceResponse[]> {
    const stocks = await this.getStocks();
    return stocks.map((item) => {
      return {
        price: Math.random() * 100,
        symbol: item.symbol,
        stockId: item.id!,
      } as StockPriceResponse;
    });
  }
}

export const stockService = new StockService(stocksRepo);
