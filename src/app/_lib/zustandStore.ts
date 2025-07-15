import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  subtotal: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (item) => {
        const existing = get().items.find(i => i.id === item.id);
        if (existing) {
          set({ items: get().items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i) });
        } else {
          set({ items: [...get().items, item] });
        }
      },
      removeFromCart: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      updateQuantity: (id, qty) => set({ items: get().items.map(i => i.id === id ? { ...i, quantity: qty } : i) }),
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
      get subtotal() {
        return get().items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'mini-commerce-cart',
    }
  )
);
