import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

const verifyIfUserIsLoggedUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.user.id !== req.params.id) {
      throw new AppError("Permission denied", 403);
    }

    return next();
  } catch (error: any) {
    return res.status(error.statusCode).json(error.message);
  }
};

export default verifyIfUserIsLoggedUserMiddleware
