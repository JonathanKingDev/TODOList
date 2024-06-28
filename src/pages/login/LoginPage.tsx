import { FormLogin } from "./components";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../services/api";
import { appRoutes } from "@/core/router";
import { LoginInput } from "./login.vm";
import { mapCredentialsFormToRequest as mapLoginToRequest } from "./login.mapper";
import { saveCredentials } from "@/core/localstorage/localStorage.manager";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSubmit = (input: LoginInput) => {
    const credentials = mapLoginToRequest(input);

    authenticateUser(credentials).then((AppCredentials) => {
      if (AppCredentials) {
        //guardar las credenciales en el localstorage
        saveCredentials(AppCredentials);

        navigate(appRoutes.TaskListPage);
      } else {
        alert("Incorrect username and/or password");
      }
    });
  };

  return (
    <div>
      <FormLogin onLogin={handleLoginSubmit} />
    </div>
  );
};
