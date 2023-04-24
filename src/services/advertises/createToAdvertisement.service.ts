import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisement } from "../../interfaces/adverticements.interfaces";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const createToAdvertisementService = async (
  dataAd: iAdvertisement,
  idUser: string
) => {
  const repositoryUser = AppDataSource.getRepository(User);
  const adRepository = AppDataSource.getRepository(Advertisement);
  const findUser = await repositoryUser.findOne({
    where: { id: idUser },
  });

  if (!findUser) {
    throw new AppError("user not exists", 404);
  }

  const { password, ...userWithoutPassword } = findUser;
  const advertisement = adRepository.create({
    ...dataAd,
    isActive: true,
    user: userWithoutPassword,
  });

  await adRepository.save(advertisement);

  return advertisement;
};

export default createToAdvertisementService;
