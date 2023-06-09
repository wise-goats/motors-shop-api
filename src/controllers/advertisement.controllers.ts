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
import listAdvertsementByIdService from "../services/advertises/listAdvertsementById.service";

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
  const page: any = req.query.page;
  const advertisements = await listAdvertsementsService(page);

  return res.json(advertisements);
};

const listAdvertsementByIdController = async (req: Request, res: Response) => {
  const idAdvertisement = req.params.id;
  const advertisement: any = await listAdvertsementByIdService(idAdvertisement);

  return res.json(advertisement);
};

export {
  createToAdvertisementController,
  deletionToAdvertisementController,
  updateAdvertisementController,
  listAdvertsementsController,
  listAdvertsementByIdController,
};
