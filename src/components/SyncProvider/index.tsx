import { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ContactsSelect from '@/components/ContactsSelect';

import styles from './styles.module.scss';

interface Props {
  title: string;
  targetServiceName: string;
  icon: ReactElement;
  options: string[];
  onSelectItem: (option: string) => void;
  selectedOptions: Record<string, boolean>;
}

function SyncProvider({
  title,
  targetServiceName,
  icon,
  options,
  onSelectItem,
  selectedOptions
}: Props) {
  const { t } = useTranslation();
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div className={styles.syncContactsContainer}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={cn('title', styles.title)}>{title}</h2>
      <p className={cn('description', styles.description)}>
        {t('syncDescription', { origin: title, target: targetServiceName })}
      </p>
      <ContactsSelect
        id={title}
        isOpen={isSelectOpen}
        onOpenChange={() => setIsSelectOpen((prev) => !prev)}
        options={options}
        onSelectItem={onSelectItem}
        selectedOptions={selectedOptions}
      />
    </div>
  );
}

export default SyncProvider;
