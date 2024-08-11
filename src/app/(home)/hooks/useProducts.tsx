import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import { ApplicationProduct } from "../../../models/ApplicationProduct";
import { UseProductsReturn } from "../../../utils/types";

const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<ApplicationProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
