import { Request, Response } from "express";
import deletionToAdvertisementService from "../services/advertises/deletionToAdvertisement.service";

const deletionToAdvertisementController = async (req: Request, res: Response) => {
    const advertisementId = req.params.id;
    const adRemoved = await deletionToAdvertisementService(advertisementId);
  
    return res.status(204).json(adRemoved);
  };

  export{deletionToAdvertisementController}