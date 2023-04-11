import { Request, Response } from "express";
import listAdvertsementsService from "../services/advertises/listAdvertsements.service";

const listAdvertsementsController = async (req: Request, res: Response) => {
  const advetsements = await listAdvertsementsService();

  return res.json(advetsements);
};

export { listAdvertsementsController };
