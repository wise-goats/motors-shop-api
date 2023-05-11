import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { iAdvertisement } from "../../interfaces/adverticements.interfaces";
import { advertisementSerializer } from "../../serializers/advertisement.serializers";

const updateAdvertisementService = async (
  advertisementData: iAdvertisement,
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

  advertisementData = { ...advertisementData };
  const updatedData = { ...findAd, ...advertisementData };

  const advertimentDataParsed = advertisementSerializer.parse(updatedData);

  const updatedAdData = {
    ...findAd,
    ...advertimentDataParsed,
  };

  await adRepository.update(advertisementId, advertimentDataParsed);

  return updatedAdData;
};

export default updateAdvertisementService;
