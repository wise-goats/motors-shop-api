import { Router } from "express";
import {
  createToAdvertisementController,
  deletionToAdvertisementController,
  listAdvertsementByIdController,
  updateAdvertisementController,
} from "../controllers/advertisement.controllers";
import dataVerificationMiddleware from "../middlewares/dataVerification.middlewares";
import {
  advertisementSerializer,
  newAdvertisementSerializer,
} from "../serializers/advertisement.serializers";
import { verifyTokenMiddleware } from "../middlewares/verifyToken.middleware";
import { listAdvertsementsController } from "../controllers/advertisement.controllers";
import {
  createCommentController,
  listCommentController,
} from "../controllers/comment.controllers";
const advertisementRoutes = Router();

advertisementRoutes.post(
  "/",
  dataVerificationMiddleware(newAdvertisementSerializer),
  verifyTokenMiddleware,
  createToAdvertisementController
);

advertisementRoutes.post(
  "/:id/comment",
  verifyTokenMiddleware,
  createCommentController
);
advertisementRoutes.get("/:id/comment", listCommentController);

advertisementRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  deletionToAdvertisementController
);

advertisementRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  updateAdvertisementController
);

advertisementRoutes.get(
  "/:id",
  verifyTokenMiddleware,
  listAdvertsementByIdController
);
advertisementRoutes.get("", listAdvertsementsController);

export default advertisementRoutes;
