# Project Oveview

## 🛒 Mini-Commerce

A client-side e-commerce prototype built with **Next.js 14 App Router**, **React**, **React Query**, **Zustand**, **Tailwind CSS**, and **TypeScript**. This lightweight shop allows users to browse products, manage a cart, and complete a mock checkout — all **persisted in localStorage**.

---

## Features

| Feature            | Description |
|--------------------|-------------|
| Product Catalog  | Browse products from `products.json` via React Query |
| Product Detail   | `/product/[slug]` page for individual product view |
| Cart             | `/cart` page with add/remove/update support using Zustand |
| Checkout Flow    | `/checkout` and `/checkout/success` mock checkout & thank you page |
| Dark Mode      | Toggle with Zustand + Tailwind `dark` mode, yet to be added|
| Filters          | Filter by category and price range on homepage, yet to be added|
| Persistent State | All state is stored in `localStorage` for offline & reload survival |
| Testing          | Jest + RTL example test for component |
| Deployed         | Vercel-ready for instant live preview |
| Mobile Friendly  | Tailwind responsive design + accessibility friendly |

---

## Design Approach

Layout : Used grid layout while also including flexbox (all created using TailwindCss grid utility class and flex utility classes)
Color : Catalogue background - bg-white, button - bg-blue-600, cart-update-background : bg-red-600 (all done using TailwindCss);
Responsiveness: Responsiveness is carried out using responsive utility variants to build adaptative user interface. This is achieved by adding the breakpoint. Eg sm:, md: lg:, xl:, 2xl:

## SEO Stratedy

SEO was carried out using Nextjs Metadata

## Tech Stack

- **Next.js 14 (App Router)**
- **React 18**
- **React Query** – For product data fetching/caching
- **Zustand** – Cart and theme state management (with localStorage persistence)
- **Tailwind CSS** – Utility-first styling
- **TypeScript** – Strict mode, full type safety
- **Jest + RTL** – Component unit testing

---

## Project Structure

mini-commerce/
├── app/ # App Router pages
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home/catalog
│ ├── cart/page.tsx # Cart page
│ ├── checkout/page.tsx # Checkout summary
│ └── checkout/success/ # Thank you page
├── components/ # Reusable UI components
│ ├── Navbar.tsx
│ ├── ProductCard.tsx
│ └── FilterPanel.tsx
├── lib/
│ ├── zustandStore.ts # Cart state
│ ├── themeStore.ts # Theme state
│ └── QueryProvider.tsx # React Query client
├── hooks/
│ └── useProducts.ts # Fetch + seed products
├── public/
│ └── data/products.json # Mock product data
├── tests/
│ └── ProductCard.test.tsx
├── jest.setup.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md # You're here!

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/goodcoderCJ/mini-commerce.git
cd mini-commerce
2. Install Dependencies

npm install
3. Run the Dev Server

npm run dev
App should now be running at http://localhost:3000.

✅ Scripts
Script	Description
npm run dev Start dev server
npm run build Build for production
npm run lint Run ESLint
npm run format Prettier formatting
npm run test Run Jest tests

Example Test
I’ve included one unit test:


__tests__/ProductCard.test.tsx
To run tests:
npm run test

Deployment
Ready to deploy to Vercel:

Push code to GitHub

Import repo in Vercel

Set no special env vars (all localStorage)

Deploy!

Future Enhancements
 Product search

 Wishlist functionality

 User auth / protected checkout

 Order history page

 Real API backend integration

Credits
Built with ❤️ using:

Next.js

Tailwind CSS

Zustand

React Query

📄 License
This project is open-source and available under the MIT License.

Demo: https://mini-commerce-one-dusky.vercel.app
