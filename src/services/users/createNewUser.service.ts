import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userWithoutPasswordFieldSerializer } from "../../serializers/users.serializers";
import { AppError } from "../../errors/AppError";
import { INewUserRequest } from "../../interfaces/users.interfaces";
import { Address } from "../../entities/address.entity";
const createNewUserService = async (
  dataUser: INewUserRequest
): Promise<any> => {
  const repositoryUser = AppDataSource.getRepository(User);
  const repositoryAddress = AppDataSource.getRepository(Address);
  const findUser = await repositoryUser.findOne({
    where: { email: dataUser.email },
    withDeleted: true,
  });

  if (findUser) {
    throw new AppError("user exists", 409);
  }

  const {
    name,
    email,
    password,
    isAdm,
    phone,
    cpf,
    birthDate,
    isSeller,
    description,
    addresses,
  } = dataUser;

  const userData = {
    name,
    email,
    password,
    isAdm,
    phone,
    cpf,
    birthDate,
    isSeller,
    description,
  };

  const userCreated = repositoryUser.create(userData);
  await repositoryUser.save(userCreated);
  const address = repositoryAddress.create({ ...addresses, user: userCreated });
  await repositoryAddress.save(address);

  const userWithoutPasswordField = userWithoutPasswordFieldSerializer.parse(
    userCreated,
    {}
  );
  return userWithoutPasswordField;
};

export default createNewUserService;
