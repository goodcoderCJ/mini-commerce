
'use client'

import Link from 'next/link'
import { useCartStore } from '../_lib/zustandStore';

export default function Navbar() {
  const cartCount = useCartStore((state) =>
    state.items.reduce((acc, item) => acc + item.quantity, 0)
  )

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Mini-Commerce
        </Link>
        <div className="space-x-6 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/cart" className="hover:text-blue-600 relative">
            Cart
            {cartCount > 0 && (
              <span className="ml-1 text-xs bg-red-600 text-white font-bold rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}
