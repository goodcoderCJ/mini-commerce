
'use client'

import { useCartStore } from '../_lib/zustandStore'
import Image from 'next/image'
import Link from 'next/link'

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Your cart is empty.</h2>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to shop
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="rounded object-cover w-24 h-24"
            />
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              <div className="mt-2 flex items-center gap-2">
                <label htmlFor={`qty-${item.id}`} className="text-sm">
                  Qty:
                </label>
                <input
                  id={`qty-${item.id}`}
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1 text-sm"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm hover:underline ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <h3 className="text-xl font-semibold mb-2">Subtotal: ${subtotal.toFixed(2)}</h3>
        <Link
          href="/checkout"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
