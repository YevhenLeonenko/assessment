import styles from './styles.module.scss'

export const BasicInformation = ({ title, manufacturer, price }: { title: string; manufacturer: string; price: number }) => {
  return <div className={styles.basicInformation}>
    <p className={styles.manufacturer}>{manufacturer}</p>
    <div className={styles.nameAndPrice}>
      <span className={styles.name}>{title}</span>
      <span className={styles.price}>${price}</span>
    </div>
  </div>;
};
