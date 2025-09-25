"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto h-[80vh] w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">Landing Page</h1>
      <Link href="/products" className="max-w-[200px] mt-20">
        <Button button={{ name: "All Products" }} />
      </Link>
    </section>
  );
}
