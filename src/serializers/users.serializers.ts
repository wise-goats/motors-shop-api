import { Schema, z } from "zod";
import { iUserUpdated } from "../interfaces/users.interfaces";
import {
  advertisementSerializer,
  advertisementToIdSerializer,
} from "./advertisement.serializers";

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
  birthDate: z.date(),
  description: z.string(),
  reset_token: z.string().nullable(),
});

const userProfileSerializer = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string().email().optional(),
  isSeller: z.boolean().optional(),
  phone: z.string().optional(),
  description: z.string(),
  advertisement: advertisementSerializer.array(),
});
const userProfileToIdSerializer = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string().email().optional(),
  isSeller: z.boolean().optional(),
  phone: z.string().optional(),
  description: z.string(),
  advertisement: advertisementToIdSerializer.array(),
});

const multipleProfilesSerializer = userProfileSerializer.array();

const IUpdateUserRequestSerializer = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  cpf: z
    .string()
    .max(11)
    .regex(/^\d{11}$/)
    .trim()
    .optional(),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  description: z.string().optional(),
});

const IUpdateAddressRequestSerializer = z.object({
  street: z.string().optional(),
  number: z.number().optional(),
  complement: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  zipcode: z.string().optional(),
});

export {
  userWithoutPasswordFieldSerializer,
  newUserRequestSerializer,
  IUpdateUserRequestSerializer,
  IUpdateAddressRequestSerializer,
  userProfileSerializer,
  multipleProfilesSerializer,
  userProfileToIdSerializer,
};
