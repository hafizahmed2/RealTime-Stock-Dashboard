import { JWT_SECRET_KEY } from "../constants/environment.variables";
import jwt from "jsonwebtoken";
import { isError } from "../utils/type.guards";
import { UserDto } from "../user/dto/user";

export function generateAccessToken(id: number, email: string) {
  const payload = {
    email,
    id,
  };

  const secret = JWT_SECRET_KEY;
  const options = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
}

export function verifyAccessToken(token: string) {
  const secret = JWT_SECRET_KEY;

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    if (isError(error)) return { success: false, error: error.message };

    return { success: false, error: error };
  }
}
