import "express-async-errors";
import express, { Application } from "express";
import handleErrors from "./errors/handlerErrors";
import advertisementRoutes from "./routes/advertisement.routes";
import loginRouts from "./routes/login.routes";

const app: Application = express();

app.use(express.json());

app.use("/advertisement", advertisementRoutes);
app.use("/login", loginRouts);

app.use(handleErrors);
export default app;
