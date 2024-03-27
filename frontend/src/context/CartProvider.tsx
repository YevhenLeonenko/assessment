'use client';

import { createContext, ReactNode, useState } from 'react';
import { Product } from '@/types';

type CartContextType = {
  products: Product[],
  total: number,
  productsCount: number,
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void,
}

export const CartContext = createContext<CartContextType>({
  products: [],
  total: 0,
  productsCount: 0,
  addToCart: () => null,
  removeFromCart: () => null,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existingProduct = products.find((cartProduct) => cartProduct.id === product.id);

    setProducts(existingProduct ? products : [...products, product]);
  };

  const removeFromCart = (productId: number) => setProducts(products.filter((product) => product.id !== productId));

  const total = products.reduce((total, product) => total + product.price , 0);

  const productsCount = products.length

  return <CartContext.Provider value={{
    products,
    addToCart,
    removeFromCart,
    total,
    productsCount
  }}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;
