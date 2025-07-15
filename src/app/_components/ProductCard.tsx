
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '../_hooks/useProducts'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden bg-white">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-700 text-sm">${product.price.toFixed(2)}</p>
        <Link
          href={`/product/${product.slug}`}
          className="text-blue-600 hover:underline text-sm inline-block mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
