import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { CheckoutProvider } from '@/context/CheckoutProvider';

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  return (
    <CheckoutProvider>
      <div className={styles.checkoutArea}>{children}</div>
    </CheckoutProvider>
  );
};

export default CheckoutLayout;
