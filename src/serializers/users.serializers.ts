import { Schema, z } from "zod";

interface IUserRequestReturnedClient {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  birthDate: Date;
  isSeller: boolean;
  description: string;
}
const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  state: z.string(),
  city: z.string(),
  zipcode: z.string(),
});

const newUserRequestSerializer = z.object({
  name: z.string(),
  email: z.string().email(),
  isSeller: z.boolean(),
  cpf: z
    .string()
    .max(11)
    .regex(/^\d{11}$/)
    .trim()
    .optional(),
  phone: z.string().max(16),
  birthDate: z.string(),
  description: z.string(),
  password: z.string().max(15).trim(),
  addresses: addressSchema,
});

const userWithoutPasswordFieldSerializer = z.object({
  name: z.string(),
  email: z.string().email().optional(),
  id: z.string().uuid().optional(),
  isSeller: z.boolean().optional(),
  cpf: z
    .string()
    .max(11)
    .regex(/^\d{11}$/)
    .trim()
    .optional(),
  phone: z.string().optional(),
  birthDate: z.string(),
  description: z.string(),
});

export { userWithoutPasswordFieldSerializer, newUserRequestSerializer };
