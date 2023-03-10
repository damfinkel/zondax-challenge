import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useState } from 'react';

import SyncProvider from '@/components/SyncProvider';
import { ReactComponent as GmailIcon } from '@/assets/ic_gmail.svg';
import { ReactComponent as MailchimpIcon } from '@/assets/ic_mailchimp.svg';
import { ReactComponent as ArrowRightIcon } from '@/assets/ic_arrow_right.svg';
import { ReactComponent as ArrowLeftIcon } from '@/assets/ic_arrow_left.svg';

import styles from './styles.module.scss';
import {
  GMAIL_OPTIONS,
  initialSelectedOptions,
  MAILCHIMP_OPTIONS
} from './constants';

function SyncContacts() {
  const { t } = useTranslation();
  const [syncDone, setSyncDone] = useState(false);
  const [syncLoading, setSyncLoading] = useState(false);

  // Could handle this, options and handler with Context
  // But I like that the SyncProvider could be reused somewhere else
  // And doesn't depend on a Context
  const [gmailSelectedOptions, setGmailSelectedOptions] = useState(
    initialSelectedOptions(GMAIL_OPTIONS)
  );
  const [mailChimpSelectedOptions, setMailChimpSelectedOptions] = useState(
    initialSelectedOptions(MAILCHIMP_OPTIONS)
  );

  const handleSync = () => {
    // Sync data using gmailSelectedOptions and mailChimpSelectedOptions
    // Faking it with a setTimeout
    setSyncLoading(true);
    setTimeout(() => {
      setSyncLoading(false);
      setSyncDone(true);
    }, 5000);
  };

  const getButtonTitle = () => {
    if (syncDone) {
      return t('allDone');
    }
    return t(syncLoading ? 'loading' : 'syncContacts');
  };

  return (
    <main className={styles.syncContactsContainer}>
      <div className={styles.syncContent}>
        <SyncProvider
          title="Gmail"
          targetServiceName="Mailchimp"
          icon={<GmailIcon />}
          options={GMAIL_OPTIONS}
          selectedOptions={gmailSelectedOptions}
          onSelectItem={(option) =>
            setGmailSelectedOptions((prev) => ({
              ...prev,
              [option]: !prev[option]
            }))
          }
        />
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={cn(styles.syncButton, { [styles.syncing]: syncLoading })}
            onClick={handleSync}
            aria-label={getButtonTitle()}
            disabled={syncDone}
          >
            <ArrowLeftIcon
              className={cn(styles.arrow, styles.arrowTop, {
                [styles.arrowActive]: syncDone,
                [styles.syncing]: syncLoading
              })}
            />
            <ArrowRightIcon
              className={cn(styles.arrow, styles.arrowBottom, {
                [styles.arrowActive]: !syncDone,
                [styles.syncing]: syncLoading
              })}
            />
          </button>
          <h3 className={cn('title', styles.syncButtonTitle)}>
            {getButtonTitle()}
          </h3>
        </div>
        <SyncProvider
          title="MailChimp"
          targetServiceName="Gmail"
          icon={<MailchimpIcon />}
          options={MAILCHIMP_OPTIONS}
          selectedOptions={mailChimpSelectedOptions}
          onSelectItem={(option) =>
            setMailChimpSelectedOptions((prev) => ({
              ...prev,
              [option]: !prev[option]
            }))
          }
        />
      </div>
    </main>
  );
}

export default SyncContacts;
