import { CreateUserDto } from "../dto/create.user";
import { UsersRepo, UsersRepository } from "../repository";

class UserController {
  protected userRepo: UsersRepository;
  constructor(repo: UsersRepository) {
    this.userRepo = repo;
  }

  async create(user: CreateUserDto): Promise<void> {
    this.userRepo.create(user);
  }
}

export const userController = new UserController(UsersRepo);
