import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { listUserAddressController } from "../controllers/users.controllers";

const addressRoutes = Router();
addressRoutes.get("/", verifyTokenMiddleware, listUserAddressController);
export default addressRoutes;
