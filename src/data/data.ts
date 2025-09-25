export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  image: `https://picsum.photos/300/300?random=${i + 1}`,
  description: `This is a description for Product ${
    i + 1
  }. It is a high-quality product.`,
}));

export default products;
