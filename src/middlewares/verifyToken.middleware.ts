import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors/AppError";

export const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new AppError("Invalid token", 401);
    }

    token = token.split(" ")[1];

    Jwt.verify(token, `${process.env.SECRET_KEY}`, (error, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      req.user = {
        id: decoded.sub,
      };

      return next();
    });
  } catch (error: any) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
};
