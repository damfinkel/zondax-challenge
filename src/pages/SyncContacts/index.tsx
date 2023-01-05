import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useState } from 'react';

import SyncProvider from '@/components/SyncProvider';
import { ReactComponent as GmailIcon } from '@/assets/ic_gmail.svg';
import { ReactComponent as MailchimpIcon } from '@/assets/ic_mailchimp.svg';
import { ReactComponent as ArrowRightIcon } from '@/assets/ic_arrow_right.svg';
import { ReactComponent as ArrowLeftIcon } from '@/assets/ic_arrow_left.svg';

import styles from './styles.module.scss';

function SyncContacts() {
  const { t } = useTranslation();
  const [syncDone, setSyncDone] = useState(false);

  const handleSync = () => {
    // Sync data
    setSyncDone(true);
  };

  return (
    <main className={styles.syncProviderContainer}>
      <div className={styles.syncContent}>
        <SyncProvider
          title="Gmail"
          targetServiceName="Mailchimp"
          icon={<GmailIcon />}
        />
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.syncButton}
            onClick={handleSync}
          >
            {syncDone ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            {syncDone ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </button>
          <h3 className={cn('title', styles.syncButtonTitle)}>
            {t(syncDone ? 'allDone' : 'syncContacts')}
          </h3>
        </div>
        <SyncProvider
          title="MailChimp"
          targetServiceName="Gmail"
          icon={<MailchimpIcon />}
        />
      </div>
    </main>
  );
}

export default SyncContacts;
