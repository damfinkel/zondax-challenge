import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from '@/components/Checkbox';
import userEvent from '@testing-library/user-event';

describe('when Checkbox is selected', () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  const label = 'bar';

  test('executes the onChange handler', async () => {
    render(<Checkbox id="foo" label={label} onChange={onChange} isSelected />);

    const labelElement = screen.getByLabelText(label);

    await user.click(labelElement);

    expect(onChange).toBeCalled();
  });

  test('checks the input', async () => {
    render(<Checkbox id="foo" label={label} onChange={onChange} isSelected />);

    const labelElement = screen.getByLabelText(label);
    const input = screen.getByRole('checkbox') as HTMLInputElement;

    await user.click(labelElement);

    expect(input.checked).toBeTruthy();
  });
});
