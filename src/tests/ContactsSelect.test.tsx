import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsSelect from '@/components/ContactsSelect';
import userEvent from '@testing-library/user-event';
import { MAX_LIST_HEIGHT } from '@/components/ContactsSelect/constants';

const user = userEvent.setup();
const options = ['foo', 'bar'];
const selectedOptions = { foo: false, bar: false };

describe('when select initializes', () => {
  test('it hides the checkbox list', () => {
    const onSelectItem = jest.fn();
    render(
      <ContactsSelect
        id="foo"
        options={options}
        selectedOptions={selectedOptions}
        onSelectItem={onSelectItem}
      />
    );
    const list = screen.getByRole('list');

    expect(list.style.maxHeight).toBe('0');
  });
});

describe('when select is closed and header is clicked', () => {
  test('it shows the checkbox list', async () => {
    const onSelectItem = jest.fn();
    render(
      <ContactsSelect
        id="foo"
        options={options}
        selectedOptions={selectedOptions}
        onSelectItem={onSelectItem}
      />
    );

    const headerButton = screen.getByRole('button');

    await user.click(headerButton);
    const list = screen.getByRole('list');

    expect(list.style.maxHeight).toBe(MAX_LIST_HEIGHT);
  });
});

describe('when select is open and header is clicked', () => {
  test('it hides the checkbox list', async () => {
    const onSelectItem = jest.fn();
    render(
      <ContactsSelect
        id="foo"
        options={options}
        selectedOptions={selectedOptions}
        onSelectItem={onSelectItem}
      />
    );

    const headerButton = screen.getByRole('button');

    await user.click(headerButton);
    await user.click(headerButton);
    const list = screen.getByRole('list');

    expect(list.style.maxHeight).toBe('0');
  });
});

describe('when a checkbox is selected', () => {
  test('it selects the element', async () => {
    const onSelectItem = jest.fn();
    render(
      <ContactsSelect
        id="foo"
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
