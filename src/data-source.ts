import "dotenv/config";
import "reflect-metadata";
import { DataSourceOptions, DataSource } from "typeorm";
import { Order } from "./entities/order.entity";
import { Advertisement } from "./entities/advertisement.entity";
import { User } from "./entities/user.entity";
import { Address } from "./entities/address.entity";
import { CreateTables1681229110379 } from "./migrations/1681229110379-createTables";
import { Comment } from "./entities/comment.entity";
import { Image } from "./entities/image.entity";
import { CreateTables1681232774931 } from "./migrations/1681232774931-createTables";
import { AddRelationUserAndAdvertisement1681757106834 } from "./migrations/1681757106834-add-relation-user-and-advertisement";
import { resetPasswordTokenField1682599835130 } from "./migrations/1682599835130-resetPasswordTokenField";
import { AlterationCascate1683142985417 } from "./migrations/1683142985417-alteration-cascate";

const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exists");
  }

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [
      CreateTables1681229110379,
      CreateTables1681232774931,
      AddRelationUserAndAdvertisement1681757106834,
      resetPasswordTokenField1682599835130,
      AlterationCascate1683142985417,
    ],
    entities: [User, Address, Advertisement, Comment, Image, Order],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
