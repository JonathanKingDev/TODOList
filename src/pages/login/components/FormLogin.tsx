import React from "react";
import { AppUser, createEmptyInput } from "../login.vm";

interface Props {
  onLogin: (input: AppUser) => void;
}

export const FormLogin: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [credentials, setCredentials] = React.useState<AppUser>(
    createEmptyInput()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">User</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username..."
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
          <footer>HOLA SOY EL PIE</footer>
        </form>
      </div>
    </>
  );
};

//TODO: añadir boton de signup
