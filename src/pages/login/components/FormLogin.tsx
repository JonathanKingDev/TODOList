import React from "react";
import { LoginInput, createEmptyInput } from "../login.vm";

interface Props {
  onLogin: (input: LoginInput) => void;
}

export const FormLogin: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [userInput, setUserInput] = React.useState<LoginInput>(
    createEmptyInput()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(userInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username..."
          onChange={handleChange}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          onChange={handleChange}
        />
        <button className="button-login" type="submit">
          Log In
        </button>
      </form>
    </>
  );
};
