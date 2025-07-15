import { useQuery } from '@tanstack/react-query';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  slug: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  const data = localStorage.getItem('products');
  if (!data) {
    const res = await fetch('/data/products.json');
    const products = await res.json();
    localStorage.setItem('products', JSON.stringify(products));
    return products;
  }
  return JSON.parse(data);
};

export const useProducts = () => useQuery({ queryKey: ['products'], queryFn: fetchProducts });