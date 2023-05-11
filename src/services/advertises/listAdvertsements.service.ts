import { number } from "zod";
import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisementList } from "../../interfaces/adverticements.interfaces";
import { listAdvertsementSchema } from "../../serializers/advertisement.serializers";

const listAdvertisementsService = async (page: any = 0) => {
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

  const actualPage =
    parseInt(page) > 1 && typeof parseInt(page) === "number"
      ? parseInt(page)
      : 1;
  const paginate = {
    pages: Math.ceil(list.length / 9),
    actualPage: actualPage,
  };
  if (actualPage > 1) {
    return {
      ...paginate,
      data: [...list.slice((actualPage - 1) * 9, (actualPage - 1) * 9 + 9)],
    };
  } else {
    return { ...paginate, data: [...list.slice(0, 9)] };
  }
};

export default listAdvertisementsService;
