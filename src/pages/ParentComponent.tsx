import React from "react";
import { LoginPage, SignupPage } from ".";

export const ParentComponent: React.FC = () => {
  const [isSignUp, setIsSignUp] = React.useState(false);

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  const handleSignupSuccess = () => {
    setIsSignUp(false);
  };

  return (
    <div
      className={`container ${isSignUp ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container login-container">
        <LoginPage />
      </div>

      <div className="form-container signup-container">
        <SignupPage onSignupSuccess={handleSignupSuccess} />
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Welcome!</h1>
            <p>Sign up with your account</p>
            <button
              className="button-login ghost"
              id="login"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Hello!!!</h1>
            <p>Create your account</p>
            <button
              className="button-login ghost"
              id="singUp"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
