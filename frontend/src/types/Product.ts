export type Product = {
  id: number;
  price: number;
  title: string;
  category: string;
  description: string;
  image: string;
  manufacturer: {
    id: number;
    name: string;
  }
}
