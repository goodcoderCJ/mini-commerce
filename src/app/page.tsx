'use client';
import { useProducts } from './_hooks/useProducts';
import ProductCard from './_components/ProductCard';

export default function Home() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div className="p-4">Loading products...</div>;
  if (error) return <div className="p-4 text-red-500">Failed to load products.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
