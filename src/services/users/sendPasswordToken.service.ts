import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { randomUUID } from "node:crypto";
import { sendTokenService } from "../../utils/sendPasswordToken.utils";

const sendPasswordTokenService = async (
  userEmail: string,
  protocol: string,
  host: string
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email: userEmail } });
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const resetToken = randomUUID();

  await userRepository.update(user.id, { reset_token: resetToken });

  const resetPasswordTemplate = sendTokenService.resetPasswordTemplate(
    userEmail,
    user.name,
    resetToken,
    protocol,
    host
  );

  await sendTokenService.sendToken(resetPasswordTemplate);
};

export default sendPasswordTokenService;
