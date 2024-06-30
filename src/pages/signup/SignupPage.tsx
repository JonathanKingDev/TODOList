import React from "react";
import { SignupInput } from "./signup.vm";
import { mapSignupToRequest } from "./signup.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { FormSignup } from "./components/FormSignup";
import { isEmptyRequest } from "@/services/api/models/sigup.api-model";
import { registerUser } from "@/services/api/requests/signup.api";

interface Props {
  onSucessfulSignup?: () => void;
}

export const SignupPage: React.FC<Props> = (props) => {
  const { onSucessfulSignup: onSuccesFullSignUp } = props;
  const navigate = useNavigate();

  const handleSignupSubmit = (input: SignupInput) => {
    const credentials = mapSignupToRequest(input);

    //Método para evitar llamar a la api si la request está vacía
    if (isEmptyRequest(credentials)) return;

    registerUser(credentials).then((AppCredentials) => {
      if (AppCredentials) {
        alert("Signup successful! Please Login");
        navigate(appRoutes.RootPage);
        if (onSuccesFullSignUp) {
          onSuccesFullSignUp();
        }
      } else {
        alert("Error in signup");
      }
    });
  };
  return (
    <div>
      <FormSignup onSignup={handleSignupSubmit} />
    </div>
  );
};
