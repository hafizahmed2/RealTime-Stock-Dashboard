import { BaseRepository } from "../../database/repository/base.repository";
import { UsersEntityName } from "../constants";
import { UserEntityType } from "../types/UsersEntityType";

export class UsersRepository extends BaseRepository<UserEntityType> {}

export const UsersRepo = new UsersRepository(UsersEntityName);
