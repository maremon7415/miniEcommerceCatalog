import React from "react";

// Layout wrapper for all /products routes
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="products-layout p-6 bg-gray-50 min-h-screen">
      {children}
    </div>
  );
}
