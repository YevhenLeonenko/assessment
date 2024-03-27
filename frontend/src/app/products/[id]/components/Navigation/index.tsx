'use client'

import Link from 'next/link';
import { Share2, ShoppingBag, X } from 'react-feather';
import { useContext } from 'react';
import { CartContext } from '@/context/CartProvider';
import styles from './styles.module.scss'

export const Navigation = () => {
  const { productsCount } = useContext(CartContext);
  return (
    <div className={styles.navigation}>
      <Link className={styles.close} href="/products">
        <X />
      </Link>
      <div className={styles.actions}>
        <Link className={styles.cartLink} href={'/cart'}>
          {productsCount ? <span className={styles.productsCount}>{productsCount}</span> : null}
          <ShoppingBag />
        </Link>
        <Share2 />
      </div>
    </div>
  );
};
