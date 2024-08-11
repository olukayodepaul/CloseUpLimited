import { ApplicationProduct } from "../models/ApplicationProduct";

export interface CardProps {
  productname: string;
  description: string;
  discount: string;
  price: string;
}

export interface Product {
  product_id: string;
  name: string;
  description: string;
  discount: string;
  price: string;
}

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export interface UseProductsReturn {
  products: ApplicationProduct[];
  loading: boolean;
  error: string | null;
}
