import "express-async-errors";
import express, { Application } from "express";
import handleErrors from "./errors/handlerErrors";
import advertisementRoutes from "./routes/advertisement.routes";
import loginRouts from "./routes/login.routes";
import userRoutes from "./routes/users.routes";

const app: Application = express();

app.use(express.json());

app.use("/advertisement", advertisementRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRouts);

app.use(handleErrors);
export default app;
