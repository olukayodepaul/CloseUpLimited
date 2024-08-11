export interface ApplicationReview {
  user_id: number;
  rating: number;
  comment: string;
}

export interface ApplicationProduct {
  product_id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  discount: number;
  availability: boolean;
  brand: string;
  category: string;
  rating: number;
  reviews: ApplicationReview[];
}
