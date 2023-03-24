import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('can recieve new user and show it on a list', () => {
  render(<App />);

  const name = screen.getByLabelText(/name/i);

  const email = screen.getByLabelText(/email/i);

  const button = screen.getByRole('button');

  user.click(name);
  user.keyboard('peter');

  user.click(email);
  user.keyboard('peter.adel@yahoo.com');

  user.click(button);

  const nameCell = screen.getByRole('cell', { name: 'peter' });
  const emailCell = screen.getByRole('cell', { name: 'peter.adel@yahoo.com' });

  expect(nameCell).toBeInTheDocument()
  expect(emailCell).toBeInTheDocument()
});
