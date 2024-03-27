import { Star } from 'react-feather';
import styles from './styles.module.scss';

export const Rating = ({ value, maximum = 5 }: { value: number; maximum?: number }) => {
  const stars = Array(5).fill('');
  return (
    <div className={styles.rating}>
      {stars.map((_, index) => <Star size={14} key={index} fill={index + 1 <= value ? '#5f5ce6' : 'none'} />)} {value}/{maximum}
    </div>
  );
};
