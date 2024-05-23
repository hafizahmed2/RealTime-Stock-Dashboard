import { QueryTypes } from "sequelize";
import sequelize from "../../database";
import { BaseRepository } from "../../database/repository/base.repository";
import { WatchlistEntityName } from "../constants";
import { WatchlistEntityType } from "../types/WatchlistEntityType";

export class WatchlistRepository extends BaseRepository<WatchlistEntityType> {
  async deleteBySymbol(
    userId: number,
    stockId: number
  ): Promise<WatchlistEntityType[]> {
    return await sequelize.query<WatchlistEntityType>(
      `delete from ${this.tableName} where user_id = ${userId} AND stock_id = ${stockId}`,
      {
        raw: true,
        type: QueryTypes.SELECT,
        logging: true,
      }
    );
  }

  async findAllByUserId(
    userId: number,
    columns?: string[]
  ): Promise<WatchlistEntityType[]> {
    return await sequelize.query<WatchlistEntityType>(
      `select ${this.selectColumnNamesGenerator(columns)} from ${
        this.tableName
      } where user_id = '${userId}'`,
      {
        raw: true,
        type: QueryTypes.SELECT,
        logging: true,
      }
    );
  }
}

export const watchlistRepo = new WatchlistRepository(WatchlistEntityName);
