import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisementList } from "../../interfaces/adverticements.interfaces";
import { listAdvertsementSchema } from "../../serializers/advertisement.serializers";

const listAdvertsementsService = async (): Promise<iAdvertisementList[]> => {
  const adverticementRepository = AppDataSource.getRepository(Advertisement);

  const getAdverticevementList = await adverticementRepository.find();

  const listAdvertsementParced = listAdvertsementSchema.parse(
    getAdverticevementList
  );

  return listAdvertsementParced;
};

export default listAdvertsementsService;
