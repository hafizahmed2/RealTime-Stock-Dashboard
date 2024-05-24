import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import UserRouter from "./user/routes/user.routes";
import AuthRouter from "./auth/routes/auth.routes";
import WatchlistRouter from "./watchlist/routes/watchlist.routes";
import StockRouter from "./stocks/routes/stocks.routes";

import { errorHandler } from "./middlewares/error.handler";
import { notFound } from "./middlewares/not.found";
import { joiErrorHandler } from "./middlewares/joi.error.handler";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/users", UserRouter);
app.use("/watchlist", WatchlistRouter);
app.use("/stocks", StockRouter);
app.use("/auth", AuthRouter);

app.use(notFound);
app.use(joiErrorHandler);
app.use(errorHandler);

export default app;
