import { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { ReactComponent as CheckIcon } from '@/assets/ic_check.svg';
import { ReactComponent as ArrowUpIcon } from '@/assets/ic_dropdown_arrow_up.svg';

import Checkbox from '@/components/Checkbox';

import styles from './styles.module.scss';
import { MAX_LIST_HEIGHT } from './constants';

interface Props {
  id: string;
  onSelectItem: (selectedOptions: string) => void;
  selectedOptions: Record<string, boolean>;
  options: string[];
}

function ContactsSelect({ id, options, onSelectItem, selectedOptions }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectCheckbox = (option: string) => {
    // setSelectedOptions((prev) => ({ ...prev, [option]: !prev[option] }));
    onSelectItem(option);
  };

  return (
    <div className={styles.contactsSelectContainer}>
      <button
        type="button"
        className={styles.contactsSelectHeader}
        onClick={handleSelectClick}
      >
        <CheckIcon className={styles.check} />
        <h4 className={styles.contactsSelectTitle}>All contacts</h4>
        <ArrowUpIcon
          className={cn(styles.arrowUp, { [styles.open]: isOpen })}
        />
      </button>
      <ul
        className={styles.checkboxList}
        style={{ maxHeight: isOpen ? MAX_LIST_HEIGHT : 0 }}
      >
        {options.map((option) => (
          <li key={option} className={styles.checkboxRow}>
            <Checkbox
              id={`list-${id}-option-${option}`}
              label={t(option)}
              isSelected={selectedOptions[option]}
              onChange={() => handleSelectCheckbox(option)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsSelect;
