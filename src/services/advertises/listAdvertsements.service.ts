import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { listAdvertsementSchema } from "../../serializers/advertisement.serializers";

const listAdvertsementsService = async () => {
  const adverticementRepository = AppDataSource.getRepository(Advertisement);

  const getAdverticevementList = await adverticementRepository.find();

  const listAdvertsementParced = listAdvertsementSchema.parse(
    getAdverticevementList
  );

  return listAdvertsementParced;
};

export default listAdvertsementsService;
