import express, { Request, Response, Router } from "express";
import { stockController } from "../controller/stocks.controller";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const response = stockController.getStocks();
  
});

export default router;
