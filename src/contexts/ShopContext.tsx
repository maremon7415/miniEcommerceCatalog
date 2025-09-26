"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import productsData, { Product } from "@/data/Products";

// Context type definition
interface ShopContextType {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  errorMessage: string | null;
  openModal: (id: number) => void;
  closeModal: () => void;
}

// Create context (undefined by default for safety check)
export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

// Provider component
export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch products (from local data file for now)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(null);

      try {
        const response = await Promise.resolve(productsData);
        setProducts(response);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Modal handlers
  const openModal = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product) setSelectedProduct(product);
  };

  const closeModal = () => setSelectedProduct(null);

  return (
    <ShopContext.Provider
      value={{
        products,
        selectedProduct,
        loading,
        errorMessage,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook for consuming the context
export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within ShopProvider");
  }
  return context;
};
