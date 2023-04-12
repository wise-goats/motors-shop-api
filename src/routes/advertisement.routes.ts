import { Router } from "express";
import {
  createToAdvertisementController,
  deletionToAdvertisementController,
  updateAdvertisementController,
} from "../controllers/advertisement.controllers";
import dataVerificationMiddleware from "../middlewares/dataVerification.middlewares";
import { advertisementSerializer } from "../serializers/advertisement.serializers";

const advertisementRoutes = Router();

advertisementRoutes.post(
  "/",
  dataVerificationMiddleware(advertisementSerializer),
  createToAdvertisementController
);

advertisementRoutes.delete("/:id", deletionToAdvertisementController);
advertisementRoutes.patch("/:id", updateAdvertisementController);

export default advertisementRoutes;
