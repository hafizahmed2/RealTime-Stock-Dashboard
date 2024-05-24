import { CreateUserDto, CreateUserDtoSchema } from "./create.user";

export interface UserDto extends CreateUserDto {}

export const UserDtoSchema = CreateUserDtoSchema;
