import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deletionToAdvertisementService = async (
  advertisementId: string,
  idUser: string
) => {
  const adRepository = AppDataSource.getRepository(Advertisement);
  const repositoryUser = AppDataSource.getRepository(User);
  const findUser = await repositoryUser.findOne({
    where: { id: idUser },
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  const findAd = await adRepository.findOne({
    where: { id: advertisementId, user: { id: findUser.id } },
  });

  if (!findAd) {
    throw new AppError("Ad not found", 404);
  }

  await adRepository.remove(findAd);

  return { message: "Ad removed successfully!" };
};

export default deletionToAdvertisementService;
