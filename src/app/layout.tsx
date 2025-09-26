import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Layout components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShopProvider } from "@/contexts/ShopContext";

// Load Google Fonts with custom CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Mini-Ecommerce",
};

// Root layout wraps the entire app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans?.variable ?? ""} ${
          geistMono?.variable ?? ""
        }`}
      >
        <ShopProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
