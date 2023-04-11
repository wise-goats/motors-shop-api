import { string, z } from "zod";

const adUpdateSerializer = z
  .object({
    brand: z.string(),
    model: z.string(),
    year: z.string().datetime(),
    fuel: z.string(),
    mileage: z.number(),
    color: z.string(),
    fipePrice: z.number(),
    price: z.number(),
    description: z.string(),
    // user
  })
  .strip();

export { adUpdateSerializer };
