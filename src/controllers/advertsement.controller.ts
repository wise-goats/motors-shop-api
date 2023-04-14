import { Request, Response } from "express";
import listAdvertsementsService from "../services/advertises/listAdvertsements.service";
import { IAdvertisement } from "../interfaces/adverticements.interfaces";

const listAdvertsementsController = async (req: Request, res: Response) => {
  const advetsements: IAdvertisement[] = await listAdvertsementsService();

  return res.json(advetsements);
};

export { listAdvertsementsController };
