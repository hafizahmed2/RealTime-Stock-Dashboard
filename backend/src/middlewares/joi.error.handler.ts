import { NextFunction, Request, Response } from "express";
import joi from "joi";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function joiErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  if (err && joi.isError(err)) {
    res.status(400).json({
      message: err.message,
    });
  } else {
    // pass on to another error handler
    next(err);
  }
}
