import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisementList } from "../../interfaces/adverticements.interfaces";
import { listAdvertsementSchema } from "../../serializers/advertisement.serializers";

const listAdvertisementsService = async (): Promise<iAdvertisementList[]> => {
  // const advertisementRepository = AppDataSource.getRepository(Advertisement);

  // const getAdverticevementList = await advertisementRepository
  //   .createQueryBuilder("advertisement")
  //   .leftJoinAndSelect("advertisement.images", "image")
  //   .getMany();

  // const list = listAdvertsementSchema.parse(getAdverticevementList);

  // return list;

  const advertisementRepository = AppDataSource.getRepository(Advertisement);

  const getAdvertisementList = await advertisementRepository
    .createQueryBuilder("advertisement")
    .leftJoinAndSelect("advertisement.user", "user")
    .leftJoinAndSelect("advertisement.images", "image")
    .select([
      "advertisement.id",
      "advertisement.brand",
      "advertisement.model",
      "advertisement.year",
      "advertisement.fuel",
      "advertisement.mileage",
      "advertisement.color",
      "advertisement.fipePrice",
      "advertisement.price",
      "advertisement.description",
      "advertisement.isActive",
      "user.id",
      "user.name",
      "image.id",
      "image.image",
    ])
    .getMany();
  const list = listAdvertsementSchema.parse(getAdvertisementList);

  return list;
};

export default listAdvertisementsService;
