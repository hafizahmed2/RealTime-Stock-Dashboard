import { UsersRepo, UsersRepository } from "../repository/user.repository";
import { CreateUserDto } from "../dto/create.user";

export class UserService {
  protected usersRepo: UsersRepository;
  constructor(usersRepo: UsersRepository) {
    this.usersRepo = usersRepo;
  }

  async create(data: CreateUserDto) {
    return this.usersRepo.create(data);
  }
}

export const userService = new UserService(UsersRepo);
