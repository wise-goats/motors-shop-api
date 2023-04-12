import { Schema, z } from "zod";
import { iAdvertisement } from "../interfaces/advertisement";

const advertisementSerializer: Schema<iAdvertisement> = z
  .object({
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    fuel: z.string(),
    mileage: z.number(),
    color: z.string(),
    fipePrice: z.number(),
    price: z.number(),
    description: z.string(),
    isActive: z.boolean(),
    // user
  })
  .strip();

export { advertisementSerializer };
