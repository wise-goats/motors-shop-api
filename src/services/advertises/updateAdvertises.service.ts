import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { AppError } from "../../errors/AppError";
import { IAdvertisement } from "../../interfaces/advertisement";
import { adUpdateSerializer } from "../../serializers/ads.serializers";

const updateAdService = async (adData: IAdvertisement, adId: string) => {
  const adRepository = AppDataSource.getRepository(Advertisement);

  const findAd = await adRepository.findOneBy({ id: adId });

  if (!findAd) {
    throw new AppError("Ad not found", 404);
  }

  const adDataParsed = adUpdateSerializer.parse(adData);

  const updatedAdData = {
    ...findAd,
    ...adDataParsed,
  };

  await adRepository.update(adId, adDataParsed);

  return updatedAdData;
};

export default updateAdService;
