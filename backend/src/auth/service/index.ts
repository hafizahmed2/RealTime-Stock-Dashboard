import { JWT_SECRET_KEY } from "../../constants/environment.variables";
import { CreateUserDto } from "../../user/dto/create.user";
import { UserDto } from "../../user/dto/user";
import { UsersRepo, UsersRepository } from "../../user/repository";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../jwt";
import { ApiResponse } from "../../common/types/response";

export class AuthService {
  protected usersRepo: UsersRepository;
  constructor(usersRepo: UsersRepository) {
    this.usersRepo = usersRepo;
  }

  async login(data: UserDto): Promise<ApiResponse<string>> {
    const user = await this.usersRepo.findByEmail(data.email);
    if (user.length == 0)
      return { success: false, error: "Email does not exist" };

    const match = await bcrypt.compare(data.password, user[0].password);

    if (!match) return { success: false, error: "Invalid Credentials" };

    return { success: true, data: generateAccessToken(data.email) };
  }

  async register(data: CreateUserDto): Promise<ApiResponse<string>> {
    const user = await this.usersRepo.findByEmail(data.email);
    if (user.length) return { success: false, error: "User already exists" };

    await this.usersRepo.create({
      ...data,
      password: await bcrypt.hash(
        data.password,
        `$2b$10$K6HMRzRtuJwUnF8cCvMt8e`
      ),
    });
    return { success: true, data: generateAccessToken(data.email) };
  }
}

export const authService = new AuthService(UsersRepo);
