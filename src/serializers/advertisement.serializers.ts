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
  isActive: z.boolean(),
});
const imageAdvertisementSerializer = z.object({
  image: z.string(),
});

const imageAdvertisementSerializerWithId = z.object({
  image: z.string(),
  id: z.string(),
});

const userCardList = z.object({
  id: z.string(),
  name: z.string(),
});

const advertisementSerializerToList = z.object({
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
  isActive: z.boolean(),
  images: z.array(imageAdvertisementSerializerWithId),
  user: userCardList,
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

const listAdvertsementSchema = z.array(advertisementSerializerToList);

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
