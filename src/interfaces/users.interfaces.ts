interface IAddress {
  street: string;
  number: number;
  complement: string;
  state: string;
  city: string;
  zipcode: string;
}
interface INewUserRequest {
  name: string;
  email: string;
  password: string;
  isAdm: boolean;
  phone: string;
  cpf: string;
  birthDate: Date;
  isSeller: boolean;
  description: string;
  addresses: IAddress;
}

interface iUserUpdated {
  name?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  birthDate?: Date;
  isSeller?: boolean;
  description?: string;
  reset_token?: string;
}

interface IAddressUpdated {
  street?: string;
  number?: number;
  complement?: string;
  state?: string;
  city?: string;
  zipcode?: string;
}

export { INewUserRequest, iUserUpdated, IAddressUpdated };
