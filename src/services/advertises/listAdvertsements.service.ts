import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { IAdvertisement } from "../../interfaces/adverticements.interfaces";
import { listAdvertsementSchema } from "../../serializers/advertisement.serializers";

const listAdvertsementsService = async (): Promise<IAdvertisement[]> => {
  const adverticementRepository = AppDataSource.getRepository(Advertisement);

  const getAdverticevementList = await adverticementRepository.find();

  const listAdvertsementParced = listAdvertsementSchema.parse(
    getAdverticevementList
  );

  return listAdvertsementParced;
};

export default listAdvertsementsService;
