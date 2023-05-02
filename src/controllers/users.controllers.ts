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
import resetPasswordService from "../services/users/resetPassword.service";
import sednPasswordTokenService from "../services/users/sendPasswordToken.service";

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

const resetPasswordController = async (req: Request, res: Response) => {
  const { password } = req.body;
  const { token } = req.params;

  await resetPasswordService(password, token);

  return res.status(200).json({ message: "Password changed" });
};

const sendPasswordTokenController = async (req: Request, res: Response) => {
  const { email } = req.body;
  const { protocol } = req;
  const host = req.get("host");
  await sednPasswordTokenService(email, protocol, host!);

  return res.status(200).json({ message: "Token send to user email" });
};

export {
  createNewUserController,
  deleteUserController,
  updateDataUserController,
  updateDataUserAddressController,
  resetPasswordController,
  sendPasswordTokenController,
};
