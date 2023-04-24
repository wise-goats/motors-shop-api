import { Schema, array, z } from "zod";
// import { iAdvertisement } from "../interfaces/advertisement";

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
const imageAdvertisementSerializer = z.object({
  image: z.string(),
});

const newAdvertisementSerializer = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  fipePrice: z.number(),
  price: z.number(),
  description: z.string(),
  images: z.array(imageAdvertisementSerializer),
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
    isActive: z.boolean(),
    // user
  })
  .strip();

export {
  advertisementUpdateSerializer,
  advertisementSerializer,
  listAdvertsementSchema,
  newAdvertisementSerializer,
};
