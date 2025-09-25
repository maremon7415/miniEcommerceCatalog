"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import productsData, { Product } from "@/data/Products";

interface ShopContextType {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  errorMessage: string | null;
  openModal: (id: number) => void;
  closeModal: () => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await Promise.resolve(productsData);
      setProducts(response);
    } catch (error: any) {
      console.log(error);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
};
