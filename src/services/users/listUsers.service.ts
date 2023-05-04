import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { multipleProfilesSerializer } from "../../serializers/users.serializers";
const listUsersService = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({
    relations: { advertisement: true },
  });

  const parsedUsers = multipleProfilesSerializer.parse(users);
  return parsedUsers;
};

export default listUsersService;
