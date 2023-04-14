import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisement } from "../../interfaces/advertisement";

const createToAdvertisementService = async (dataAd: iAdvertisement) => {
  const adRepository = AppDataSource.getRepository(Advertisement);
  const advertisement = adRepository.create(dataAd);

  await adRepository.save(advertisement);

  return advertisement;
};

export default createToAdvertisementService;
