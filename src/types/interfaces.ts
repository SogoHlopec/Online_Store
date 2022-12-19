// ! interface for data
interface IProductsList {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface IDataProducts {
  limit: number;
  skip: number;
  total: number;
  products: IProductsList[];
}