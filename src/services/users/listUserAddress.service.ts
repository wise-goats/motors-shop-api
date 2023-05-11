import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  userProfileSerializer,
  userProfileToIdSerializer,
} from "../../serializers/users.serializers";
const listUserAddressService = async (userId: string): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: { id: userId },
    relations: { addresses: true },
  });
  if (!findUser) {
    throw new AppError("User not found", 404);
  }
  return findUser?.addresses[0];
};

export default listUserAddressService;
