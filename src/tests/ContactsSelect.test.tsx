import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsSelect from '@/components/ContactsSelect';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();
const options = ['foo', 'bar'];
const selectedOptions = { foo: false, bar: false };

describe('when select initializes', () => {
  test('it hides the checkbox list', () => {
    const onSelectItem = jest.fn();
    render(
      <ContactsSelect
        isOpen={false}
        onOpenChange={jest.fn()}
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
  test('calls the onOpenChange method', async () => {
    const onSelectItem = jest.fn();
    const onOpenChange = jest.fn();

    render(
      <ContactsSelect
        id="foo"
        isOpen={false}
        onOpenChange={onOpenChange}
        options={options}
        selectedOptions={selectedOptions}
        onSelectItem={onSelectItem}
      />
    );

    const headerButton = screen.getByRole('button');

    await user.click(headerButton);

    expect(onOpenChange).toBeCalled();
  });
});

describe('when select is open and header is clicked', () => {
  test('it calls the onOpenChange method', async () => {
    const onSelectItem = jest.fn();
    const onOpenChange = jest.fn();

    render(
      <ContactsSelect
        id="foo"
        isOpen
        onOpenChange={onOpenChange}
        options={options}
        selectedOptions={selectedOptions}
        onSelectItem={onSelectItem}
      />
    );

    const headerButton = screen.getByRole('button');

    await user.click(headerButton);

    expect(onOpenChange).toBeCalled();
  });
});

describe('when a checkbox is selected', () => {
  test('it selects the element', async () => {
    const onSelectItem = jest.fn();
    render(
      <ContactsSelect
        id="foo"
        isOpen
        onOpenChange={jest.fn()}
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
