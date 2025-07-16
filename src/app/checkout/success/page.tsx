'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState, Suspense } from 'react'
import { useCartStore } from '../../_lib/zustandStore';
import Link from 'next/link';


function SuccessPageContent() {
  const [orderId, setOrderId] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const clearCart = useCartStore((state) => state.clearCart)

  useEffect(() => {
    clearCart()
    const order = searchParams.get('order') || Math.floor(Math.random() * 1000000).toString()
    setOrderId(order);
  }, [clearCart, searchParams])

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


export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading order details...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}
