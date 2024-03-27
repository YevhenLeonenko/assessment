import { Product } from '@/types';
import { ProductCard } from '@/components/ProductCard';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { ReactNode } from 'react';

export const ProductsList = ({ products, scrollable = false, className, children }: {
  products: Product[],
  scrollable?: boolean,
  className?: string;
  children?: ReactNode
}) => {
  return (
    <div className={classNames(styles.productsList, className)}>
      {children ? <div className={styles.content}>{children}</div> : null}
      <div className={classNames(styles.productItems, { [styles.scrollable]: scrollable })}>
        {products.map(product => <ProductCard scrollable={scrollable} key={product.id} product={product} />)}
      </div>
    </div>
  );
};
