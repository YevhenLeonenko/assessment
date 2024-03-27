import styles from './styles.module.scss';
import { Product } from '@/types/Product';
import Link from 'next/link';
import classNames from 'classnames';

export const ProductCard = ({ product: { id, image, title, price, manufacturer }, scrollable }: {
  product: Product,
  scrollable?: boolean
}) => {
  return (
    <Link className={classNames(styles.productCard, { [styles.scrollable]: scrollable })} href={`/products/${id}`}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.info}>
        <p className={styles.manufacturer}>
          {manufacturer.name}
        </p>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.price}>
          ${price}
        </p>
      </div>
    </Link>
  );
};
