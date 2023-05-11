import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import {
  userProfileSerializer,
  userProfileToIdSerializer,
} from "../../serializers/users.serializers";
const listUserByIdService = async (userId: string): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: userId },
    relations: ["advertisement", "advertisement.images"],
  });

  const userProfileParsed = userProfileToIdSerializer.parse(user);
  return userProfileParsed;
};

export default listUserByIdService;
