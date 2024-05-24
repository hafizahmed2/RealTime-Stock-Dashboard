import { ApiResponse } from "../../common/types/response";
import { AddWatchlistDto } from "../dto/add.watchlist";
import { RemoveWatchlistDto } from "../dto/remove.watch";
import {
  WatchListService,
  watchlistService,
} from "../service/watchlist.service";
import { WatchlistEntityType } from "../types/WatchlistEntityType";

class WatchlistController {
  protected watchlistService: WatchListService;
  constructor(repo: WatchListService) {
    this.watchlistService = repo;
  }

  async addToWatchList(
    data: AddWatchlistDto,
    userId: number
  ): Promise<ApiResponse<string>> {
    return await this.watchlistService.add(userId, data.stockId);
  }

  async removeFromWatchList(
    data: RemoveWatchlistDto,
    userId: number
  ): Promise<ApiResponse<string>> {
    return await this.watchlistService.remove(userId, data.stockId);
  }

  async findAllByUserId(
    userId: number
  ): Promise<ApiResponse<WatchlistEntityType[]>> {
    return {
      success: true,
      data: await this.watchlistService.findAllByUserId(userId),
    };
  }
}

export const watchlistController = new WatchlistController(watchlistService);
