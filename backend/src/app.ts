import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import UserRouter from "./user/routes";
import AuthRouter from "./auth/routes";
import WatchlistRouter from "./watchlist/routes/watchlist.routes";
import StockRouter from "./stocks/routes";

import { errorHandler } from "./middlewares/error.handler";
import { notFound } from "./middlewares/not.found";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/users", UserRouter);
app.use("/api/watchlist", WatchlistRouter);
app.use("/api/stocks", StockRouter);
app.use("/auth", AuthRouter);


app.use(notFound);
app.use(errorHandler);

export default app;
