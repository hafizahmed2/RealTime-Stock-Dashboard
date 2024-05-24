import { ApiResponse } from "../../common/types/response";
import { WatchlistRepository, watchlistRepo } from "../repository/watchlist.repository";
import { WatchlistEntityType } from "../types/WatchlistEntityType";

export class WatchListService {
  protected watchlistRepo: WatchlistRepository;

  constructor(watchlistRepo: WatchlistRepository) {
    this.watchlistRepo = watchlistRepo;
  }

  async add(userId: number, stockId: number): Promise<ApiResponse<string>> {
    const exists = await this.watchlistRepo.findBySymbol(userId, stockId);
    if (exists.length > 0)
      return { success: false, error: "Stock already exists in watchlist" };

    await this.watchlistRepo.create({ user_id: userId, stock_id: stockId });

    return { success: true, data: "Successfully added to watchlist" };
  }

  async remove(userId: number, stockId: number): Promise<ApiResponse<string>> {
    const exists = await this.watchlistRepo.findBySymbol(userId, stockId);
    if (exists.length == 0)
      return { success: false, error: "Stock does not exists in watchlist" };

    await this.watchlistRepo.deleteBySymbol(userId, stockId);
    return { success: true, data: "Successfully removed from watchlist" };
  }

  async findAllByUserId(userId: number): Promise<WatchlistEntityType[]> {
    return await this.watchlistRepo.findAllByUserId(userId);
  }
}

export const watchlistService = new WatchListService(watchlistRepo);
