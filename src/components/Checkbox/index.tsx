import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

function Checkbox({ onChange, isSelected }: Props) {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        onChange={onChange}
      />
      <span
        className={cn(styles.checkmark, {
          [styles.selected]: isSelected
        })}
      />
    </div>
  );
}

export default Checkbox;
