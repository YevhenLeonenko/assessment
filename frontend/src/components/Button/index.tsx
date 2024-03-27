import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Button = ({ variant = 'primary', children, ...rest }: {
  variant: 'primary' | 'secondary',
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) =>
  <button {...rest} className={classNames(styles.button, styles[variant])}>{children}</button>;
