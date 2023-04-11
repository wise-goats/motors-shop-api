import { Request, Response } from "express";
import deletionToAdvertisementService from "../services/advertises/deletionToAdvertisement.service";
import createToAdvertisementService from "../services/advertises/createToAdvertisement.service";


const createToAdvertisementController = async (req: Request, res: Response) => {
  const dataAd = req.body;
  const ad = await createToAdvertisementService(dataAd);

  return res.status(201).json(ad);
};



const deletionToAdvertisementController = async (req: Request, res: Response) => {
    const advertisementId = req.params.id;
    const adRemoved = await deletionToAdvertisementService(advertisementId);
  
    return res.status(204).json(adRemoved);
  };

  export{deletionToAdvertisementController,
        createToAdvertisementController
  }