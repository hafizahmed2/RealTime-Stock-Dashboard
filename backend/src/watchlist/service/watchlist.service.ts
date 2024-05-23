import { ApiResponse } from "../../common/types/response";
import { WatchlistRepository, watchlistRepo } from "../repository/watchlist.repository";

export class WatchListService {
  protected watchlistRepo: WatchlistRepository;

  constructor(watchlistRepo: WatchlistRepository) {
    this.watchlistRepo = watchlistRepo;
  }

  async add(userId: number, stockId: number): Promise<void> {
    await this.watchlistRepo.create({ user_id: userId, stock_id: stockId });
  }

  async remove(userId: number, stockId: number): Promise<void> {
    await this.watchlistRepo.deleteBySymbol(userId, stockId);
  }
}

export const watchlistService = new WatchListService(watchlistRepo);
