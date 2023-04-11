import { Router } from "express";
import { createToAdvertisementController, deletionToAdvertisementController } from "../controllers/advertisement.controllers";
import dataVerificationByZodMiddleware from "../middlewares/dataVerificationByYup.middlewares";
import { advertisementCreateSerializer } from "../serializers/advertisement.serializers"; 

const advertisementRoutes = Router();

advertisementRoutes.post(
  "/",

  dataVerificationByZodMiddleware(advertisementCreateSerializer),
  createToAdvertisementController,
  
);

advertisementRoutes.delete(
  "/:id",
  deletionToAdvertisementController
  
);



export default advertisementRoutes;
