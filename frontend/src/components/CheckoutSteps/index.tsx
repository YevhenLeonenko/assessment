import styles from '@/app/cart/styles.module.scss';
import classNames from 'classnames';

export const CheckoutSteps = ({ active }: { active: number }) => {
  const steps = ['Shop', 'Address', 'Payment', 'Confirm', 'Ready'];

  return (
    <div className={styles.steps}>
      {steps.map((step, index) => (
        <span key={index} className={classNames(styles.step, { [styles.active]: active === index })}>
              <i>{index + 1}</i>
          {step}
        </span>
      ))}
    </div>
  );
};
