import { QueryTypes } from "sequelize";
import sequelize from "../../database";
import { BaseRepository } from "../../database/repository/base.repository";
import { UsersEntityName } from "../constants";
import { UserEntityType } from "../types/UsersEntityType";

export class UsersRepository extends BaseRepository<UserEntityType> {
  async findByEmail(
    email: string,
    columns?: string[]
  ): Promise<UserEntityType[]> {
    return await sequelize.query<UserEntityType>(
      `select ${this.selectColumnNamesGenerator(columns)} from ${
        this.tableName
      } where email = '${email.toLowerCase()}'`,
      {
        raw: true,
        type: QueryTypes.SELECT,
      }
    );
  }
}

export const UsersRepo = new UsersRepository(UsersEntityName);
