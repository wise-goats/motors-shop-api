import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { hashSync } from "bcryptjs";
const resetPasswordService = async (
  newPassword: string,
  resetToken: string
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { reset_token: resetToken },
  });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(user.id, {
    password: hashSync(newPassword, 10),
    reset_token: "",
  });
};

export default resetPasswordService;
