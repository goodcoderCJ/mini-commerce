'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useCartStore } from '../../_lib/zustandStore';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('order')
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg">Your order has been placed successfully.</p>
      <p className="mt-2 text-sm text-gray-600">Order ID: #{orderId}</p>
      <Link
        href="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
