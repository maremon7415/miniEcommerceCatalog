// src/components/ui/Modal.tsx
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

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ product, isOpen, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
        >
          <FiX size={20} className="text-gray-600" />
        </button>

        {/* Modal Body */}
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Product Image Section */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100/50 flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-96 object-contain rounded-2xl shadow-lg"
            />

            {/* Wishlist Button */}
            <button className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200">
              <FiHeart
                size={20}
                className="text-gray-400 hover:text-red-400 transition-colors"
              />
            </button>
          </div>

          {/* Product Details Section */}
          <div className="p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Product Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={16}
                      className={
                        i < 4
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  4.8 (1,247 reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    $399
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    25% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Free shipping on orders over $50
                </p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Features
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiTruck size={16} className="text-blue-600" />
                    <span>Free delivery within 2-3 business days</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiShield size={16} className="text-green-600" />
                    <span>2-year warranty included</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FiRefreshCw size={16} className="text-orange-600" />
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">1</span>
                  <button className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
                    +
                  </button>
                </div>
              </div>

              {/* Buy Buttons */}
              <Button button={{ name: "Buy Now" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
