import { Request, Response } from "express";
import { INewUserRequest } from "../interfaces/users.interfaces";
import createNewUserService from "../services/users/createNewUser.service";
import deleteUserService from "../services/users/deleteUser.service";

const createNewUserController = async (req: Request, res: Response) => {
  const dataUser: INewUserRequest = req.body;

  const registerUser = await createNewUserService(dataUser);
  return res.status(201).json(registerUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const idRemove = req.user.id;
  const userDelete = await deleteUserService(idRemove);

  return res.status(204).json(userDelete);
};

export { createNewUserController, deleteUserController };
