"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="container mx-auto min-h-[80vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Landing Page</h1>
      <Link href="/products" className="mt-20">
        <Button label="All Products" />
      </Link>
    </section>
  );
}
