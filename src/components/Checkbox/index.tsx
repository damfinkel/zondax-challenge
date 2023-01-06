import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

function Checkbox({ id, label, onChange, isSelected }: Props) {
  return (
    <label className={styles.checkboxLabel} htmlFor={id}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={id}
          className={styles.checkboxInput}
          onChange={onChange}
        />
        <span
          className={cn(styles.checkmark, {
            [styles.selected]: isSelected
          })}
        />
      </div>
      {label}
    </label>
  );
}

export default Checkbox;
