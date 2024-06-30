import { FormLogin } from "./components";
import { useNavigate } from "react-router-dom";
import { authenticateUser, isEmptyRequest } from "../../services/api";
import { appRoutes } from "@/core/router";
import { LoginInput } from "./login.vm";
import { mapCredentialsFormToRequest as mapLoginToRequest } from "./login.mapper";
import { useAuth } from "@/core/auth/auth.provider";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setToken, setUsername } = useAuth();

  const handleLoginSubmit = (input: LoginInput) => {
    const credentials = mapLoginToRequest(input);

    //Método para evitar llamar a la api si la request está vacía
    if (isEmptyRequest(credentials)) return;

    authenticateUser(credentials).then((appCredentials) => {
      if (appCredentials) {
        //guardar las credenciales en el localstorage
        setUsername(credentials.usernameOrEmail);
        setToken(appCredentials.token);

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
