import { render, screen } from '@testing-library/react';
import SyncProvider from '@/components/SyncProvider';
import { ReactComponent as GmailIcon } from '@/assets/ic_gmail.svg';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
const options = ['foo', 'bar'];
const selectedOptions = { foo: false, bar: false };
const title = 'Gmail';
const targetServiceName = 'Mailchimp';

describe('when initializing', () => {
  test('it shows the corrects texts', () => {
    const onSelectItem = jest.fn();
    render(
      <I18nextProvider i18n={i18n}>
        <SyncProvider
          icon={<GmailIcon />}
          title={title}
          targetServiceName={targetServiceName}
          options={options}
          selectedOptions={selectedOptions}
          onSelectItem={onSelectItem}
        />
      </I18nextProvider>
    );
    const titleElement = screen.getByRole('heading', { level: 2 });
    const descriptionElement = screen.getByText(
      'These Gmail contacts will sync to Mailchimp'
    );

    expect(titleElement.innerHTML).toBe('Gmail');
    expect(descriptionElement).toBeDefined();
  });

  test('it selects items', async () => {
    const onSelectItem = jest.fn();
    render(
      <SyncProvider
        icon={<GmailIcon />}
        title={title}
        targetServiceName={targetServiceName}
        options={options}
        selectedOptions={selectedOptions}
        onSelectItem={onSelectItem}
      />
    );

    const item = screen.getByLabelText('foo');
    await user.click(item);

    expect(onSelectItem).toBeCalledWith('foo');
  });
});
