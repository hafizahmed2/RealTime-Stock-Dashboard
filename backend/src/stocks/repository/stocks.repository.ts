import { BaseRepository } from "../../database/repository/base.repository";
import { StockEntityName } from "../contants";
import { StockEntityType } from "../types/StockEntityType";

export class StocksRepository extends BaseRepository<StockEntityType> {}

export const stocksRepo = new StocksRepository(StockEntityName);
