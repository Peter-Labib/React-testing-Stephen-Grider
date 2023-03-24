import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

import UserForm from "./UserForm";

test("it show two inputs and one button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("simulate onUserAdd", () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  // const [name, email] = screen.getAllByRole("textbox");
  const name = screen.getByLabelText(/name/i)

  const email = screen.getByLabelText(/email/i)
  
  const button = screen.getByRole("button");

  user.click(name);
  user.keyboard("peter");

  user.click(email);
  user.keyboard("peter.adel@yahoo.com");

  user.click(button);

  expect(mock).toBeCalled();
  expect(mock).toBeCalledWith({ name: "peter", email: "peter.adel@yahoo.com" });
});

test('empties email and name inputs after submitting', ()=>{

  render(<UserForm onUserAdd={()=>{}} />);

  const name = screen.getByLabelText(/name/i)

  const email = screen.getByLabelText(/email/i)
  
  const button = screen.getByRole("button");

  user.click(name);
  user.keyboard("peter");

  user.click(email);
  user.keyboard("peter.adel@yahoo.com");

  user.click(button);

  expect(name).toHaveValue('')
  expect(email).toHaveValue('')
})