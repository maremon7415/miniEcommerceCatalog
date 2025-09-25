import React from "react";

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
