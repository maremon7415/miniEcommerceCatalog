"use client";

import ProductCard from "@/components/ui/ProductCard";
import Modal from "@/components/ui/Modal";
import { useShop } from "@/contexts/ShopContext";
import Loader from "@/components/ui/Loader";

// Products page
export default function ProductsPage() {
  const { products, loading } = useShop();

  return (
    <>
      <main className="container mx-auto">
        {loading ? (
          <Loader fullPage={true} />
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Products</h1>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Global Modal for product details */}
      <Modal />
    </>
  );
}
