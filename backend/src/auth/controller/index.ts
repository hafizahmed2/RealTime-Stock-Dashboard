import { ApiResponse } from "../../common/types/response";
import { CreateUserDto } from "../../user/dto/create.user";
import { UserDto } from "../../user/dto/user";
import { AuthService, authService } from "../service";

class AuthController {
  protected authService: AuthService;
  constructor(service: AuthService) {
    this.authService = service;
  }

  async login(user: UserDto): Promise<ApiResponse<string>> {
    return this.authService.login(user);
  }

  async register(user: CreateUserDto): Promise<ApiResponse<string>> {
    return this.authService.register(user);
  }
}

export const userController = new AuthController(authService);
