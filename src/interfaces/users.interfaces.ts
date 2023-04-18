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
}

export { INewUserRequest };
