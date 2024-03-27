import { FieldError, UseFormRegister } from 'react-hook-form';
import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Field = forwardRef(({ title, error, ...rest }: {
  title: string;
  error?: FieldError
}, ref: ForwardedRef<HTMLInputElement>) => {
  const { name } = rest as UseFormRegister<any>;
  return (
    <div className={classNames(styles.field, { [styles.error]: !!error })}>
      <label htmlFor={name}>
        {title}
      </label>
      <input {...rest} ref={ref} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});

Field.displayName = 'Field';
