import styles from './styles.module.scss';
import { Truck } from 'react-feather';

export const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <div className={styles.arrival}><Truck /> 2-4 working days</div>
      <span className={styles.cost}>Free delivery</span>
    </div>
  )
}
