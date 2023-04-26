import { Request, Response } from "express";
import {
  IAddressUpdated,
  INewUserRequest,
  iUserUpdated,
} from "../interfaces/users.interfaces";
import createNewUserService from "../services/users/createNewUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import updateDataUserService from "../services/users/updateDataUser.service";
import { AppError } from "../errors/AppError";
import updateDataUserAddressService from "../services/users/updateDataUserAddress.service";

const createNewUserController = async (req: Request, res: Response) => {
  const dataUser: INewUserRequest = req.body;

  const registerUser = await createNewUserService(dataUser);
  return res.status(201).json(registerUser);
};

const updateDataUserController = async (req: Request, res: Response) => {
  try {
    const dataUserUpdate: iUserUpdated = req.body;

    const idUser = req.user.id;
    const userUpdate = await updateDataUserService(dataUserUpdate, idUser);
    return res.json(userUpdate);
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 401);
    }
  }
};

const updateDataUserAddressController = async (req: Request, res: Response) => {
  try {
    const dataAddressUpdate: IAddressUpdated = req.body;

    const idUser = req.user.id;
    const addressUpdated = await updateDataUserAddressService(
      dataAddressUpdate,
      idUser
    );
    return res.json(addressUpdated);
  } catch (error) {
    if (error instanceof Error) {
      throw new AppError(error.message, 401);
    }
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  const idRemove = req.user.id;
  const userDelete = await deleteUserService(idRemove);

  return res.status(204).json(userDelete);
};

export {
  createNewUserController,
  deleteUserController,
  updateDataUserController,
  updateDataUserAddressController,
};
