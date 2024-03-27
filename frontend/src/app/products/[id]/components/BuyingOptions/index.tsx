'use client';

import styles from './styles.module.scss';
import { ChangeEvent, useContext, useState } from 'react';
import { CartContext } from '@/context/CartProvider';
import { Product } from '@/types';
import { CartModal } from '@/app/products/[id]/components/CartModal';
import { Button } from '@/components/Button';

export const BuyingOptions = ({ product }: {
  product: Product;
}) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false)
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart, products } = useContext(CartContext);
  const images = Array(6).fill(product.image);
  const sizes = [{ id: 1, name: 'S' }, { id: 2, name: 'M' }, { id: 3, name: 'L' }, { id: 4, name: 'XL' }];

  const selectSize = (e: ChangeEvent<HTMLSelectElement>) => setSelectedSize(e.target.value);
  const handleAddToCart = () => {
    if (!products.includes(product)) {
      addToCart(product);
      setDisplayModal(true);
    }
  };
  const hideModal = () => setDisplayModal(false);

  return (
    <div className={styles.buyingOptions}>
      <div className={styles.selectAndBuy}>
        <select value={selectedSize} onChange={selectSize} className={styles.selectSize}>
          <option value="" disabled hidden>Choose size</option>
          {sizes.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
        </select>
        <Button variant='primary' onClick={handleAddToCart}>
          Add to bag
        </Button>
      </div>

      <div className={styles.colorSelection}>
        <p className={styles.colorLabel}>Color: <span>Black</span></p>
        <div className={styles.colorSelectionItems}>
          {images.map(image => <img className={styles.colorSelectionItem} key={Math.random() + image} src={image} />)}
        </div>
      </div>
      <CartModal displayed={displayModal} onHide={hideModal} />
    </div>
  );
};
