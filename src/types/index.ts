export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number | null;
  category: string;
  image: string;
  featured: boolean;
  features: string[];
}