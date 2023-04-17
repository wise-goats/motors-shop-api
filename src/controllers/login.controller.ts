import { Request, Response } from "express";
import loginService from "../services/login/login.service";

const loginContrller = async (req: Request, res: Response) => {
  const { email, passsword } = req.body;

  const data = await loginService(email, passsword);

  return res.status(200).json(data);
};

export { loginContrller };
