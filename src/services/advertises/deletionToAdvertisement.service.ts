import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { AppError } from "../../errors/AppError";

const deletionToAdvertisementService = async (advertisementId: string) => {
  const adRepository = AppDataSource.getRepository(Advertisement);

  const findAd = await adRepository.findOneBy({ id: advertisementId });

  if (!findAd) {
    throw new AppError("Ad not found", 404);
  }

  await adRepository.remove(findAd);

  return { message: "Ad removed successfully!" };
};

export default deletionToAdvertisementService;
