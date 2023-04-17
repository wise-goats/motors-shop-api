import { Router } from "express";
import { loginContrller } from "../controllers/login.controller";
import dataVerificationByZodMiddleware from "../middlewares/dataVerification.middlewares";
import { loginSerializer } from "../serializers/login.serializers";

const loginRouts = Router();

loginRouts.post(
  "",
  dataVerificationByZodMiddleware(loginSerializer),
  loginContrller
);

export default loginRouts;
