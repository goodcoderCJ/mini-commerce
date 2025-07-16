
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar';
import Footer from "./_components/Footer"
import QueryProvider from './_lib/OueryProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mini-Commerce',
  description: 'A tiny client-side e-commerce prototype',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="bg-gray-50 pt-20 flex-1 mb-[1rem]">{children}</main>
            <Footer/>
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}
