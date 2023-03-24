import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'peter', email: 'peter.labib@gmail.com' },
    { name: 'mohab', email: 'mohab@gmail.com' },
  ];
  render(<UserList users={users} />);

  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render the email and name for each user', () => {
  const users = [
    { name: 'peter', email: 'peter.labib@gmail.com' },
    { name: 'mohab', email: 'mohab@gmail.com' },
  ];
  render(<UserList users={users} />);

  for (const user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
