import styles from './styles.module.scss';
import { ReactNode } from 'react';

export const Title = ({ title, children }: { title: string; children?: ReactNode }) => {
  return (
    <div className={styles.productTitle}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
