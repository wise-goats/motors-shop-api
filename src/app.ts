import "express-async-errors";
import express, { Application } from "express";
import handleErrors from "./errors/handlerErrors";
import advertisementRoutes from "./routes/advertsement.route";

const app: Application = express();

app.use(express.json());
app.use("/advertsemen", advertisementRoutes);
app.use(handleErrors);

export default app;
