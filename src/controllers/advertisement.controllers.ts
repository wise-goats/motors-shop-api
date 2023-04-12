import { Request, Response } from "express";
import { iAdvertisement } from "../interfaces/advertisement";
import deletionToAdvertisementService from "../services/advertises/deletionToAdvertisement.service";
import createToAdvertisementService from "../services/advertises/createToAdvertisement.service";
import updateAdvertisementService from "../services/advertises/updateAdvertises.service";

const createToAdvertisementController = async (req: Request, res: Response) => {
  const dataAd = req.body;
  const ad = await createToAdvertisementService(dataAd);

  return res.status(201).json(ad);
};

const deletionToAdvertisementController = async (
  req: Request,
  res: Response
) => {
  const advertisementId = req.params.id;
  const adRemoved = await deletionToAdvertisementService(advertisementId);

  return res.status(204).json(adRemoved);
};

const updateAdvertisementController = async (req: Request, res: Response) => {
  const advertisementData: iAdvertisement = req.body;
  const advertisementId: string = req.params.id;

  const updatedAdvertisement = await updateAdvertisementService(
    advertisementData,
    advertisementId
  );

  return res.status(204).json(updatedAdvertisement);
};

export {
  createToAdvertisementController,
  deletionToAdvertisementController,
  updateAdvertisementController,
};
