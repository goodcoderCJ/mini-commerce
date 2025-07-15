
import { render, screen } from '@testing-library/react';
import ProductCard from "../src/app/_components/ProductCard"

const mockProduct = {
  id: 'p1',
  name: 'Test Product',
  slug: 'test-product',
  price: 99.99,
  image: '/drones.jpeg',
  description: 'A test product',
}

describe('ProductCard', () => {
  it('renders product details', () => {
    render(<ProductCard product={mockProduct} />)

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('$99.99')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view details/i })).toHaveAttribute('href', '/product/test-product')
  })
})
