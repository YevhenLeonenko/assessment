'use client';
import { useContext, useState } from 'react';
import { CartContext } from '@/context/CartProvider';
import { Truck } from 'react-feather';
import { Chip } from '@/components/Chip';

import styles from './styles.module.scss';
import { CartProduct } from '@/components/CartProduct';
import { CheckoutSteps } from '@/components/CheckoutSteps';
import { Button } from '@/components/Button';
import Link from 'next/link';

const Cart = () => {
  const [showChip, setShowChip] = useState(true);
  const { products, productsCount, total } = useContext(CartContext);
  const noProducts = productsCount < 1;

  return (
    <div className={styles.cart}>
      <div className={styles.details}>
        <div className={styles.heading}>
          <h4>Shopping cart</h4>
          <span>
            {productsCount} item{productsCount > 1 || productsCount === 0 ? 's' : ''}
          </span>
        </div>
        <CheckoutSteps active={0} />

        {showChip ? (
          <Chip
            icon={<Truck stroke="#ffffff" />}
            text="Expected delivery in 2 days"
            color="#464964"
            onClose={() => setShowChip(false)} />
        ) : null}
        {products.length < 1 ?
          <h4>No products to display</h4> :
          <div className={styles.products}>
            {products.map((product) => <CartProduct key={product.id} product={product} />)}
          </div>
        }
      </div>
      <div className={styles.continue}>
        <div className={styles.delivery}>
          <b>Delivery</b>
          <span>$0</span>
        </div>
        <div className={styles.total}>
          <b>Total price</b>
          <span>${total}</span>
        </div>
        <Link href={noProducts ? '/cart' : '/checkout/address'}>
          <Button variant="primary">
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
