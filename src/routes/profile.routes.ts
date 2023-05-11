import { Router } from "express";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import showProfileController from "../controllers/profile.controller";

const profileRoutes = Router();

profileRoutes.get("/", verifyTokenMiddleware, showProfileController);

export default profileRoutes;
