import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisementList } from "../../interfaces/adverticements.interfaces";
import { listAdvertsementSchema } from "../../serializers/advertisement.serializers";

const getAdvertisementByIdService = async (
  idAdvertisement: any
): Promise<any> => {
  const advertisementRepository = AppDataSource.getRepository(Advertisement);

  const getAdvertisement = await advertisementRepository
    .createQueryBuilder("advertisement")
    .leftJoinAndSelect("advertisement.user", "user")
    .leftJoinAndSelect("advertisement.images", "image")
    .where("advertisement.id = :id", { id: idAdvertisement })
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
    .getOne();
  // const advertisement = listAdvertsementSchema.parse(getAdvertisement);

  return getAdvertisement;
};

export default getAdvertisementByIdService;
