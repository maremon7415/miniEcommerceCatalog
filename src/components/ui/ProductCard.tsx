"use client";

import React from "react";
import Button from "./Button";
import { Product } from "@/data/Products";
import { useShop } from "@/contexts/ShopContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openModal } = useShop(); // use context to open modal

  const handleCardClick = () => {
    openModal(product.id);
  };

  return (
    <div
      className="group bg-white rounded-2xl shadow-sm border border-gray-100/50 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/40 transition-all duration-500 cursor-pointer backdrop-blur-sm"
      onClick={handleCardClick}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Product Info */}
      <div className="p-6 relative">
        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ${product.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <Button label={"Add To Cart"} />
      </div>
    </div>
  );
};

export default ProductCard;
