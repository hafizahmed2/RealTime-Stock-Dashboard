import express, { Request, Response, Router } from "express";
import { stockController } from "../controller/stocks.controller";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const response = stockController.getStocks();
  res.json(response);
});

export default router;
