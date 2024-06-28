import React from "react";
import { SignupInput } from "./signup.vm";
import { mapSignupToRequest } from "./signup.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { registerUser } from "@/services/api/requests/signup.api";
import { FormSignup } from "./components/FormSignup";

interface Props {
  onSignupSuccess: () => void;
}

export const SignupPage: React.FC<Props> = (props) => {
  const { onSignupSuccess } = props;

  const navigate = useNavigate();

  const handleSignupSubmit = (input: SignupInput) => {
    const credentials = mapSignupToRequest(input);

    registerUser(credentials).then((AppCredentials) => {
      if (AppCredentials) {
        alert("hola");
        onSignupSuccess();

        navigate(appRoutes.ParentComponent);
      } else {
        alert("adios");
      }
    });
  };
  return (
    <div>
      <FormSignup onSignup={handleSignupSubmit} />
    </div>
  );
};
