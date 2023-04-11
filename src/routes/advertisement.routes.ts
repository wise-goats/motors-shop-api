import { Router } from "express";
import { deletionToAdvertisementController } from "../controllers/advertisement.controllers";

const advertisementRoutes = Router();
advertisementRoutes.delete(
  "/:id",
  deletionToAdvertisementController
  
);

export default advertisementRoutes;
