import { act, render, screen } from '@testing-library/react';
import SyncContacts from '@/pages/SyncContacts';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
// Since there's no real functionality or API call when clicking the button
// I'm only testing the feedback the user gets

describe('when initializing', () => {
  test('it shows the user the sync contacts button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SyncContacts />
      </I18nextProvider>
    );

    expect(screen.queryByLabelText('Sync Contacts')).toBeDefined();
    expect(screen.queryByLabelText('Loading...')).toBeNull();
    expect(screen.queryByLabelText('All Done!')).toBeNull();
  });
});

describe('when clicking on the Sync button', () => {
  jest.setTimeout(10000);
  test('it shows the Loading text and then the All Done text', async () => {
    const { rerender } = render(
      <I18nextProvider i18n={i18n}>
        <SyncContacts />
      </I18nextProvider>
    );
    const syncButton = screen.getByLabelText('Sync Contacts');
    await user.click(syncButton);

    expect(screen.queryByLabelText('Sync Contacts')).toBeNull();
    expect(screen.queryByLabelText('Loading...')).toBeDefined();
    expect(screen.queryByLabelText('All Done!')).toBeNull();

    await act(async () => {
      await new Promise<void>((r) => {
        setTimeout(() => {
          r();
        }, 5000);
      });
    });

    rerender(
      <I18nextProvider i18n={i18n}>
        <SyncContacts />
      </I18nextProvider>
    );
    expect(screen.queryByLabelText('Sync Contacts')).toBeNull();
    expect(screen.queryByLabelText('Loading...')).toBeNull();
    expect(screen.queryByLabelText('All Done!')).toBeDefined();
  });
});

describe('when clicking a gmail contacts option', () => {
  test('it selects that option', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SyncContacts />
      </I18nextProvider>
    );

    const item = screen
      .getAllByLabelText('Family')
      .find((input) => input.id.includes('Gmail')) as HTMLInputElement;
    await user.click(item);
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];

    const selectedCheckboxes = checkboxes.filter(
      (checkbox) => checkbox.checked
    );
    expect(selectedCheckboxes.length).toBe(1);
    expect(selectedCheckboxes[0].id).toBe('list-Gmail-option-family');
  });
});

describe('when clicking a mailchimp contacts option', () => {
  test('it selects that option', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SyncContacts />
      </I18nextProvider>
    );

    const item = screen
      .getAllByLabelText('Family')
      .find((input) => input.id.includes('MailChimp')) as HTMLInputElement;
    await user.click(item);
    const checkboxes = screen.getAllByRole('checkbox') as HTMLInputElement[];

    const selectedCheckboxes = checkboxes.filter(
      (checkbox) => checkbox.checked
    );
    expect(selectedCheckboxes.length).toBe(1);
    expect(selectedCheckboxes[0].id).toBe('list-MailChimp-option-family');
  });
});
