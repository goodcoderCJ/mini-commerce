
'use client'

import { useRouter } from 'next/navigation'
import { useCartStore } from '../_lib/zustandStore';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter()
  const items = useCartStore((state) => state.items)
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const placeOrder = () => {
    router.push(`/checkout/success?order=${Math.floor(100000 + Math.random() * 900000)}`)
  }

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty.</h2>
        <Link href="/" className="text-blue-600 hover:underline">Go back to shop</Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="py-4 flex justify-between">
            <span>{item.name} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="text-right mt-6">
        <h2 className="text-xl font-semibold mb-2">Total: ${total.toFixed(2)}</h2>
        <button
          onClick={placeOrder}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}
