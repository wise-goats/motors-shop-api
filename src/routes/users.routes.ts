import { verifyTokenMiddleware } from "./../middlewares/verifyToken.middleware";
import { Router } from "express";
import {
  createNewUserController,
  deleteUserController,
  resetPasswordController,
  sendPasswordTokenController,
  updateDataUserAddressController,
  updateDataUserController,
} from "../controllers/users.controllers";
import {
  IUpdateAddressRequestSerializer,
  IUpdateUserRequestSerializer,
  newUserRequestSerializer,
} from "../serializers/users.serializers";
import dataVerificationByZodMiddleware from "../middlewares/dataVerification.middlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  dataVerificationByZodMiddleware(newUserRequestSerializer),
  createNewUserController
);

userRoutes.post("/resetpassword", sendPasswordTokenController);
userRoutes.post("/validatetoken/:token", resetPasswordController);

userRoutes.patch(
  "",
  verifyTokenMiddleware,
  dataVerificationByZodMiddleware(IUpdateUserRequestSerializer),
  updateDataUserController
);

userRoutes.patch(
  "/address",
  verifyTokenMiddleware,
  dataVerificationByZodMiddleware(IUpdateAddressRequestSerializer),
  updateDataUserAddressController
);

userRoutes.delete("", verifyTokenMiddleware, deleteUserController);
export default userRoutes;
