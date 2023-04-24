import { Request, Response } from "express";
import deletionToAdvertisementService from "../services/advertises/deletionToAdvertisement.service";
import createToAdvertisementService from "../services/advertises/createToAdvertisement.service";
import updateAdvertisementService from "../services/advertises/updateAdvertises.service";
import listAdvertsementsService from "../services/advertises/listAdvertsements.service";
import {
  iAdvertisement,
  iAdvertisementList,
  // iAdvertisementUpdated,
} from "../interfaces/adverticements.interfaces";

const createToAdvertisementController = async (req: Request, res: Response) => {
  const dataAd = req.body;
  const idUser: string = req.user.id;
  const ad = await createToAdvertisementService(dataAd, idUser);

  return res.status(201).json(ad);
};

const deletionToAdvertisementController = async (
  req: Request,
  res: Response
) => {
  const advertisementId = req.params.id;
  const idUser: string = req.user.id;
  const adRemoved = await deletionToAdvertisementService(
    advertisementId,
    idUser
  );

  return res.status(204).json(adRemoved);
};

const updateAdvertisementController = async (req: Request, res: Response) => {
  const advertisementData: iAdvertisement = req.body;
  const idUser: string = req.user.id;
  const advertisementId: string = req.params.id;

  const updatedAdvertisement = await updateAdvertisementService(
    advertisementData,
    advertisementId,
    idUser
  );

  return res.status(200).json(updatedAdvertisement);
};

const listAdvertsementsController = async (req: Request, res: Response) => {
  const advetsements: iAdvertisementList[] = await listAdvertsementsService();

  return res.json(advetsements);
};

export {
  createToAdvertisementController,
  deletionToAdvertisementController,
  updateAdvertisementController,
  listAdvertsementsController,
};
