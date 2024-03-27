'use client';

import { Product } from '@/types';
import styles from './styles.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'react-feather';
import { CartContext } from '@/context/CartProvider';

export const CartProduct = ({ product }: { product: Product }) => {
  const { removeFromCart } = useContext(CartContext);
  const [showActions, setShowActions] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const  handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node) && showActions) {
        setShowActions(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, showActions]);

  return (
    <div className={styles.cartProduct}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <div className={styles.productInfo}>
        <p className={styles.manufacturer}>{product.manufacturer.name}</p>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
      <div className={styles.actions}>
        {showActions ? (
            <div className={styles.actionOptions}>
              <button ref={ref} className={styles.button} onClick={() => removeFromCart(product.id)}>
                <X /> Delete product
              </button>
            </div>
          ) :
          <Menu onClick={() => setShowActions(true)} />
        }
      </div>
    </div>
  );
};
