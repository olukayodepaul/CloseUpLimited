import { Product } from "../app/(home)/models/Products";
import {
  ApplicationProduct,
  ApplicationReview,
} from "../models/ApplicationProduct";

export const mapProductData = (products: Product[]): ApplicationProduct[] => {
  return products.map((product) => ({
    product_id: product.product_id,
    name: product.name,
    description: product.description,
    price: product.price,
    unit: product.unit,
    image: product.image,
    discount: product.discount,
    availability: product.availability,
    brand: product.brand,
    category: product.category,
    rating: product.rating,
    reviews:
      product.reviews?.map((review) => ({
        user_id: review.user_id,
        rating: review.rating,
        comment: review.comment,
      })) || [],
  }));
};
