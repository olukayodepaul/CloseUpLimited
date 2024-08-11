import axios from "axios";
import { Product } from "../models/Products";
import { ApplicationProduct } from "../../../models/ApplicationProduct";
import { mapProductData } from "../../../utils/mapProductData";

const API_URL = "https://fake-store-api.mock.beeceptor.com/api/products";

export const fetchProducts = async (): Promise<ApplicationProduct[]> => {
  try {
    const response = await axios.get<Product[]>(API_URL);
    return mapProductData(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
