'use client';
import { CSSTransition } from 'react-transition-group';
import { useContext, useRef, useState } from 'react';
import { CartContext } from '@/context/CartProvider';
import styles from './styles.module.scss';
import { Check, X } from 'react-feather';
import { Chip } from '@/components/Chip';
import { CartProduct } from '@/components/CartProduct';
import Link from 'next/link';
import { Button } from '@/components/Button';

export const CartModal = ({ displayed, onHide }: { displayed: boolean, onHide: () => void }) => {
  const { products } = useContext(CartContext);
  const nodeRef = useRef(null);
  const [showChip, setShowChip] = useState(true);

  return (
    <CSSTransition
      in={displayed}
      nodeRef={nodeRef}
      timeout={300}
      unmountOnExit
      classNames="cart-modal"
    >
      <div
        className={styles.modal}
        ref={nodeRef}
      >
        <div className={styles.content}>
          <div className={styles.heading}>
            <X className={styles.close} onClick={onHide} />
            <h4>
              Shopping Cart
            </h4>
          </div>
          {showChip ?
            <Chip
              icon={<Check stroke="#ffffff" />}
              text="Product successfully added to Shopping Cart"
              color="#30DB5B"
              onClose={() => setShowChip(false)} />
            : null}
          <div className={styles.products}>
            {products.length < 1 ?
              <h4>No products to display</h4> :
              products.map((product) => <CartProduct key={product.id} product={product} />)
            }
          </div>
          <div className={styles.footer}>
            <Link href="/cart">
              <Button variant="primary">
                Go to shopping cart
              </Button>
            </Link>
            <Button variant="secondary" onClick={onHide}>
              Keep shopping
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
