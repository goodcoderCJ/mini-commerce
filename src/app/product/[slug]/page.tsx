
'use client'

import { notFound } from 'next/navigation'
import { useProducts } from '../../_hooks/useProducts';
import { useCartStore } from '../../_lib/zustandStore';
import Image from 'next/image';
import { useParams } from "next/navigation";



export default function ProductDetail() {
  const { data, isLoading, error } = useProducts();
  const addToCart = useCartStore((state) => state.addToCart);
  const params = useParams();
  const productSlug = params.slug as string;

  if (isLoading) return <div className="p-4">Loading product...</div>
  if (error || !data) return <div className="p-4 text-red-500">Failed to load product.</div>

  const product = data.find((p) => p.slug === productSlug.toString())
  if (!product) return notFound()

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 })
  }

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-start">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={600}
        className="w-full object-cover rounded-xl"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 text-lg mb-4">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mb-6">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
