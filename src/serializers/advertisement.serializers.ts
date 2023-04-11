import { z } from "zod";

const advertisementSerializer = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  fipePrice: z.number(),
  price: z.number(),
  description: z.string(),
});

const listAdvertsementSchema = z.array(advertisementSerializer);

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

export {
  advertisementUpdateSerializer,
  advertisementSerializer,
  listAdvertsementSchema,
};
