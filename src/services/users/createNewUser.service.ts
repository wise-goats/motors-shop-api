import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userWithoutPasswordFieldSerializer } from "../../serializers/users.serializers";
import { AppError } from "../../errors/AppError";
import { INewUserRequest } from "../../interfaces/users.interfaces";
const createNewUserService = async (
  dataUser: INewUserRequest
): Promise<any> => {
  const repositoryUser = AppDataSource.getRepository(User);
  const findUser = await repositoryUser.findOne({
    where: { email: dataUser.email },
    withDeleted: true,
  });

  if (findUser) {
    throw new AppError("user exists", 409);
  }

  const user = repositoryUser.create(dataUser);
  await repositoryUser.save(user);

  const userWithoutPasswordField =
    await userWithoutPasswordFieldSerializer.parse(user, {});
  return userWithoutPasswordField;
};

export default createNewUserService;
