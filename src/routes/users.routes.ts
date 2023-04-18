import { verifyTokenMiddleware } from "./../middlewares/verifyToken.middleware";
import { Router } from "express";
import {
  createNewUserController,
  deleteUserController,
} from "../controllers/users.controllers";
import { newUserRequestSerializer } from "../serializers/users.serializers";
import dataVerificationByZodMiddleware from "../middlewares/dataVerification.middlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  dataVerificationByZodMiddleware(newUserRequestSerializer),
  createNewUserController
);

userRoutes.delete("", verifyTokenMiddleware, deleteUserController);
export default userRoutes;
