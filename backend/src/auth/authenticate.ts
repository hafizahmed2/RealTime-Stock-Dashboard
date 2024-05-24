import { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "./jwt";
import { UserEntityType } from "../user/types/UsersEntityType";

export function AuthGuard(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  const result = verifyAccessToken(token);

  if (!result.success) {
    return res.status(403).json({ error: result.error });
  }

  const { email, id } = result.data as { email: string; id: number };
  req.user = { email, id };
  next();
}
