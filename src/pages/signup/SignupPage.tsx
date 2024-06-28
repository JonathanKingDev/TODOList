import React, { useEffect, useState } from "react";
import { SignupInput } from "./signup.vm";
import { mapSignupToRequest } from "./signup.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { registerUser } from "@/services/api/requests/signup.api";
import { FormSignup } from "./components/FormSignup";
import { isEmptyRequest } from "@/services/api/models/sigup.api-model";

interface Props {
  onSignupSuccess: () => void;
}

export const SignupPage: React.FC<Props> = (props) => {
  const { onSignupSuccess } = props;

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      alert("Signup successful! Please, Log in!");

      return;
    }
  }, [showAlert]);

  const navigate = useNavigate();

  const handleSignupSubmit = (input: SignupInput) => {
    const credentials = mapSignupToRequest(input);

    //Método para evitar llamar a la api si la request está vacía
    if (isEmptyRequest(credentials)) return;

    registerUser(credentials).then((AppCredentials) => {
      if (AppCredentials) {
        onSignupSuccess();
        setShowAlert(true);
        navigate(appRoutes.ParentComponent);
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
