import { Router } from "express";
import { loginContrller } from "../controllers/login.controller";

const loginRouts = Router();

loginRouts.post("", loginContrller);

export default loginRouts;
