import express, { Request, Response, Router } from "express";
import JoiValidator from "express-joi-validation";
import { CreateUserDtoSchema } from "../../user/dto/create.user";
import { userController } from "../controller/auth.controller";

const validator = JoiValidator.createValidator({});

const router: Router = express.Router();

router.post(
  "/login",
  validator.body(CreateUserDtoSchema),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const response = await userController.login({ email, password });
    res.json(response);
  }
);

router.post(
  "/register",
  validator.body(CreateUserDtoSchema),
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const response = await userController.register({ email, password });
    res.json(response);
  }
);

export default router;
