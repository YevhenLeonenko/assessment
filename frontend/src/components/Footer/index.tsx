'use client';

import { Heart, Home, Search, ShoppingBag, User } from 'react-feather';
import { useContext } from 'react';
import { CartContext } from '@/context/CartProvider';
import Link from 'next/link';

import styles from './styles.module.scss';

export const Footer = () => {
  const { productsCount } = useContext(CartContext);

  return (
    <footer className={styles.footer}>
      <Link href='/'>
        <Home />
      </Link>
      <Search />
      <Heart />
      <Link href={'/cart'}>
        {productsCount ? <span className={styles.productsCount}>{productsCount}</span> : null}
        <ShoppingBag />
      </Link>
      <User />
    </footer>
  );
};
