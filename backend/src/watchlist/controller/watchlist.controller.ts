import { ApiResponse } from "../../common/types/response";
import { AddWatchlistDto } from "../dto/add.watchlist";
import { RemoveWatchlistDto } from "../dto/remove.watch";
import {
  WatchListService,
  watchlistService,
} from "../service/watchlist.service";

class WatchlistController {
  protected watchlistService: WatchListService;
  constructor(repo: WatchListService) {
    this.watchlistService = repo;
  }

  async addToWatchList(
    data: AddWatchlistDto,
    userId: number
  ): Promise<ApiResponse<string>> {
    await this.watchlistService.add(userId, data.stockId);
    return { success: true, data: "" };
  }

  async removeFromWatchList(
    data: RemoveWatchlistDto,
    userId: number
  ): Promise<ApiResponse<string>> {
    await this.watchlistService.add(userId, data.stockId);
    return { success: true, data: "" };
  }
}

export const watchlistController = new WatchlistController(watchlistService);
