import { Schema, z } from "zod";
import { iAdvertisementDataCreate } from "../interfaces";


const advertisementCreateSerializer : Schema<iAdvertisementDataCreate> = z
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
    isActive: z.boolean()
    // user
  })
  .strip();

const advertisementUpdateSerializer = z
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
    // user
  })
  .strip();

export { advertisementCreateSerializer
   };
