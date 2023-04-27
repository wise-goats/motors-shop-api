import { AppDataSource } from "../../data-source";
import { iUserUpdated } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { userWithoutPasswordFieldSerializer } from "../../serializers/users.serializers";

const updateDataUserService = async (
  dataUserUpdate: iUserUpdated,
  idUser: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const keysUser = Object.keys(dataUserUpdate);

  if (keysUser.includes("id")) {
    throw new AppError("id key is not open for modification", 401);
  }
  if (keysUser.includes("password")) {
    throw new AppError("password key is not open for modification", 401);
  }
  if (keysUser.includes("isSeller")) {
    throw new AppError("isSeller key is not open for modification", 401);
  }
  const userCurrentData = await userRepository.findOne({
    where: { id: idUser },
  });
  const newUserWithNewData = { ...userCurrentData, ...dataUserUpdate };
  const userUpdate = userRepository.update(idUser, newUserWithNewData);
  const searchUserAlreadyUpdated = await userRepository.findOne({
    where: { id: idUser },
  });

  const userWithoutPasswordField = userWithoutPasswordFieldSerializer.parse(
    searchUserAlreadyUpdated,
    {}
  );

  return userWithoutPasswordField;
};

export default updateDataUserService;
