import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import SyncProvider from '@/components/SyncProvider';
import { ReactComponent as GmailIcon } from '@/assets/ic_gmail.svg';
import { ReactComponent as MailchimpIcon } from '@/assets/ic_mailchimp.svg';
import { ReactComponent as ArrowRightIcon } from '@/assets/ic_arrow_right.svg';
import { ReactComponent as ArrowLeftIcon } from '@/assets/ic_arrow_left.svg';

import styles from './styles.module.scss';

function SyncContacts() {
  const { t } = useTranslation();

  return (
    <main className={styles.syncProviderContainer}>
      <div className={styles.syncContent}>
        <SyncProvider
          title="Gmail"
          targetServiceName="Mailchimp"
          icon={<GmailIcon />}
        />
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.syncButton}>
            <ArrowLeftIcon />
            <ArrowRightIcon />
          </button>
          <h3 className={cn('title', styles.syncButtonTitle)}>
            {t('syncContacts')}
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
