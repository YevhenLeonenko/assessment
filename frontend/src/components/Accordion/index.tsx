'use client';

import { ReactNode, useState } from 'react';
import styles from './styles.module.scss';
import { ChevronDown } from 'react-feather';
import classNames from 'classnames';

export const Accordion = ({ title, children, panelContent }: {
  title: string;
  children: ReactNode,
  panelContent?: ReactNode
}) => {
  const [open, toggleOpen] = useState<boolean>(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.panel} onClick={() => toggleOpen(!open)}>
        {title}
        {panelContent}
        <ChevronDown className={classNames(styles.chevron, { [styles.rotated]: open })} />
      </div>
      {open ? (
        <div className={styles.content}>{children}</div>
      ) : null}
    </div>
  );
};
