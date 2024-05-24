import Joi from "joi";


export interface CreateUserDto {
  email: string;
  password: string;
}

export const CreateUserDtoSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
