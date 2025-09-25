"use client";

import React, { useEffect } from "react";
import {
  FiX,
  FiHeart,
  FiStar,
  FiTruck,
  FiShield,
  FiRefreshCw,
} from "react-icons/fi";
import Button from "./Button";
import { useShop } from "@/contexts/ShopContext";

const features = [
  {
    icon: FiTruck,
    text: "Free delivery within 2-3 business days",
    color: "text-blue-600",
  },
  { icon: FiShield, text: "2-year warranty included", color: "text-green-600" },
  { icon: FiRefreshCw, text: "30-day return policy", color: "text-orange-600" },
];

const Modal: React.FC = () => {
  const { selectedProduct, closeModal } = useShop();

  // Close modal with ESC key + lock scroll when open
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);

    if (selectedProduct) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [closeModal, selectedProduct]);

  if (!selectedProduct) return null;

  const product = selectedProduct;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeModal}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
        >
          <FiX size={20} className="text-gray-600" />
        </button>

        {/* Modal Body */}
        <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto md:overflow-y-visible rounded-2xl gap-3 sm:gap-4">
          {/* Left: Product Image */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100/50 flex items-center justify-center p-4 sm:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-contain rounded-2xl shadow-lg"
            />
            {/* Wishlist */}
            <button className="absolute top-3 left-3 sm:top-5 sm:left-5 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-all duration-200">
              <FiHeart className="text-gray-400 hover:text-red-400 transition-colors w-5 h-5" />
            </button>
          </div>

          {/* Right: Product Details */}
          <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between">
            <div>
              {/* Title */}
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-snug">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={14}
                      className={
                        i < 4
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">
                  4.8 (1,247 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-3 sm:mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    $399
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                    25% OFF
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Free shipping on orders over $50
                </p>
              </div>

              {/* Description */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  Description
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  Features
                </h3>
                <div className="grid gap-1.5 sm:gap-2">
                  {features.map(({ icon: Icon, text, color }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
                    >
                      <Icon className={`${color} w-4 h-4 flex-shrink-0`} />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 sm:space-y-3 pt-3 border-t border-gray-100">
              {/* Quantity Selector */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-700">Qty:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-3 py-1 border-x border-gray-300 text-sm">
                    1
                  </span>
                  <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>

              {/* Buy Button */}
              <Button button={{ name: "Buy Now" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
