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

interface iImages {
  image: string;
}
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
  images: iImages[];
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
  isActive: boolean;
  page: string | number;
  actualPage: string | number;
}

export { iAdvertisement, iAdvertisementList };
