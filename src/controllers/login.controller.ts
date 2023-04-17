import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const loginContrller = async (req: Request, res: Response) => {
  const body = req.body;

  const data = await loginService(body);

  return res.status(200).json(data);
};

export { loginContrller };
