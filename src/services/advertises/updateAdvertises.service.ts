import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { AppError } from "../../errors/AppError";
// import { IAdvertisement } from "../../interfaces/advertisement";
import { advertisementUpdateSerializer } from "../../serializers/advertisement.serializers";

const updateAdService = async (
  advertisementData /* : IAdvertisement */,
  advertisementId: string
) => {
  const adRepository = AppDataSource.getRepository(Advertisement);

  const findAd = await adRepository.findOneBy({ id: advertisementId });

  if (!findAd) {
    throw new AppError("Ad not found", 404);
  }

  const advertimentDataParsed =
    advertisementUpdateSerializer.parse(advertisementData);

  const updatedAdData = {
    ...findAd,
    ...advertimentDataParsed,
  };

  await adRepository.update(advertisementId, advertimentDataParsed);

  return updatedAdData;
};

export default updateAdService;
