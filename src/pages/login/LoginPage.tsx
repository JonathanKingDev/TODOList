import { FormLogin } from "./components";
import { useNavigate } from "react-router-dom";
import { validationLogin } from "../../services/api";
import { appRoutes } from "@/core/router";
import { AppUser } from "./login.vm";
import { mapCredentialsFormToRequest } from "./login.mapper";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (input: AppUser) => {
    const credentials = mapCredentialsFormToRequest(input);

    validationLogin(credentials).then((AppCredentials) => {
      if (AppCredentials) {
        //guardar las credenciales en el localstorage
        localStorage.setItem("Token", AppCredentials.token);
        localStorage.setItem("Username", AppCredentials.username);
        localStorage.setItem("Email", AppCredentials.email);

        navigate(appRoutes.TaskListPage);
      } else {
        alert("Incorrect username and/or password");
      }
    });
  };

  return (
    <div>
      <div className="principal-container">
        <h1>Access</h1>
        <FormLogin onLogin={handleSubmit} />
      </div>
    </div>
  );
};
