import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisementDataCreate } from "../../interfaces";


const createToAdvertisementService = async (
    dataAd: iAdvertisementDataCreate
) => {
  const adRepository = AppDataSource.getRepository(Advertisement);
  const advertisement = adRepository.create(dataAd);
  await adRepository.save(advertisement);
  return advertisement;
};

export default createToAdvertisementService;