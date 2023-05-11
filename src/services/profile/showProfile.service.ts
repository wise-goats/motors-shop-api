import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const showProfileService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      advertisement: true,
    },
  });

  return findUser;
};

export default showProfileService;
