import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ContactsSelect from '@/components/ContactsSelect';

import styles from './styles.module.scss';

interface Props {
  title: string;
  targetServiceName: string;
  icon: ReactElement;
}

function SyncProvider({ title, targetServiceName, icon }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.syncContactsContainer}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={cn('title', styles.title)}>{title}</h2>
      <p className={cn('description', styles.description)}>
        {t('syncDescription', { origin: title, target: targetServiceName })}
      </p>
      <ContactsSelect id={title} />
    </div>
  );
}

export default SyncProvider;
