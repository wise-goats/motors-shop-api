import "express-async-errors";
import express, { Application } from "express";
import handleErrors from "./errors/handlerErrors";
import advertisementRoutes from "./routes/advertisement.routes";
import loginRouts from "./routes/login.routes";
import userRoutes from "./routes/users.routes";
import profileRoutes from "./routes/profile.routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(cors());

app.use("/advertisement", advertisementRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRouts);
app.use("/profile", profileRoutes);

app.use(handleErrors);
export default app;
