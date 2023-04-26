import { AppDataSource } from "../../data-source";
import { IAddressUpdated } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { Address } from "../../entities/address.entity";

const updateDataUserAddressService = async (
  dataAddressUpdate: IAddressUpdated,
  idUser: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);
  const keysUser = Object.keys(dataAddressUpdate);

  if (keysUser.includes("id")) {
    throw new AppError("id key is not open for modification", 401);
  }

  const userAddress = await userRepository.findOne({
    where: { id: idUser },
  });

  if (!userAddress) {
    throw new AppError("id key is not open for modification", 404);
  }
  const currentAddress = await addressRepository.findOne({
    where: { user: { id: idUser } },
  });

  if (!currentAddress) {
    throw new AppError("User has no address registered", 404);
  }

  currentAddress.street = dataAddressUpdate.street ?? currentAddress.street;
  currentAddress.number = dataAddressUpdate.number ?? currentAddress.number;
  currentAddress.complement =
    dataAddressUpdate.complement ?? currentAddress.complement;
  currentAddress.state = dataAddressUpdate.state ?? currentAddress.state;
  currentAddress.city = dataAddressUpdate.city ?? currentAddress.city;
  currentAddress.zipcode = dataAddressUpdate.zipcode ?? currentAddress.zipcode;

  const updatedAddress = await addressRepository.save(currentAddress);
  return updatedAddress;
};

export default updateDataUserAddressService;
