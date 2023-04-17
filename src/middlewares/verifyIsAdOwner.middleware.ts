import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Advertisement } from "../entities/advertisement.entity";
import { AppError } from "../errors/AppError";

const verifyIsAdOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const advertisementRepository = AppDataSource.getRepository(Advertisement);

    const advertisement = await advertisementRepository.findOneBy({
      id: req.params.id,
    });

    if (advertisement.user !== req.user.id) {
      throw new AppError("User does not own the ad", 403);
    }

    return next();
  } catch (error: any) {
    return res.status(error.statusCode).json(error.message);
  }
};

export default verifyIsAdOwnerMiddleware;
