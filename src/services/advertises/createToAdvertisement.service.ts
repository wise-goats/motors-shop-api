import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { iAdvertisement } from "../../interfaces/adverticements.interfaces";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { Image } from "../../entities/image.entity";

const createToAdvertisementService = async (
  dataAd: iAdvertisement,
  idUser: string
) => {
  const repositoryUser = AppDataSource.getRepository(User);
  const adRepository = AppDataSource.getRepository(Advertisement);
  const imageAdRepository = AppDataSource.getRepository(Image);
  const findUser = await repositoryUser.findOne({
    where: { id: idUser },
  });

  if (!findUser) {
    throw new AppError("user not exists", 404);
  }

  const { password, ...userWithoutPassword } = findUser;
  const advertisementCreated = adRepository.create({
    ...dataAd,
    isActive: true,
    user: userWithoutPassword,
  });
  await adRepository.save(advertisementCreated);

  const advertisement = await adRepository.findOneBy({
    id: advertisementCreated.id,
  });
  if (!advertisement) {
    throw new AppError("error adding images", 404);
  }
  const images = dataAd.images.map((image) => {
    const newImage = imageAdRepository.create({
      ...image,
      advertisement: advertisement,
    });
    return newImage;
  });

  await imageAdRepository.save(images);

  return advertisementCreated;
};

export default createToAdvertisementService;
