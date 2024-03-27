import styles from './styles.module.scss';
import { ReactNode } from 'react';
import { X } from 'react-feather';

export const Chip = ({ icon, text, color = 'transparent', onClose }: {
  icon: ReactNode;
  text: string,
  color: string,
  onClose: () => void
}) => {

  return (
    <div className={styles.chip} style={{ borderColor: color }}>
      <div className={styles.chipMessage}>
        <span className={styles.chipIcon} style={{ background: color }}>
          {icon}
        </span>
        {text}
      </div>
      <X className={styles.closeChip} size={15} onClick={onClose} />
    </div>
  );
};
