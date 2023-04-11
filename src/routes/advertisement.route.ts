import { Router } from "express";
import { listAdvertsementsController } from "../controllers/advertsement.controller";

const advertisementRoutes = Router();

advertisementRoutes.get("", listAdvertsementsController);

export default advertisementRoutes;
