// interface IAdvertisement {
//   id: string;
//   brand: string;
//   model: string;
//   year: number;
//   fuel: string;
//   mileage: number;
//   color: string;
//   fipePrice: number;
//   price: number;
//   description: string;
// }

interface iAdvertisement {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: number;
  color: string;
  fipePrice: number;
  price: number;
  description: string;
}

interface iAdvertisementList {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: number;
  color: string;
  fipePrice: number;
  price: number;
  description: string;
}

export { iAdvertisement, iAdvertisementList };
