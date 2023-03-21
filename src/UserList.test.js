import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "peter", email: "peter.labib@gmail.com" },
    { name: "mohab", email: "mohab@gmail.com" },
  ];
  render(<UserList users={users} />);

  screen.logTestingPlaygroundURL()
});
