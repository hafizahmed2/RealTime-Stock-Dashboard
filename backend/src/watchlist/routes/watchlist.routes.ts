import express, { Request, Response, Router } from "express";
import JoiValidator from "express-joi-validation";
import { AuthGuard } from "../../auth/authenticate";
import { AddWatchListDtoSchema } from "../dto/add.watchlist";
import { RemoveWatchlistDto } from "../dto/remove.watch";
import { watchlistController } from "../controller/watchlist.controller";

const validator = JoiValidator.createValidator({});

const router: Router = express.Router();

// router.use(AuthGuard);

router.put(
  "/",
  validator.body(AddWatchListDtoSchema),
  async (req: Request, res: Response) => {
    const { stockId } = req.body;
    const response = await watchlistController.addToWatchList({ stockId }, 1);
    res.json(response);
  }
);

router.delete(
  "/",
  validator.body(RemoveWatchlistDto),
  async (req: Request, res: Response) => {
    const { stockId } = req.body;
    const response = await watchlistController.removeFromWatchList(
      { stockId },
      1
    );
    res.json(response);
  }
);

export default router;
