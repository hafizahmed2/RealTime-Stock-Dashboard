import { CreateUserDto } from "../dto/create.user";
import { UserService, userService } from "../service/user.service";

class UserController {
  protected userService: UserService;
  constructor(repo: UserService) {
    this.userService = repo;
  }

  async create(user: CreateUserDto): Promise<void> {
    this.userService.create(user);
  }
}

export const userController = new UserController(userService);
