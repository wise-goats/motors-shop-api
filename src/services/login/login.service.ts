import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { ILogin } from "../../interfaces/login.interfaces";

const loginService = async (data: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: data.email,
  });

  if (!user) {
    throw new AppError("Email or passsword invalid", 403);
  }

  const password = await compare(data.password, user.password);

  if (!password) {
    throw new AppError("Email or passsword invalid", 403);
  }

  const token = jwt.sign({}, `${process.env.SECRET_KEY}`, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return { token: token };
};

export default loginService;
