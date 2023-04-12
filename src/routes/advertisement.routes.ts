import { Router } from "express";
import {
  createToAdvertisementController,
  deletionToAdvertisementController,
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

export default advertisementRoutes;
