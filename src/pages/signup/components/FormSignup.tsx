import React from "react";
import { SignupInput, createEmptyInput } from "../signup.vm";

interface Props {
  onSignup: (input: SignupInput) => void;
}

export const FormSignup: React.FC<Props> = (props) => {
  const { onSignup } = props;

  const [userInput, setUserInput] = React.useState<SignupInput>(
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
    onSignup(userInput);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Your Account</h1>
        <input
          type="text"
          placeholder="Enter your username..."
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter your email..."
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password..."
          name="password"
          onChange={handleChange}
        />
        <button className="button-login" id="blue" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};
